import './App.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider, PostProvider, ConversationProvider } from './providers';
import Cookies from 'universal-cookie';
import { BrowsePostsElement, ChatElement, CreatePostElement, LoginElement, ViewPostElement } from './elements';


export default function App() {
  const cookies = new Cookies(null, { path: '/' });
  const isAuthenticated = !!cookies.get('auth');
  console.log(isAuthenticated);
  const routes = [
    {
      path: "/",
      element: <LoginElement />,
    },
    {
      path: '/browserposts',
      element: <BrowsePostsElement />
    },
    {
      path: '/createposts',
      element: isAuthenticated ? <CreatePostElement /> : <Navigate to="/" />
    },
    {
      path: '/chat',
      element: isAuthenticated ? <ChatElement /> : <Navigate to="/" />
    },
    {
      path: '/view',
      element: isAuthenticated ? <ViewPostElement /> : <Navigate to="/" />
    },
    {
      path: '/editposts',
      element: isAuthenticated ? <CreatePostElement /> : <Navigate to="/" />
    }
  ];

  const router = createBrowserRouter(routes);

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
