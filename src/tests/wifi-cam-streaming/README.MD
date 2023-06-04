# ESP32-CAM image streaming via Wi-Fi

## How to use:
The detailed proccess can be found [here](https://iotprojectsideas.com/esp32-cam-object-detection-identification-with-opencv/).
Just remember to first run the embedded code on the ESP32 inserting your Wi-Fi network info. The ESP32 and the PC must be connected in the same Wi-Fi network. The `esp32cam` library `.zip` must be first loaded to the `Arduino IDE`. The version provided is an specific branch from the [yoursunny/esp32cam](https://github.com/yoursunny/esp32cam) repo. Before compiling set your board on `Arduino IDE` to `ESP32 Wrover Module` (Remember its meant to be used with the `AiThinker` model)

## Possible problems:

The ESP32 IP address must change, so check first the IP address shown in the console logs of the `Arduino IDE` and replace the value of `camera_ip` on the Python script.