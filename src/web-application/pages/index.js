import Head from "next/head";
import styles from "../styles/Home.module.css";
import socket from "../services/socketio";
import { useEffect, useState } from "react";
import { Joystick } from "react-joystick-component";
export default function Home() {
  useEffect(() => {
    socket.on("carrinho", (data) => {
      console.log(data);
    });
  }, []);

  function sendSocket(comando) {
    console.log(comando);
    socket.emit("comando", comando);
  }

  let intervalRef = null;

  function onMouseDown(p1, p2) {
    intervalRef = setInterval(() => {
      // console.log(e.type);
      sendSocket([p1, p2]);
    }, 50);
  }

  function onMouseUp(e) {
    if (intervalRef != null) {
      clearInterval(intervalRef);
      sendSocket(["P", "P"]);
    }
  }

  let sentidoAtual = "";
  function handleMove(e) {
    // if (!e) return;
    if (sentidoAtual == e.direction) return;
    if (e.direction == "RIGHT") {
      sendSocket(["F", "P"]);
    }
    if (e.direction == "LEFT") {
      sendSocket(["P", "F"]);
    }
    if (e.direction == "FORWARD") {
      sendSocket(["F", "F"]);
    }
    if (e.direction == "BACKWARD") {
      sendSocket(["T", "T"]);
    }
    sentidoAtual = e.direction;
  }

  function handleStop(e) {
    sendSocket(["P", "P"]);
    sentidoAtual = "P";
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Robô - Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.camControl}>
        <iframe src="http://192.168.100.138/" frameborder="0"></iframe>
      </div>
      <Joystick
        size={100}
        sticky={true}
        baseColor="rgb(241, 71, 71)"
        stickColor="rgb(90, 88, 88)"
        move={handleMove}
        stop={handleStop}
      ></Joystick>
      <div className={styles.voiceButton}>
        <button onClick={() => console.log("voice")}>Voice</button>
      </div>

      <div className={styles.carControl}>
        <div className={styles.upperButton}>
          <button
            onMouseDown={() => onMouseDown("F", "F")}
            onMouseUp={onMouseUp}
          >
            FRENTE
          </button>
        </div>

        <div className={styles.middleButton}>
          <button
            onMouseDown={() => onMouseDown("P", "F")}
            onMouseUp={onMouseUp}
            onTouchStart={() => onMouseDown("P", "F")}
            onTouchEnd={onMouseUp}
          >
            ESQUERDA
          </button>
          <button
            onMouseDown={() => onMouseDown("F", "P")}
            onMouseUp={onMouseUp}
          >
            DIREITA
          </button>
        </div>

        <div className={styles.lowerButton}>
          <button
            onMouseDown={() => onMouseDown("T", "T")}
            onMouseUp={onMouseUp}
          >
            TRÁS
          </button>
        </div>
      </div>
      <div className={styles.stop}>
        <button onClick={() => sendSocket(["P", "P"])}>Para</button>
      </div>
    </div>
  );
}
