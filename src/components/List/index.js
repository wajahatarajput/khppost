import React from 'react'

const List = (props) => {
    const {data} = props
  return (
    <ul>
    {
        data.map((value)=><li>{value}</li>)
    }
    </ul>
  )
}

export default List;