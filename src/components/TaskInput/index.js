import React from 'react'

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
        <input type='text' className='form-control border border-rounded my-2' placeholder='Enter Item'/>
        <input type='submit' value='Add' className='btn btn-outline-primary btn-block border border-rounded'/>
    </form>
  )
}

export default TaskInput