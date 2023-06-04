#include "motor.h"

//Definicoes pinos ESP ligados a entrada da Ponte H
int IN1 = D1;
int IN2 = D2;
int IN3 = D3;
int IN4 = D4;

void init_motor(){
  //Define os pinos como saida
 pinMode(IN1, OUTPUT);
 pinMode(IN2, OUTPUT);
 pinMode(IN3, OUTPUT);
 pinMode(IN4, OUTPUT);
}

void movimenta_motor_frente(){
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    delay(10);
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    
    
  
  }

void movimenta_motor_tras(){
  digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
    delay(10);
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    
    
  
  }

  
void movimenta_direito(){
  para_motor_direito();
    digitalWrite(IN3,LOW);
    digitalWrite(IN4, HIGH);

    
  }

void movimenta_esquerdo(){

  para_motor_esquerdo();
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    
    
  
  }

void movimenta_motor_direito(char* sentido){
  //Gira o motor no sentido horario
  if(sentido == (char*)'F'){
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    Serial.println("direito horario");  
  }
  else {
    //Gira o motor no sentido anti-horario
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    Serial.println("direito anti horario");
  }
    
}

void para_motores(){
    para_motor_direito();
    para_motor_esquerdo(); 
}

void movimenta_motor_esquerdo(char* sentido){
  //Gira o motor no sentido horario
  if(sentido == (char*)'F'){
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    Serial.println("esquerdo horario");
  }
  else {
    //Gira o motor no sentido anti-horario
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
    Serial.println("esquerdo anti-horario");
  }
}

void para_motor_direito(){
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, HIGH);
}

void para_motor_esquerdo(){
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, HIGH);
}
