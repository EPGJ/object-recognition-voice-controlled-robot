import socket

HOST = "127.0.0.1"
PORT = 8090

def main():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((HOST, PORT))
        while True:
            data = s.recv(1024)
            print(data)

if __name__ == "__main__":
    main()