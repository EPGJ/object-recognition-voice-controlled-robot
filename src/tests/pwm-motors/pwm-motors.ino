#include "motor.h"

void setup() {
    Serial.begin(115200);
    motor_init();
}

void moveForward () {
    move_left_gear('F', 70);
    move_right_gear('F', 70);
}


void moveBackward() {
    move_left_gear('T', 70);
    move_right_gear('T', 70);
}

void turnRight() {
    move_left_gear('P', 0);
    move_right_gear('F', 70);
}
void turnLeft() {
    move_left_gear('F', 70);
    move_right_gear('P',70);
}

void loop() {
    moveForward();
    delay(2000);
    moveBackward();
    delay(2000);
    turnLeft();
    delay(2000);
    turnRight();
    delay(2000);
}
