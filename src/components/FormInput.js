import React, { useState, useContext, useRef, useEffect } from 'react'
import { DataContext } from './DataProvider'

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState(' ');
  const todoInput = useRef();


  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }])
    setTodoName('');


  }
  useEffect(() => {
    todoInput.current.focus();
  }, [])

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input type="text" name="todos" id="todos" ref={todoInput}
        required placeholder="What needs to be done?" value={todoName}
        onChange={e => setTodoName(e.target.value.toLowerCase())} />



      <button type="submit" class="createButton" data-bs-toggle="tooltip" data-bs-placement="top" title="Add a task">
        <span class="btn-label"><i class="bi bi-plus lgIcon"></i></span></button>
    </form >
  )
}