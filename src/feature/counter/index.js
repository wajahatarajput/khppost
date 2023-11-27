import React, {useCallback, useEffect } from 'react';
import { Card, CounterButton } from '../../components';
import { divStyle } from './style';
import useCounter from './hooks/useCounter';

const CounterFeature = () => {
  const {
      counter,
      handleButton,
      getData,
      ListData,
      addToList
  } = useCounter();

  useEffect(()=>{
    getData();
  },[]);

  const handleBtnClick = useCallback((submitEvent)=>{
    submitEvent.preventDefault();
    submitEvent.target[0].value && addToList(submitEvent.target[0].value);
    submitEvent.target[0].value = '';
  },[]);

  return (
    <>
     <Card heading={'Cart'}>
       <div style={divStyle}>
         <CounterButton handleButtonClick={handleButton} value={'-'}/>
         <h1> {counter} </h1>
         <CounterButton handleButtonClick={handleButton} value={'+'}/>  
       </div>
       
        <select className='form-control'>
            {ListData}
        </select>

        <form onSubmit={handleBtnClick}>
          <input type='number' className='form-control my-2'/>
          <input type='submit' className='btn btn-outline-primary my-2' value={'Add to List'}/>
        </form>
     </Card>
     </>
  )
}

export default CounterFeature;