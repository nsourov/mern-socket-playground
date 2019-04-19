import io from "socket.io-client";
const socket = io("http://localhost:4000");

export const initSocketData = () => socket.emit("init_data");
export const getTodos = cb => {
  socket.on("todos", cb);
};
export const addTodo = ({ todo }, cb) => {
  socket.emit("add_todo", { todo });
  initSocketData();
};
export const resetTodos = cb => {
  socket.off("todos", cb);
};
