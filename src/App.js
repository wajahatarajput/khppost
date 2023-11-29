import './App.css';
import { Card, List, Navbar, TaskInput } from './components';
import ToDoProvider from './providers/ToDoProvider';

export default function App() {
  
  return (
    <>
      <Navbar/>
      <ToDoProvider>
          <Card heading="To Do List">
            <TaskInput/>
            <List/>
          </Card>
        </ToDoProvider>
    </>
  );
}
