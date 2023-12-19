import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthenticatedRoutes, routes, UnauthenticatedRoutes } from './utils';
import { AuthProvider, PostProvider } from './providers';

export default function App() {
  const router = createBrowserRouter([...AuthenticatedRoutes, ...UnauthenticatedRoutes]);

  return (
    <AuthProvider>
      <PostProvider>
<<<<<<< HEAD
        <RouterProvider router={router} />
=======
      <RouterProvider router={router} />
>>>>>>> cbde9b0fcc174dc7e70a9f92bbc11d4fad15df2c
      </PostProvider>
    </AuthProvider>
  );
}
