# Carro controlado por voz

O presente repositório objetiva armazenar os códigos e arquivos utilizados no carro controlado por voz. Tal projeto está sendo desenvolvido para a disciplina de Projeto Integrado de Computação II.

## Afazeres:

[] Criar um código para comunicação entre a ESP32 e o aplicativo de comandos de voz via Bluetooth.

[] Criar uma aplicação web que seja capaz de interpretar comandos vocais e enviar tais comandos via Wi-Fi para a ESP32, de modo semelhante ao que é feito via Bluetooth.

[] Integrar uma câmera ao robô e criar uma forma da imagem ser enviada à aplicação Web.

## Para rodar o teste Speech-to-Text:

1. Siga o [tutorial](https://developers.google.com/workspace/guides/create-credentials?hl=pt-br) para gerar o `.json` de credenciais do Google Cloud;
2. Renomeie o arquivo para `speech-to-text-key.json`;
3. No Linux digite `export GOOGLE_APPLICATION_CREDENTIALS=speech-to-text-key.json` e no Windows digite `export GOOGLE_APPLICATION_CREDENTIALS=speech-to-text-key.json`;
4. Instale os pacotes necessários com `python3 -m pip install -r requirements.txt`;
5. Execute o script com `python3 src/voice-recognition-tests/app.py`;

Avisos:
O arquivo de credenciais deve estar na raíz do repositório. MUITO CUIDADO PARA NÃO SUBIR ESSE ARQUIVO PRO GIT.