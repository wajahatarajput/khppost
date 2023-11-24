import React, { useState } from 'react';
import { Card, CounterButton } from '../../components';
import { divStyle } from './style';
import { useCallback } from 'react';
import { useEffect } from 'react';

const CounterFeature = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  
  // useCallback(callbackFn,depArray)
  // useEffect(callbackFn,depArray) -> runs on every refresh or load or dependancy value change

  const getData = useCallback(async()=>{
    console.log('fetching')
    const res = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json();

    setData(res);
  },[])

  useEffect(()=>{
    getData();
  },[counter]);
  

  const handleButton = useCallback((e)=>{
      if(e.target.innerText === '-'){
        if(counter > 0)
          setCounter(prev=>prev-1);
      }
      else
        setCounter(prev=>prev+1);
  },[counter]);

  return (
    <>
    <>
      {data.map((obj,index)=>{
        console.log(obj)
        return (
          <div key={index}>{obj.id}</div>
        )
      })}
    
    
    </>
     <Card heading={'Cart'}>
       <div style={divStyle}>
         <CounterButton handleButtonClick={handleButton} value={'-'}/>
         <h1> {counter} </h1>
         <CounterButton handleButtonClick={handleButton} value={'+'}/>  
       </div>
     </Card>
     </>
  )
}

export default CounterFeature;