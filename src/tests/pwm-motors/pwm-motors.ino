#include "motor.h"
const int speed = 255;

void setup() {
    Serial.begin(115200);
    motor_init();
}

void loop() {
    //working  // ******************************
    // control_direction('F','F', speed); // --> moveForward -- works perfectly
    // delay(2000);
    // moveStop();
    // delay(1000);

    control_direction('P','F', speed); // --> turn left -- works perfectly
    delay(2000);
    moveStop();
    delay(1000);
    
    control_direction('F','P', speed);  // --> turn right -- works perfectly
    delay(2000);
    moveStop();
    delay(1000);

    // control_direction('T','T', speed); // --> Just the right wheel move backward, the other one keep stoped.
    // delay(2000);
    // moveStop();
    // delay(1000);
    

    // control_direction('F','P', speed);  // --> turn right -- works perfectly
    // delay(2000);
    // moveStop();
    // delay(1000);

    
    // control_direction('T','P', speed); // --> Just the right wheel move backward, the other one keep stoped.
    // delay(2000);
    // moveStop();
    // delay(1000);


    // not working  // *******************************


    // control_direction('T','T', speed); // --> Just the right wheel move backward, the other one keep stoped.
    // delay(2000);
    // moveStop();
    // delay(1000);

    //Testing



    // turnRight(255);
    // delay(2000);
    // moveStop();
    // delay(1000);


    
    // moveRightBackward(255);
    // delay(2000);
    // moveStop();
    // delay(1000);




}