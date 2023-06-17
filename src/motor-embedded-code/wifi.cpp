
#include "wifi.h"

const char* ssid = "PIC2-2.4G";
const char* password = "engcomp@ufes";
unsigned long previousMillis = 0;

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
