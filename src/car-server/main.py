import signal
import socket
import threading
import time
import os

from flask import Flask
from flask_socketio import SocketIO
from selenium import webdriver

NODE_ADDRESS = "localhost"
NODE_PORT = 3000
ESP_ADDRESS = "0.0.0.0"
ESP_PORT = 8090

# Automated following
automatic_follow = False

# Setting up selenium
options = webdriver.EdgeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Edge(options=options)
driver.minimize_window()
driver.get("http://10.0.0.102:80/")

s = socket.socket()
instance_class = ""

app = Flask(__name__)
socketio = SocketIO(
    app,
    cors_allowed_origins=[f"http://{NODE_ADDRESS}:{NODE_PORT}"],
    engineio_logger=False
)

# Execution flow control
pid = os.getpid()
client_connected = threading.Event()

def convert_data_to_message(data):
    data_split = str(data)
    data_bytes = [d.encode() + b"\r" for d in data_split]
    return data_bytes

@socketio.on("comando")
def on_command(data):
    global automatic_follow
    for data_bytes in convert_data_to_message(data):
        client.sendall(data_bytes)
        print(data_bytes.decode())
        if "5" in data_bytes.decode():
            automatic_follow = not automatic_follow
            print(f"automatic_follow = {automatic_follow}")
    time.sleep(0)

@socketio.on("setClass")
def set_class(data):
    global instance_class
    print(instance_class)
    instance_class = data

def go_left():
    client.sendall(b"1\r")

def go_right():
    client.sendall(b"2\r")

def go_forward():
    client.sendall(b"3\r")

def go_backward():
    client.sendall(b"4\r")

def stop_gear():
    client.sendall(b"0\r")

def detections_loop():
    global instance_class
    clicked = False
    past_text = ""
    while True:
        form = driver.find_element("id", "result")
        if form.text == "" and not clicked:
            print("Selenium: I am waiting")
            stream_button = driver.find_element("id", "toggle-stream")
            stream_button.click()
            clicked = True

        text = form.text
        if text == None or text == "" or text == past_text:
            continue
        past_text = text

        detections = text.split("] ")
        for detection in detections:
            splitted_text = detection.split(", ")
            if len(splitted_text) < 6:
                continue
            category = splitted_text[0].split("0")[-1]
            coords = (int(splitted_text[2]), int(splitted_text[3]), int(splitted_text[4]), int(splitted_text[5].split("[")[0]))
            if category == instance_class and automatic_follow:
                print("Found object!")
                mid_x = (coords[0] + coords[2] // 2)
                mid_y = (coords[1] + coords[3] // 2)
                print(f"dists: {mid_x},{mid_y}")
                if mid_x > 200:
                    go_right()
                elif mid_x < 150:
                    go_left()
                stop_gear()

def sigint_handler(*_):
    print("Killing everything!")
    os.kill(pid, 9)

if __name__ == "__main__":
    signal.signal(signal.SIGINT, sigint_handler)
    threading.Thread(target=detections_loop).start()
    s.bind((ESP_ADDRESS, ESP_PORT))
    s.listen(0)
    #s.settimeout(10)
    client, _ = s.accept()
    client_connected.set()

    socketio.run(app)