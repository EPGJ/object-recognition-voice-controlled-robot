const PORT = process.env.PORT || 4000;

const io = require("socket.io")(PORT, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("USUARIO: " + socket.id);

  socket.on("comando", (data) => {
    console.log(data);
    io.emit("carrinho", data);
  });

  socket.on("disconnect", () => {
    console.log("USUARIO DESCONECTADO: " + socket.id);
  });
});
