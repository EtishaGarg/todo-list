import React from 'react'

function Todo({todos, completeTodo}) {
  const [edit, setEdit] = React.useState({
    id: null,
    vaue: ""
  })

  function handleClick() {
    setEdit(prevEdit => ({
      ...prevEdit,
      isComplete: true
    }))
  }

  return todos.map((todo, index) =>(
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
      
    </div>
  ))
  
  
  
  
//   (
//     <div className='todo'>
//         <button onClick={handleClick} className='todo--box'>{props.text}</button>
//     </div>
//   )
// }

export default Todo;

const todoElements = todos.map(todoElement => {
  return(
    <Todo
      key= {todoElement.id}
      id= {todoElement.id}
      text= {todoElement.text}
    />
  )
})