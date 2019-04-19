import React, { Component } from "react";
import "./App.css";
import { initSocketData, getTodos, addTodo, resetTodos } from "./socket/index";

class App extends Component {
  state = { todos: [], todo: "" };

  handleSubmit = e => {
    e.preventDefault();
    // add todo
    addTodo({ todo: this.state.todo });
    // get all the todo from socket
    getTodos(todos => this.setState({ todos }));
    e.target.reset();
  };
  componentDidMount() {
    // init the socket to get todo
    initSocketData();
    //get the todos
    getTodos(todos => this.setState({ todos }));
  }
  componentWillUnmount() {
    // off the socket after component unmounted
    resetTodos(todos => this.setState({ todos }));
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter A Todo"
            name="todo"
            onChange={e => this.setState({ todo: e.target.value })}
          />
          <button type="submit">+</button>
        </form>
        <ul>
          {this.state.todos.map(({ todo }, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
