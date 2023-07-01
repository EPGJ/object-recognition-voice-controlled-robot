#include "motor.h"

// esp32-cam pins
// const int IN1 = 12;  
// const int IN2 = 13;   
// const int IN3 = 15;  
// const int IN4 = 14; 

//arduino pins
const int IN1 = 9;  
const int IN2 = 6;   
const int IN3 = 5;  
const int IN4 = 3; 
const int LeftPwmMotor = 11;
const int RightPwmMotor = 10;

// ESP32 PWM settings
// const int pwm_right_pin = 2;
// const int pwm_left_pin = 4;
// const int pwm_right_channel = 0;
// const int pwm_left_channel = 1;
// const int pwm_freq = 5000;
// const int pwm_resolution = 8;



void motor_init() {
    // pinMode(pwm_right_pin, OUTPUT);
    // pinMode(pwm_left_pin, OUTPUT);

    pinMode(IN2, OUTPUT);
    pinMode(IN3, OUTPUT);
    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);

    //Arduino
    pinMode(LeftPwmMotor, OUTPUT);
    pinMode(RightPwmMotor, OUTPUT);

    // ESP32 PWM setup
    // ledcSetup(pwm_right_channel, pwm_freq, pwm_resolution);
    // ledcSetup(pwm_left_channel, pwm_freq, pwm_resolution);
    // ledcAttachPin(pwm_right_pin, pwm_right_channel);
    // ledcAttachPin(pwm_left_pin, pwm_left_channel);
}

void right_gear_forward(uint8_t duty_cycle) {
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    analogWrite(RightPwmMotor, duty_cycle);
    // ledcWrite(pwm_right_channel, duty_cycle);
}

void right_gear_backward(uint8_t duty_cycle) {
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    analogWrite(RightPwmMotor, duty_cycle);
    // ledcWrite(pwm_right_channel, duty_cycle);
}

void right_gear_stop() {
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
    analogWrite(RightPwmMotor, 0);
}

void left_gear_forward(uint8_t duty_cycle) {
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
    analogWrite(LeftPwmMotor, duty_cycle);
    // ledcWrite(pwm_left_channel, duty_cycle);
}

void left_gear_backward(uint8_t duty_cycle) {
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    analogWrite(LeftPwmMotor, duty_cycle);
    // ledcWrite(pwm_left_channel, duty_cycle);
}

void left_gear_stop() {
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
    analogWrite(LeftPwmMotor, 0);
}

void move_left_gear(uint8_t rot_sense, uint8_t duty_cycle) {
    left_gear_stop();
    if (rot_sense == (uint8_t)'F')
        left_gear_forward(duty_cycle);
    else if (rot_sense == (uint8_t)'T')
        left_gear_backward(duty_cycle);
    else
        left_gear_stop();
}

void move_right_gear(uint8_t rot_sense, uint8_t duty_cycle) {
    right_gear_stop();
    if (rot_sense == (uint8_t)'F')
        right_gear_forward(duty_cycle);
    else if (rot_sense == (uint8_t)'T')
        right_gear_backward(duty_cycle);
    else
        right_gear_stop();
}