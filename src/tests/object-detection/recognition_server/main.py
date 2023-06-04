from ctypes import *
import random
import cv2
import darknet
from threading import Thread, Event
from queue import Queue
import socket
import numpy as np
import base64
import cv2
import json
import time

WEIGHTS = "cfg/yolov4-tiny.weights"
CONFIG_FILE = "cfg/yolov4-tiny.cfg"
DATA_FILE = "data/coco.data"
THRESH = .25
FPS = 24

HOST = "127.0.0.1"  # Standard loopback interface address (localhost)
RECV_PORT = 65432  # Port to listen on (non-privileged ports are > 1023)
SEND_PORT = 65431  # Port to listen on (non-privileged ports are > 1023)

def socket_send_data(conn, frame_queue, detections_queue):
    # Getting results from detections queue
    if (detections_queue.empty() or frame_queue.empty()):
        return True
    
    frame = frame_queue.get()
    detections = detections_queue.get()

    resized_image = cv2.resize(frame, (1280, 720))
    array_size = 1280 * 720 * 3
    reshaped_image = resized_image.reshape(array_size)
    image_base64 = base64.b64encode(reshaped_image)
    message = {"image": image_base64.decode("utf-8"), "detections": detections}
    message_bytes = bytes(json.dumps(message), encoding='utf-8')
    conn.sendall(message_bytes)

    return True

def sender_socket(frame_queue, detections_queue):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as ssend:
        ssend.bind((HOST, SEND_PORT))
        ssend.listen()
        conn, _ = ssend.accept()
        with conn:
            print("Connected to socket_send service.")
            while socket_send_data(conn, frame_queue, detections_queue):
                continue

def socket_main(conn, frame_queue, darknet_image_queue):
    data: bytes = conn.recv(3686400 * 2) # 3686400 is the buffer size for the received image

    try: # There may be occasional miscommunications
        json_data = json.loads(data.decode("utf-8"))
    except json.decoder.JSONDecodeError:
        # It doesn't need to be logged at the moment
        return True
    
    # Decoding image and making it opencv-readable:
    img_data = json_data["image"]
    decoded_data = base64.b64decode(bytes(img_data, encoding="utf-8") + b'==')
    img_array = np.frombuffer(decoded_data, dtype=np.uint8)
    img = img_array.reshape((720, 1280, 3))
    
    # Sending image to darknet
    frame_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    frame_resized = cv2.resize(frame_rgb, (darknet_width, darknet_height),
                                interpolation=cv2.INTER_LINEAR)
    frame_queue.put(img)
    img_for_detect = darknet.make_image(darknet_width, darknet_height, 3)
    darknet.copy_image_from_bytes(img_for_detect, frame_resized.tobytes())
    darknet_image_queue.put(img_for_detect)
    
    return True

def inference(darknet_image_queue, detections_queue, finish_program: Event):
    while not finish_program.is_set():
        darknet_image = darknet_image_queue.get()
        detections = darknet.detect_image(network, class_names, darknet_image, thresh=THRESH)
        detections_queue.put(detections)
        darknet.free_image(darknet_image)

if __name__ == '__main__':
    frame_queue = Queue()
    darknet_image_queue = Queue(maxsize=1)
    detections_queue = Queue(maxsize=1)

    network, class_names, class_colors = darknet.load_network(
            CONFIG_FILE,
            DATA_FILE,
            WEIGHTS,
            batch_size=1
        )
    darknet_width = darknet.network_width(network)
    darknet_height = darknet.network_height(network)

    finish_program = Event()
    Thread(target=inference, args=(darknet_image_queue, detections_queue, finish_program)).start()
    Thread(target=sender_socket, args=(frame_queue, detections_queue)).start()

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, RECV_PORT))
        s.listen()
        conn, _ = s.accept()
        with conn:
            print("Connected to socket_recv service.")
            while not finish_program.is_set():
                socket_main(conn, frame_queue, darknet_image_queue)
