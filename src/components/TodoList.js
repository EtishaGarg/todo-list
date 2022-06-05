import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {

  const [todos, setTodos] = React.useState([])

  function addTodo(todo){
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const updatedTodo = [todo, ...todos]
    setTodos(updatedTodo)
    console.log(updatedTodo)
  }

  function completeTodo(id){
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  function removeTodo(id){
    const removeArr = [...todos].filter(todo => todo.id !==id)
    setTodos(removeArr)
  }

  function updateTodo(newValue, todoId){
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prevTodos => prevTodos.map(item => item.id===todoId ? newValue : item))
  }

  return (
    <div>
      <h1>Tasks for today!</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo 
        todos={todos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </div>
  )
}

export default TodoList