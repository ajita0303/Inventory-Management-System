const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const inventoryRouter = require("./routes/inventoryRoute");
const initializeMiddleware = require("./middleware");
const initializeSocket = require("./socket");

//configure mongoose
mongoose
  .connect("mongodb://localhost:27017", {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB connected..."));

initializeMiddleware(express,io,app);

app.use("/api/inventory", inventoryRouter);


initializeSocket(io);

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
