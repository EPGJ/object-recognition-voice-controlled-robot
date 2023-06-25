import socket

HOST = "127.0.0.1"
PORT = 8090

def main():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, PORT))
        s.listen()
        conn, addr = s.accept()
        with conn:
            print(f"Connected by {addr}")
            while True:
                conn.send(b"HELLO WORLD!")

if __name__ == "__main__":
    main()