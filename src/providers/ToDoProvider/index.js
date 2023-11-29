import React, { useCallback, useState } from 'react'
import { TodoContext } from './context'

const ToDoProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const setListItem = useCallback((item) => {
        item.preventDefault();
        setData(prev => [...prev, item.target[0].value]);
    }, []);
    
  return (
    <TodoContext.Provider value={{ data, setListItem}}>
      {children}
    </TodoContext.Provider>
  )
}

export default ToDoProvider
