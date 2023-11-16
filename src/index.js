import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as ReactDOM from "react-dom/client";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/RegisterPage",
    element:  <RegisterPage />,
  },
  {
    path: "/LoginPage",
    element:  <LoginPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
