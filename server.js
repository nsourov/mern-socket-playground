const app = require("./app");
require("./db");
const server = require("http").Server(app);
const io = require("socket.io")(server);
const socketHandler = require('./socket');
// SOCKET
socketHandler(io);

server.listen(4000, () =>
  console.log(`Example app listening on port ${4000}!`)
);
