#ifndef __MOTOR_H__
#define __MOTOR_H__

#include <Arduino.h>

void motor_init();
void right_gear_forward(uint8_t duty_cycle);
void right_gear_backward(uint8_t duty_cycle);
void right_gear_stop();
void left_gear_forward(uint8_t duty_cycle);
void left_gear_backward(uint8_t duty_cycle);
void left_gear_stop();
void move_left_gear(uint8_t rot_sense, uint8_t duty_cycle);
void move_right_gear(uint8_t rot_sense, uint8_t duty_cycle);

#endif