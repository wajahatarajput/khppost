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
        <input type='text'/>
        <input type='submit' value='Add'/>
    </form>
  )
}

export default TaskInput