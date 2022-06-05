import React from 'react'

function TodoForm(props) {

  const [input, setInput] = React.useState(props.edit ? props.edit.value: "")

  function handleChange(event) {
      setInput(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    })

    setInput("")
  }

  return (

    <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit? (
            <div>
                <input
                    type="text"
                    value={input}
                    placeholder="Update a todo"
                    name= "input"
                    onChange={handleChange}
                    className='todo-input edit'
                />
                <button className='todo-button edit'>Update</button>
            </div>
        ): (
            <div>
                <input
                    type="text"
                    value={input}
                    placeholder="Add a todo"
                    name= "input"
                    onChange={handleChange}
                    className='todo-input'
                />
                <button className='todo-button'>Add Todo</button>
            </div>

        )}
        
    </form>
  )
}

export default TodoForm;