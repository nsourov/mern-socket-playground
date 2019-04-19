const mongoose = require("mongoose");
const Todo = mongoose.model("todo");

const getTodos = async io => {
  const todos = await Todo.find({});
  io.emit("todos", todos);
};

const addTodo = async todo => {
  const newTodo = new Todo({
    todo
  });
  await newTodo.save();
};

module.exports = { getTodos, addTodo };
