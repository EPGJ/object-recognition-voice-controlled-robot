#include "motor.h"
#include "wifi.h"
#include "socket.h"

void setup() {
  Serial.begin(115200);
  init_motor();
  init_wifi();
  init_socket();
}

void loop() {
 connection_socket();
  
//  para_motor_direito();/
//  para_motor_esquerdo();/

 // movimenta_motor_esquerdo((char*)'1');
  //delay(2000);
  //para_motor_esquerdo();
  //delay(1000);
//
  //movimenta_motor_esquerdo((char*)'0');
  //delay(2000);
  //para_motor_esquerdo();
  //delay(1000);
//  
  //movimenta_motor_direito((char*)'1');
  //delay(2000);
  //para_motor_direito();
  //delay(1000);
//
  //movimenta_motor_direito((char*)'0');
  //delay(2000);
  //para_motor_direito();
  //delay(1000);
}
