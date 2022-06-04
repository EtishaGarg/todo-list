import React from 'react'

function TodoForm(props) {
  const [input, setInput] = React.useState('')

  function handleSubmit(event){
      event.preventDefault()

      props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input,
          isComplete: false
      })

      setInput("")
  }

  function handleChange(event){
      setInput(event.target.value)
  }

  return (
    <div>
        <form className="todo--form" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Add a todo"
            className="todo--input"
            name="input"
            value={input}
            onChange={handleChange}
        />
        <button className="todo--button">Add todo</button>
    </form>
    </div>
  )
}

export default TodoForm