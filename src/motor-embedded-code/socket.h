#ifndef __SOCKET_H__
#define __SOCKET_H__

#include "Arduino.h"
#include "wifi.h"
#include "motor.h"

WiFiClient socket_init();
String     socket_receive_message(WiFiClient client);
void       socket_treat_message(String data);

#endif
