import React, {useEffect} from 'react';
import { Card, CounterButton } from '../../components';
import { divStyle } from './style';
import useCounter from './hooks/useCounter';

const CounterFeature = () => {

  const {
      counter,
      handleButton,
      getData,
      ListData
  } = useCounter();

  useEffect(()=>{
    getData();
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
        <input type='number' className='form-control my-2' />
        <button className='btn btn-outline-primary my-2'> Add to List </button>
     </Card>
     </>
  )
}

export default CounterFeature;