import { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import List from './components/List';


export default function App() {
  const [data,setData] = useState([]);

  return (
    <>
      <TaskInput setData={setData}/>
      <List data={data}/>
    </>
  );
}
