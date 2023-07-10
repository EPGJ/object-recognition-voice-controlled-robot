#include "esp_camera.h"
#include <Arduino.h>
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <iostream>
#include <sstream>

// #define MY_SSID "PIC2-2.4G"
// #define MY_PASSWORD "engcomp@ufes"

#define MY_SSID "Oi Fibra"
#define MY_PASSWORD "95640138"

#define MY_SCKT_HOST "192.168.100.146"
#define MY_SCKT_PORT 8090

const char* ssid = MY_SSID;
const char* password = MY_PASSWORD;
unsigned long previousMillis = 0;
WiFiClient client = NULL;

struct MOTOR_PINS
{
  int pinEn;  
  int pinIN1;
  int pinIN2;    
};


std::vector<MOTOR_PINS> motorPins = 
{
  {2, 12, 13}, //RIGHT_MOTOR Pins (EnA, IN1, IN2)
  {2, 1, 3},  //LEFT_MOTOR  Pins (EnB, IN3, IN4)
};

#define LIGHT_PIN 4

#define UP 1
#define DOWN 2
#define LEFT 3
#define RIGHT 4
#define STOP 0

#define RIGHT_MOTOR 0
#define LEFT_MOTOR 1

#define FORWARD 1
#define BACKWARD -1

const int PWMFreq = 1000; /* 1 KHz */
const int PWMResolution = 8;
const int PWMSpeedChannel = 2;
const int PWMLightChannel = 3;

void init_wifi()
{
  WiFi.begin(ssid, password);

  unsigned long currentMillis = millis();
  unsigned long previousMillis = millis();

  Serial.println("Connecting to WiFi...");

  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");

    unsigned long currentMillis = millis();
    if (currentMillis - previousMillis >= 12000)
    {
      previousMillis = currentMillis;
      return;
    }
  }

  Serial.println("Connected to the WiFi network");
  delay(500);
}

WiFiClient socket_init() {
    Serial.println("socket_init");
    WiFiClient client;
 
    while (!client.connect(MY_SCKT_HOST, MY_SCKT_PORT)) {
      Serial.println("looking socket connection");
      delay(250);
    }
    Serial.println("achou socket");
    return client;
}

String socket_receive_message(WiFiClient client) {
    String data = client.readStringUntil('\r');
    return data;
}
void socket_treat_message(String data) {
    Serial.println(data);
    uint8_t len;
    len = data.length();
    Serial.println(len);
    if (len < 1)
        return;

    // If there's any content on the message
    // moveCar(data[0] - '0');
}


void rotateMotor(int motorNumber, int motorDirection)
{
  if (motorDirection == FORWARD)
  {
    digitalWrite(motorPins[motorNumber].pinIN1, LOW);
    digitalWrite(motorPins[motorNumber].pinIN2, HIGH);    
  }
  else if (motorDirection == BACKWARD)
  {
    digitalWrite(motorPins[motorNumber].pinIN1, HIGH);
    digitalWrite(motorPins[motorNumber].pinIN2, LOW);     
  }
  else
  {
    digitalWrite(motorPins[motorNumber].pinIN1, LOW);
    digitalWrite(motorPins[motorNumber].pinIN2, LOW);       
  }
}


void moveCar(int inputValue)
{
  // Serial.printf("Got value as %d\n", inputValue);  
  switch(inputValue)
  {

    case UP:
      rotateMotor(RIGHT_MOTOR, FORWARD);
      rotateMotor(LEFT_MOTOR, FORWARD); 
      Serial.println("FORWARD"); 
      delay(100);               
      break;
  
    case DOWN:
      rotateMotor(RIGHT_MOTOR, BACKWARD);
      rotateMotor(LEFT_MOTOR, BACKWARD);  
      Serial.println("BACKWARD");
      delay(100);                
      break;
  
    case LEFT:
      rotateMotor(RIGHT_MOTOR, FORWARD);
      rotateMotor(LEFT_MOTOR, BACKWARD);  
      Serial.println("LEFT");  
      delay(100);              
      break;
  
    case RIGHT:
      rotateMotor(RIGHT_MOTOR, BACKWARD);
      rotateMotor(LEFT_MOTOR, FORWARD); 
      Serial.println("RIGHT"); 
      delay(100);               
      break;
 
    case STOP:
      rotateMotor(RIGHT_MOTOR, STOP);
      rotateMotor(LEFT_MOTOR, STOP);    
      Serial.println("STOP");                
      delay(100);
      break;
  
    default:
      rotateMotor(RIGHT_MOTOR, STOP);
      rotateMotor(LEFT_MOTOR, STOP);    
      Serial.println("STOP2");
      delay(100);                
      break;
  }
}

void init_motors() {
  //Set up PWM
    Serial.println("motors init");
  ledcSetup(PWMSpeedChannel, PWMFreq, PWMResolution);
  ledcSetup(PWMLightChannel, PWMFreq, PWMResolution);
      
  Serial.println("Definiu canais de pwm");
  for (int i = 0; i < motorPins.size(); i++)
  {
    pinMode(motorPins[i].pinEn, OUTPUT);    
    pinMode(motorPins[i].pinIN1, OUTPUT);
    pinMode(motorPins[i].pinIN2, OUTPUT);  
    /* Attach the PWM Channel to the motor enb Pin */
    ledcAttachPin(motorPins[i].pinEn, PWMSpeedChannel);
  }
  Serial.println("Iniciou os pinos do motor");
  moveCar(STOP);

  pinMode(LIGHT_PIN, OUTPUT);    
  ledcAttachPin(LIGHT_PIN, PWMLightChannel);
  ledcWrite(PWMSpeedChannel, 255);

  Serial.println("Fim das configurações");
}




void setup(void) 
{
  Serial.begin(115200);
  init_wifi();
  client = socket_init();
  Serial.println("Pronto");
  init_motors();
}


void loop() 
{
    String data;
    data = socket_receive_message(client);
    socket_treat_message(data);
    Serial.println("loop");
    moveCar(UP);
    delay(2000);
    moveCar(STOP);
    delay(1000);

    moveCar(DOWN);
    delay(2000);
    moveCar(STOP);
    delay(1000);

    moveCar(LEFT);
    delay(2000);
    moveCar(STOP);
    delay(1000);

    moveCar(RIGHT);
    delay(2000);
    moveCar(STOP);
    delay(1000);
}
