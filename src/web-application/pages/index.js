import Head from "next/head";
import styles from "../styles/Home.module.css";
import socket from "../services/socketio";
import { useEffect, useState } from "react";

const STOP = 0;
const FORWARD = 3;
const BACKWARD = 4;
const LEFT = 1;
const RIGHT = 2;
const AUTOMATIC = 5;

export default function Home() {
  const [voiceListening, setVoiceListening] = useState(false);
  const [recButtonColor, setRecButtonColor] = useState("#f5f5f5");
  const [recTextColor, setRecTextColor] = useState("#f50000");

  const [followBtnColor, setFollowBtnColor] = useState("white");
  const [followBtnText, setFollowBtnText] = useState("Habilitar");

  useEffect(() => {
    socket.on("carrinho", (data) => {
      console.log(data);
    });
  }, []);
  useEffect(() => {}, voiceListening);

  function sendSocket(comando) {
    console.log(comando);
    socket.emit("comando", comando);
  }

  function sendInstanceClass(instanceClass) {
    console.log(instanceClass);
    socket.emit("setClass", instanceClass);
  }

  let intervalRef = null;

  function onMouseDown(direction_const) {
    intervalRef = setInterval(() => {
      sendSocket(direction_const);
    }, 50);
  }

  function onMouseUp(e) {
    if (intervalRef != null) {
      clearInterval(intervalRef);
      sendSocket(STOP);
    }
  }

  class SpeechApi {
    constructor() {
      this.running = false;

      if (typeof window == "undefined") {
        console.log("Window not defined");
        return;
      }

      const SpeechToText =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      this.speechApi = new SpeechToText();
      this.speechApi.continuous = true;
      this.speechApi.lang = "pt-BR";
      this.speechApi.onresult = (e) => {
        const resultIndex = e.resultIndex;
        const msg = treatVoiceMessage(e.results[resultIndex][0].transcript);
        setTargetObject(msg);
        sendInstanceClass(msg);
      };
    }

    start() {
      this.speechApi.start();
      this.running = true;
      setVoiceListening(true);
      setRecButtonColor("#f50000");
      setRecTextColor("#f5f5f5");
    }

    stop() {
      this.speechApi.stop();
      this.running = false;
      setVoiceListening(false);
      setRecButtonColor("#f5f5f5");
      setRecTextColor("#f50000");
    }

    toggle() {
      if (this.running) {
        this.stop();
      } else {
        this.start();
      }
    }
  }
  const speechApi = new SpeechApi();

  function treatVoiceMessage(msg) {
    if (msg.includes("direita") || msg.includes("right")) {
      return "right";
    } else if (msg.includes("esquerda") || msg.includes("left")) {
      return "left";
    } else if (msg.includes("pessoa") || msg.includes("person")) {
      return "person";
    } else if (
      msg.includes("xícara") ||
      msg.includes("copo") ||
      msg.includes("cup") ||
      msg.includes("glass")
    ) {
      return "cup";
    } else if (msg.includes("garrafa") || msg.includes("bottle")) {
      return "bottle";
    } else if (msg.includes("laptop") || msg.includes("notebook")) {
      return "laptop";
    } else if (msg.includes("tv") || msg.includes("monitor")) {
      return "tv monitor";
    } else if (msg.includes("chair") || msg.includes("cadeira")) {
      return "chair";
    } else if (
      msg.includes("cellphone") ||
      msg.includes("telephone") ||
      msg.includes("smartphone") ||
      msg.includes("telefone")
    ) {
      return "cell phone";
    }

    return "error";
  }

  function setTargetObject(msg) {
    const iframe = document.getElementById("espapp");

    if (iframe) {
      iframe.contentWindow.postMessage(msg, "*");
    }
  }

  function toggleFollowBtnColor() {
    setFollowBtnColor(followBtnColor === "white" ? "lightgray" : "white");
    setFollowBtnText(
      followBtnText === "Habilitar" ? "Desabilitar" : "Habilitar"
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>PIC2 2023/1 - Ufes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.camControl}>
        {/* <iframe src="http://localhost:8080" id="espapp"></iframe> */}
        <iframe src="http://10.0.0.102:80/" id="espapp"></iframe>
      </div>
      <div className={styles.controlContainer}>
        <div className={styles.topButtonsContainer}>
          <div className={styles.voiceButton}>
            <button
              style={{
                background: recButtonColor,
                color: recTextColor,
                marginRight: "8px",
                marginBottom: "8px",
              }}
              onClick={() => speechApi.toggle()}
            >
              <b>Falar</b>
            </button>
          </div>
          <div
            className={styles.stop}
            style={{ marginRight: "8px", marginBottom: "8px" }}
          >
            <button onClick={() => sendSocket(STOP)}>Parar</button>
          </div>

          <div>
            <button
              onClick={() => {
                sendSocket(AUTOMATIC);
                toggleFollowBtnColor();
              }}
              style={{
                marginRight: "8px",
                marginBottom: "8px",
                // background: followBtnColor,
              }}
            >
              {followBtnText} modo automático
            </button>
          </div>
        </div>

        <div className={styles.controlButtons}>
          <div className={styles.upperButton}>
            <button
              onMouseDown={() => onMouseDown(FORWARD)}
              onMouseUp={onMouseUp}
              style={{ marginLeft: "55px", marginBottom: "8px" }}
            >
              Frente
            </button>
          </div>

          <div className={styles.middleButton}>
            <button
              onMouseDown={() => onMouseDown(LEFT)}
              onMouseUp={onMouseUp}
              onTouchStart={() => onMouseDown(LEFT)}
              onTouchEnd={onMouseUp}
              style={{ marginRight: "8px", marginBottom: "8px" }}
            >
              Esquerda
            </button>
            <button
              onMouseDown={() => onMouseDown(RIGHT)}
              onMouseUp={onMouseUp}
            >
              Direita
            </button>
          </div>

          <div className={styles.lowerButton}>
            <button
              onMouseDown={() => onMouseDown(BACKWARD)}
              onMouseUp={onMouseUp}
              style={{ marginLeft: "60px", marginBottom: "8px" }}
            >
              Trás
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
