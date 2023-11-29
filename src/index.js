import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from './utils';
import UsersProvider from './providers/UsersProvider';
import AuthProvider from './providers/AuthProvider';


const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UsersProvider>
        <RouterProvider router={router} />
      </UsersProvider>
    </AuthProvider>
  </React.StrictMode>
);
