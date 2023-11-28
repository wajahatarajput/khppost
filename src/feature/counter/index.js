import React, { useEffect } from 'react';
import { Card, CounterButton } from '../../components';
import { divStyle } from './style';
import useAPI from './hooks/useAPI';

const CounterFeature = () => {

  const { ListData, getData, counter, handleBtnClick, handleButton } = useAPI();

  useEffect(()=>{
    getData();
  },[getData]);

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