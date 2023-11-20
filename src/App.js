import { useState } from 'react';
import './App.css';
import { Card, List, Navbar, TaskInput } from './components';

export default function App() {
  const [data,setData] = useState([]);
  
  return (
    <>
    <Navbar/>
      <Card heading="To Do List">
        <TaskInput setData={setData}/>
        <List data={data}/>
      </Card>
    </>
  );
}
