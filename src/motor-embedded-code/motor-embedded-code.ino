#include <WiFi.h>
#include "motor.h"
#include "wifi.h"
#include "socket.h"

WiFiClient client = NULL;

void setup() {
    Serial.begin(115200);
    init_motor();
    init_wifi();
    client = socket_init();
}

void loop() {
    String data;
    data = socket_receive_message(client);
    socket_treat_message(data);
}
