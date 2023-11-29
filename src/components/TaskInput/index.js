import React from 'react'
import useTodo from '../../providers/ToDoProvider/useTodo'

const TaskInput = () => {
  const { setListItem } = useTodo();
  return (
    <form onSubmit={setListItem}>
        <input type='text' className='form-control border border-rounded my-2' placeholder='Enter Item'/>
        <input type='submit' value='Add' className='btn btn-outline-primary btn-block border border-rounded'/>
    </form>
  )
}

export default TaskInput