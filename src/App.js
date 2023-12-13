import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthenticatedRoutes, routes, UnauthenticatedRoutes } from './utils';
import { AuthProvider } from './providers';

export default function App() {
  const router = createBrowserRouter([...AuthenticatedRoutes, ...UnauthenticatedRoutes]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
