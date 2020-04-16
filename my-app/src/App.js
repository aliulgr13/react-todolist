import React, { useState } from 'react';
import Todo from './Todo'
import Todoform from './Todoform'
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = (value) => {
    const newTodo = [...todos, { text: value }];
    console.log(newTodo)
    setTodos(newTodo)
  }

  const completeTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = true;
    setTodos(newTodo)
  }

  const removeTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1)
    setTodos(newTodo)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
      </div>
      <Todoform addTodo={addTodo} />

    </div>
  );
}

export default App;
