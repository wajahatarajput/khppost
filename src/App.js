import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './utils';
import { AuthProvider, PostProvider, ConversationProvider } from './providers';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';

export default function App() {
  const cookies = new Cookies(null, { path: '/' });
  const [routes, setRoutes] = useState(UnauthenticatedRoutes);
  const user = cookies.get('auth');
  const router = createBrowserRouter(routes);

  useEffect(() => {
    if (user) {
      setRoutes(AuthenticatedRoutes)
    }
  }, [user])

  return (
    <AuthProvider>
      <PostProvider>
        <ConversationProvider>
          <RouterProvider router={router} />
        </ConversationProvider>
      </PostProvider>
    </AuthProvider>
  );
}
