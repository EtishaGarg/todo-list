import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri';
import {FiEdit} from 'react-icons/fi'
import TodoForm from './TodoForm';

function Todo({todos, updateTodo, removeTodo, completeTodo}) {
  const [edit, setEdit] = React.useState({
    id: null,
    value: ""
  })

  function handleSubmit(newTodo){
    updateTodo(newTodo, edit.id)
    setEdit({
      id: null,
      value:""
    })
  }

  if(edit.id){
    return(
      <TodoForm edit={edit} onSubmit={handleSubmit}/>
    )
  }

  return todos.map((todo,index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiDeleteBin5Line onClick={() => removeTodo(todo.id)} className='delete-icon'/>
        <FiEdit onClick={() => setEdit({id: todo.id, value:todo.text})} className='edit-icon'/>
      </div>
    </div>
  ))
}

export default Todo;