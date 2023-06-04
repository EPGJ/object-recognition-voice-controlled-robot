#ifndef __MOTOR_H__
#define __MOTOR_H__

#include <Arduino.h>

void init_motor();
void movimenta_motor_direito(char* sentido);
void para_motor_direito();
void movimenta_motor_esquerdo(char* sentido);
void para_motor_esquerdo();
void para_motores();
void movimenta_motor_frente();
void movimenta_motor_tras();
void movimenta_direito();
void movimenta_esquerdo();
#endif
