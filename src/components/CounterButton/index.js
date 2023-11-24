import React from 'react';

const CounterButton = ({handleButtonClick, value}) => {
  return (
    <button className='btn btn-outline-secondary border border-0' onClick={handleButtonClick}> {value} </button>
  )
}

export default CounterButton;