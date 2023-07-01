#include "motor.h"
const int IN1 = 9;  
const int IN2 = 6;   
const int IN3 = 5;  
const int IN4 = 3; 
const int LeftPwmMotor = 11;
const int RightPwmMotor = 10;

void setup() {
    Serial.begin(115200);
    motor_init();
}

void moveForward () {
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);

    analogWrite(RightPwmMotor, 255);
    analogWrite(LeftPwmMotor, 255);
}


void moveBackward() {
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    
    analogWrite(RightPwmMotor, 255);
    analogWrite(LeftPwmMotor, 255);   
}

void turnRight() {
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
    
    analogWrite(RightPwmMotor, 255);
    analogWrite(LeftPwmMotor, 255);   
}
void turnLeft() {
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
    
    analogWrite(RightPwmMotor, 255);
    analogWrite(LeftPwmMotor, 255);   
}

void moveStop() {
     digitalWrite(IN1, LOW);
     digitalWrite(IN2, LOW);
     digitalWrite(IN3, LOW);
     digitalWrite(IN4, LOW);
    
     analogWrite(RightPwmMotor, 0);
     analogWrite(LeftPwmMotor, 0);   
}




void loop() {
    moveForward();
    delay(2000);
    moveStop();
    delay(1000);
    turnLeft();
    delay(2000);
    moveStop();
    delay(1000);
    moveBackward();
    delay(2000);
    moveStop();
    delay(1000);
    turnRight();
    delay(2000);
    moveStop();
    delay(1000);
}
