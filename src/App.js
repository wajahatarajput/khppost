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
        <RouterProvider router={router} />
        </PostProvider>
    </AuthProvider>
  );
}
