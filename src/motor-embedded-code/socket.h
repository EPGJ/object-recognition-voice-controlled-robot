#ifndef __SOCKET_H__
#define __SOCKET_H__

#include "Arduino.h"
#include "wifi.h"
#include "motor.h"

String socket_receive_message();
void   socket_treat_message(String data);

#endif
