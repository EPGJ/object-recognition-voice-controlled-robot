import socket
import cv2
import base64
import json

HOST = "127.0.0.1"
PORT = 65432

def socket_main(s: socket.socket, cam):
    _, image = cam.read()
    resized_image = cv2.resize(image, (1280, 720))
    array_size = 1280 * 720 * 3
    reshaped_image = resized_image.reshape(array_size)
    image_base64 = base64.b64encode(reshaped_image)
    message = {"image": image_base64.decode("utf-8")}
    message_bytes = bytes(json.dumps(message), encoding='utf-8')
    s.sendall(message_bytes)

if __name__ == "__main__":
    cam = cv2.VideoCapture(0)
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((HOST, PORT))
        while True:
            socket_main(s, cam)