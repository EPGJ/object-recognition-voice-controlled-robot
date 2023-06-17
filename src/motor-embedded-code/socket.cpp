#include "socket.h"
#include "motor.h"

SocketIOclient socket;

// inicializa o socket.io-client
void init_socket()
{
  socket.begin("10.0.0.100", 4000, "/socket.io/?EIO=4");
  socket.onEvent(socketIOEvent);
  Serial.println("Configurado o socket.io");
  delay(500);
}

void connection_socket()
{
  socket.loop();
}


void socketIOEvent(socketIOmessageType_t type, uint8_t * payload, size_t length) {
    switch(type) {
        case sIOtype_DISCONNECT:
            Serial.printf("[IOc] Desconectado!\n");
            break;
        case sIOtype_CONNECT:
            Serial.printf("[IOc] Conectado ao url: %s\n", payload);

            // join default namespace (no auto join in Socket.IO V3)
            socket.send(sIOtype_CONNECT, "/");
            break;
        case sIOtype_EVENT:
            Serial.printf("[IOc] get event: %s\n", payload);
            Serial.printf("%c\n", (char *)payload[14]);
            Serial.printf("%c\n", (char *)payload[18]);

            
            
            
            if((char *)payload[14]==(char*)'F' && (char *)payload[18]==(char*)'F'){
               movimenta_motor_direito((char*)'F');
               delay(10);
               movimenta_motor_esquerdo((char*)'T');
              Serial.println("FRENTE");
            }
            
            if((char *)payload[14]==(char*)'T' && (char *)payload[18]==(char*)'T'){
              movimenta_motor_esquerdo((char*)'F');
              delay(10);
              movimenta_motor_direito((char*)'T');
              Serial.println("TRAS");
            }
              
            if((char *)payload[14]==(char*)'F' && (char *)payload[18]==(char*)'P'){
            movimenta_esquerdo();  
            Serial.println("ESQUERDA");
            }
            
             if((char *)payload[14]==(char*)'P' && (char *)payload[18]==(char*)'F'){
            movimenta_direito();  
            Serial.println("DIREITA");
            }

            if((char *)payload[14]==(char*)'P' && (char *)payload[18]==(char*)'P'){
            para_motores();  
            }
            

            
            //if ((char *)payload[14] == (char*)'F'){
              //movimenta_motor_direito((char *)payload[18]);
              
           // }else if(((char *)payload[14] == (char*)'D')) {
             //movimenta_motor_esquerdo((char *)payload[18]);
              //}
            
           // else{
             // para_motores();
            //}
            
            
            
//            String texto = String((char *)&payload[0]);
            break;
        case sIOtype_ACK:
            Serial.printf("[IOc] get ack: %u\n", length);
            hexdump(payload, length);
            break;
        case sIOtype_ERROR:
            Serial.printf("[IOc] get error: %u\n", length);
            hexdump(payload, length);
            break;
        case sIOtype_BINARY_EVENT:
            Serial.printf("[IOc] get binary: %u\n", length);
            hexdump(payload, length);
            break;
        case sIOtype_BINARY_ACK:
            Serial.printf("[IOc] get binary ack: %u\n", length);
            hexdump(payload, length);
            break;
    }
}


// envia uma mensagem para o servidor via socket
void send_socket(String info)
{

  DynamicJsonDocument doc(1024);
  JsonArray array = doc.to<JsonArray>();

  array.add("newinfo");

  // add payload (parameters) for the event
  JsonObject param1 = array.createNestedObject();
  param1["now"] = info;

  // JSON to String (serializion)
  String output;
  serializeJson(doc, output);

  // Send event
  socket.sendEVENT(output);
}


// Recebe algo do servidor
void event(const char *payload, size_t length)
{
  Serial.printf("got message: %s\n", payload);
}
