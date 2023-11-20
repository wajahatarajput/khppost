import React from 'react'
import Button from '../Button/Index';

const TaskInput = (props) => {
    const {setData} = props;


    function handleSubmit(event){
      event.preventDefault();
      setData((oldData)=>{
        return [...oldData,event.target[0].value]
      })
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' className='form-control border border-rounded my-2'/>
        <Button />
    </form>
  )
}

export default TaskInput