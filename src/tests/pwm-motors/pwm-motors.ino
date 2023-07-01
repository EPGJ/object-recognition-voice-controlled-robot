#include "motor.h"

void setup() {
    Serial.begin(115200);
    motor_init();
}

void moveForward () {
    move_left_gear('F', 255);
    move_right_gear('F', 255);
}


void moveBackward() {
    move_left_gear('T', 255);
    move_right_gear('T', 255);
}

void turnRight() {
    move_left_gear('P', 255);
    move_right_gear('F', 255);
}
void turnLeft() {
    move_left_gear('F', 255);
    move_right_gear('P',255);
}

void moveStop() {
    move_left_gear('P', 255);
    move_right_gear('P',255);
}

void loop() {
    moveForward();
    delay(1000);
    moveStop();
    delay(1000);
    moveBackward();
    delay(1000);
    moveStop();
    delay(1000);
    turnLeft();
    delay(1000);
    moveStop();
    delay(1000);
    turnRight();
    delay(1000);
    moveStop();
    delay(1000);
}