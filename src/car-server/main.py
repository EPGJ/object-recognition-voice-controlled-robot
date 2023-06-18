import socket

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

@socketio.on("comando")
def on_command(data):
    client, _ = s.accept()
 
    client.send(str(data).encode())
 
    print("Closing connection")
    client.close()

if __name__ == "__main__":
    s.bind((ESP_ADDRESS, ESP_PORT))
    s.listen(0)
    socketio.run(app)