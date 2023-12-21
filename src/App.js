import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './utils';
import { AuthProvider, PostProvider, SocketProvider } from './providers';

export default function App() {
  const router = createBrowserRouter([...AuthenticatedRoutes, ...UnauthenticatedRoutes]);

  return (
    <SocketProvider>
      <AuthProvider>
        <PostProvider>
          <RouterProvider router={router} />
        </PostProvider>
      </AuthProvider>
    </SocketProvider>
  );
}
