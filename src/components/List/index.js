import React from 'react'

const List = (props) => {
    const {data} = props
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