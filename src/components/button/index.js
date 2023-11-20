import React from 'react'

function index(props) {
    const {btnValue} = props;
  return (
      <input  className="btn btn-primary" type='submit' value={btnValue} />
  )
}

export default index