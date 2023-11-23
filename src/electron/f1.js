const dgram = require("dgram");
const { EventEmitter } = require("events");

let server;
let eventEmitter = new EventEmitter();

function startServer() {
  if (server) {
    throw new Error("Server already started");
  }

  server = dgram.createSocket("udp4");

  server.on("error", (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
  });

  server.on("message", (msg, rinfo) => {
    // eventEmitter.emit("data", msg, rinfo);
  });

  server.on("listening", () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
  });

  setInterval(() => {
    eventEmitter.emit("data", "test" + Math.random());
  }, 1000);

  server.bind(41234);

  return eventEmitter;
}

export default {
  startServer,
  on: eventEmitter.on.bind(eventEmitter),
};
