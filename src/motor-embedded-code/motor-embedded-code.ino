#include "motor.h"
#include "wifi.h"
#include "socket.h"

void setup() {
    Serial.begin(115200);
    init_motor();
    init_wifi();
}

void loop() {
    String data;
    data = socket_receive_message();
    socket_treat_message(data);
}
