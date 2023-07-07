#define MY_SCKT_HOST "YourLocalIP"
#define MY_SCKT_PORT 8090

#include <WiFi.h>
#include "socket.h"
 

WiFiClient socket_init() {
    WiFiClient client;
 
    while (!client.connect(MY_SCKT_HOST, MY_SCKT_PORT)) {
        delay(250);
    }

    return client;
}

String socket_receive_message(WiFiClient client) {
    String data = client.readStringUntil('\r');
    return data;
}

void socket_treat_message(String data) {
    Serial.println(data);
    uint8_t len;
    len = data.length();
    Serial.println(len);
    if (len < 1)
        return;

    // If there's any content on the message
    moveCar(data[0] - '0');
}