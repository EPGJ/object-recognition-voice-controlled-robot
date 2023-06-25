import socket
import time

from flask import Flask
from flask_socketio import SocketIO

NODE_ADDRESS = "localhost"
NODE_PORT = 3000
ESP_ADDRESS = "0.0.0.0"
ESP_PORT = 8090

s = socket.socket()

app = Flask(__name__)
socketio = SocketIO(
    app,
    cors_allowed_origins=[f"http://{NODE_ADDRESS}:{NODE_PORT}"],
    engineio_logger=False
)

def convert_data_to_message(data):
    data_split = str(data).split("][")
    data_bytes = [b"[" + d.replace("[","").replace("]","").encode() + b"]\r" for d in data_split]
    return data_bytes

@socketio.on("comando")
def on_command(data):
    for data_bytes in convert_data_to_message(data):
        client.sendall(data_bytes)
    time.sleep(0)

if __name__ == "__main__":
    s.bind((ESP_ADDRESS, ESP_PORT))
    s.listen(0)
    client, _ = s.accept()
    socketio.run(app)