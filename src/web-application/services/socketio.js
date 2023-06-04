import socketIOClient from "socket.io-client";

const socket = socketIOClient("192.168.0.112:4000");
// const socket = socketIOClient("server-telemeapp.herokuapp.com");

export default socket;
