#include "motor.h"


void setup() {
    Serial.begin(115200);
    motor_init();
}

void moveForward () {
    move_left_gear('F', 200);
    move_right_gear('F', 200);
}

void moveBackward() {
    move_left_gear('T', 200);
    move_right_gear('T', 200);
}

void turnLeft() {
    move_left_gear('P', 0);
    move_right_gear('F', 200);
}
void turnRight() {
    move_left_gear('F', 200);
    move_right_gear('P',200);
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
