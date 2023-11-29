import React from 'react'
import useTodo from '../../providers/ToDoProvider/useTodo';

const List = () => {
  const { data } = useTodo();

  return (
    <div className='my-2 d-flex'>
      <ul>
      {
          data.map((value)=><li>{value}</li>)
      }
      </ul>
    </div>
  )
}

export default List;