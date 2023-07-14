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

# Setting up selenium
options = webdriver.EdgeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Edge(options=options)
driver.minimize_window()
driver.get("http://10.0.0.111:80/")

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
    for data_bytes in convert_data_to_message(data):
        client.sendall(data_bytes)
        print(data_bytes.decode())
    time.sleep(0)

@socketio.on("setClass")
def set_class(data):
    global instance_class
    print(instance_class)
    instance_class = data

def detections_loop():
    global instance_class
    clicked = False
    while True:
        form = driver.find_element("id", "result")
        if form.text == "" and not clicked:
            print("Selenium: I am waiting")
            stream_button = driver.find_element("id", "toggle-stream")
            stream_button.click()
            clicked = True

        text = form.text
        if text == "":
            continue

        detections = text.split("] ")
        for detection in detections:
            splitted_text = detection.split(", ")
            if len(splitted_text) < 6:
                continue
            category = splitted_text[0].split("0")[-1]
            coords = (int(splitted_text[2]), int(splitted_text[3]), int(splitted_text[4]), int(splitted_text[5].split("[")[0]))
            if category == instance_class:
                print("Found object!")
                mid_x = (coords[2] - coords[0]) // 2
                mid_y = (coords[3] - coords[1]) // 2
                print(f"dists: {128 - mid_x},{128 - mid_y}")

                dist_x = 128 - mid_x
                #if abs(dist_x) > 10:
                #    if dist_x > 0:
                #        client.sendall(b"1") # Go left
                #    else:
                #        client.sendall(b"2") # Go right
            time.sleep(0.5)

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