import React from 'react';
import './Card.css'

const Card = (props) => {
  const {heading, children} = props;

  return (
   <div className='main'>
      <div className='card'>
          <div className='card-head'>
              <h1> {heading} </h1>
          </div>
          <div className='card-body'>
              {children}
          </div>
          <div className='card-foot'>
              
          </div>
      </div>
   </div>
  )
}

export default Card