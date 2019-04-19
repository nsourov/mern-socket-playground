const { getTodos, addTodo } = require("./controller");
module.exports = io => {
  io.on("connection", socket => {
    console.log("Connected Users " + Object.keys(io.engine.clients).length);
    socket.on("disconnect", function() {
      console.log("user disconnected");
    });
    // Receiving data from client
    socket.on("init_data", async () => {
      getTodos(io);
    });
    // Add todo
    socket.on("add_todo", ({ todo }) => {
      addTodo(todo);
    });
  });
};
