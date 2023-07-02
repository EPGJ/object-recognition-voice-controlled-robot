#ifndef __MOTOR_H__
#define __MOTOR_H__

#include <Arduino.h>

void motor_init();
void control_direction(uint8_t left_rot_sense, uint8_t right_rot_sense, uint8_t duty_cycle);
void moveForward (uint8_t duty_cycle);
void moveBackward(uint8_t duty_cycle);
void turnRight(uint8_t duty_cycle);
void turnLeft(uint8_t duty_cycle);
void moveStop();


#endif