#define MY_WIFI_SSID ""
#define MY_WIFI_PSWD ""
#define MY_SCKT_HOST ""
#define MY_SCKT_PORT 8090

#include <WiFi.h>
 
const char* ssid = MY_WIFI_SSID;
const char* password =  MY_WIFI_PSWD;
 
const char* host = MY_SCKT_HOST;
const uint16_t port = MY_SCKT_PORT;
 
void setup()
{
 
  Serial.begin(115200);
 
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("...");
  }
}
 
void loop()
{
    WiFiClient client;
 
    if (!client.connect(host, port)) {
        delay(250);
        return;
    }
 
    String data = client.readStringUntil('\r');
    Serial.println(data);
 
    client.stop();
 
    delay(250);
}