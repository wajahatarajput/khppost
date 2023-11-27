import React, { useCallback, useMemo, useState } from 'react'

const useCounter = () => {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState([]);
  
    const getData = useCallback(async()=>{
      console.log('fetching')
      const res = await (await fetch('https://gold-agouti-tux.cyclic.app/carapiyears',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      })).json();
      setData(res);
    },[])
  
    const ListData = useMemo(()=>{
      return (
        <>
          {data.map((obj,index)=>{
            return <option key={index}>{obj}</option>
          })}
        </>
      )
    },[data]);    
  
    const handleButton = useCallback((e)=>{
        if(e.target.innerText === '-'){
          if(counter > 0)
            setCounter(prev=>prev-1);
        }
        else
          setCounter(prev=>prev+1);
    },[counter]);

    const addToList = useCallback((input)=>{
        setData(data=>[...data,input])
    },[])
 

    return {
        counter,
        ListData,
        handleButton,
        getData,
        addToList
    }
}

export default useCounter;