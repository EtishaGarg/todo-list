import React from 'react'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = React.useState([])
  return (
    <div>
        <h1>What's the plan for today?</h1>
        <TodoForm onSubmit={}/>
    </div>
  )
}

export default TodoList