import darknet
import random
import cv2
import socket
import numpy as np
import json
import base64

WEIGHTS = "cfg/yolov4-tiny.weights"
CONFIG_FILE = "cfg/yolov4-tiny.cfg"
DATA_FILE = "data/coco.data"
FPS = 24
HOST = "127.0.0.1"  # The server's hostname or IP address
PORT = 65431  # The port used by the server

def convert2relative(bbox):
    """
    YOLO format use relative coordinates for annotation
    """
    x, y, w, h  = bbox
    _height     = darknet_height
    _width      = darknet_width
    return x/_width, y/_height, w/_width, h/_height


def convert2original(image, bbox):
    x, y, w, h = convert2relative(bbox)

    image_h, image_w, __ = image.shape

    orig_x       = int(x * image_w)
    orig_y       = int(y * image_h)
    orig_width   = int(w * image_w)
    orig_height  = int(h * image_h)

    bbox_converted = (orig_x, orig_y, orig_width, orig_height)

    return bbox_converted


def convert4cropping(image, bbox):
    x, y, w, h = convert2relative(bbox)

    image_h, image_w, __ = image.shape

    orig_left    = int((x - w / 2.) * image_w)
    orig_right   = int((x + w / 2.) * image_w)
    orig_top     = int((y - h / 2.) * image_h)
    orig_bottom  = int((y + h / 2.) * image_h)

    if (orig_left < 0): orig_left = 0
    if (orig_right > image_w - 1): orig_right = image_w - 1
    if (orig_top < 0): orig_top = 0
    if (orig_bottom > image_h - 1): orig_bottom = image_h - 1

    bbox_cropping = (orig_left, orig_top, orig_right, orig_bottom)

    return bbox_cropping

def draw(frame, detections):
    random.seed(3)  # deterministic bbox colors
    detections_adjusted = []
    if frame is not None:
        for label, confidence, bbox in detections:
            bbox_adjusted = convert2original(frame, bbox)
            detections_adjusted.append((str(label), confidence, bbox_adjusted))
        image = darknet.draw_boxes(detections_adjusted, frame, class_colors)
        cv2.imshow('Inference', image)
        if cv2.waitKey(FPS) == 27:
            cv2.destroyAllWindows()
            quit()

def socket_main(s):
    data: bytes = s.recv(3686400 * 2) # 3686400 is the buffer size for the received image

    try: # There may be occasional miscommunications
        json_data = json.loads(data.decode("utf-8"))
    except json.decoder.JSONDecodeError as e:
        # It doesn't need to be logged at the moment
        return True
    
    # Decoding image and making it opencv-readable:
    img_data = json_data["image"]
    decoded_data = base64.b64decode(bytes(img_data, encoding="utf-8") + b'==')
    img_array = np.frombuffer(decoded_data, dtype=np.uint8)
    img = img_array.reshape((720, 1280, 3))

    # Getting detections
    detections = json_data["detections"]

    draw(img, detections)
    return True

if __name__ == "__main__":
    network, class_names, class_colors = darknet.load_network(
        CONFIG_FILE,
        DATA_FILE,
        WEIGHTS,
        batch_size=1
    )
    darknet_width = darknet.network_width(network)
    darknet_height = darknet.network_height(network)

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((HOST, PORT))
        print("Connected to socket_recv service.")
        while socket_main(s):
            pass