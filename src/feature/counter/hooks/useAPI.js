import React, { useCallback, useMemo, useState } from 'react'

const useAPI = () => {
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
  
  
    const handleBtnClick = useCallback((submitEvent)=>{
        submitEvent.preventDefault();
        submitEvent.target[0].value && addToList(submitEvent.target[0].value);
        submitEvent.target[0].value = '';
    }, [addToList]);
    

    return {
        counter,
        getData,
        handleBtnClick,
        handleButton,
        ListData
    }


}

export default useAPI
