import './App.css';
import { AppLayout } from './component';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from './utils';

export default function App() {

  const router = createBrowserRouter(routes);
  
  return (
      <RouterProvider router={router} />
  );
}
