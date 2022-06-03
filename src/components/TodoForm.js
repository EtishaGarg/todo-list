import React from 'react'

function TodoForm(props) {
  const [input, setInput] = React.useState('')
  const [todos, setTodos] = React.useState([])

  function handleSubmit(event){
      event.preventDefault()

      props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
      })
  }

  function handleChange(event){
      const {name,value} = event.target
      setTodos(prevTodos => ({
          ...prevTodos,
          [name] : value
      }))
      console.log(todos)
  }

  return (
    <form className="todo--form" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Add a todo"
            className="todo--input"
            name="input"
            value={input}
            onChange={handleChange}
        />
        <button className="todo--button" >Add todo</button>
    </form>
  )
}

export default TodoForm