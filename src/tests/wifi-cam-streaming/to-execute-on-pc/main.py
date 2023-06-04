import urllib.request
import numpy as np
import cv2

def main():
    framerate = 24
    camera_ip = "192.168.0.104"
    url = f"http://{camera_ip}/cam-mid.jpg"
    running = True
    while running:
        response = urllib.request.urlopen(url)
        img_as_text = response.read()
        encoded_img = np.array(
            bytearray(img_as_text), dtype=np.uint8
        )
        img = cv2.imdecode(encoded_img, -1)
        
        cv2.imshow("G.A.D.O. DEMO", img)
        if cv2.waitKey(framerate) == 27:
            running = False

        response.close()

if __name__ == "__main__":
    main()