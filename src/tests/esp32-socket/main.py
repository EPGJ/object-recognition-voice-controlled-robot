import socket
 
s = socket.socket()         
 
s.bind(('0.0.0.0', 8090))
s.listen(0)                 
 
while True:
    client, addr = s.accept()
 
    data = ["Hello", "from", "Python!"]
    client.send(str(data).encode() + b'\r')
 
    print("Closing connection")
    client.close()