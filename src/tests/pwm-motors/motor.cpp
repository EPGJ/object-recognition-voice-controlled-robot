#include "motor.h"

// esp32-cam pins
const int IN1 = 12;  
const int IN2 = 13;   
const int IN3 = 15;  
const int IN4 = 14; 

const int pwm_left_pin = 4;
const int pwm_left_freq = 5000;
const int pwm_left_channel = 0;

const int pwm_right_pin = 2;
const int pwm_right_freq = 3000;
const int pwm_right_channel = 1;

const int pwm_resolution = 8;



void motor_init() {
    pinMode(pwm_right_pin, OUTPUT);
    pinMode(pwm_left_pin, OUTPUT);

    pinMode(IN2, OUTPUT);
    pinMode(IN3, OUTPUT);
    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);

    ledcSetup(pwm_right_channel, pwm_right_freq, pwm_resolution);
    ledcSetup(pwm_left_channel, pwm_left_freq, pwm_resolution);
    ledcAttachPin(pwm_right_pin, pwm_right_channel);
    ledcAttachPin(pwm_left_pin, pwm_left_channel);
}

void moveForward (uint8_t duty_cycle) {


    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    ledcWrite(pwm_right_channel, duty_cycle);
    delay(100);

    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
    ledcWrite(pwm_left_channel, duty_cycle);
    delay(100);

}


void moveBackward(uint8_t duty_cycle) {

    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    ledcWrite(pwm_right_channel, duty_cycle);
    delay(100);

    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    ledcWrite(pwm_left_channel, duty_cycle);   
    delay(100);
    
}

void turnRight(uint8_t duty_cycle) {


    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
    ledcWrite(pwm_right_channel, 0);
    delay(100);

    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
    ledcWrite(pwm_left_channel, duty_cycle);   
    delay(100);
    
}
void turnLeft(uint8_t duty_cycle) {


    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    ledcWrite(pwm_right_channel, duty_cycle);
    delay(100);

    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
    ledcWrite(pwm_left_channel, 0);   
    delay(100);
    
}

void moveStop() {

    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
    ledcWrite(pwm_right_channel, 0);
    delay(100);

    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
    ledcWrite(pwm_left_channel, 0); 
    delay(100);
    
}

void control_direction(uint8_t left_rot_sense, uint8_t right_rot_sense, uint8_t duty_cycle) {

    if(left_rot_sense == (uint8_t)'F' && right_rot_sense == (uint8_t)'F'){
        moveForward(duty_cycle);
    }
    if(left_rot_sense == (uint8_t)'F' && right_rot_sense == (uint8_t)'P'){
        turnRight(duty_cycle);
    }
    if(left_rot_sense == (uint8_t)'P' && right_rot_sense == (uint8_t)'F'){
        turnLeft(duty_cycle);
    }
    if(left_rot_sense == (uint8_t)'T' && right_rot_sense == (uint8_t)'T'){
        moveBackward(duty_cycle);
    }

}
