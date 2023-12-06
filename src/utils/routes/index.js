import { BrowsePostsElement, CreatePostElement, LoginElement } from "../../elements";


const UnauthenticatedRoutes = [
    {
        path: "/",
        element: <LoginElement />,
    },
    {
        path: '/browserposts',
        element:<BrowsePostsElement/>
    },
    {
        path: '/createposts',
        element:<CreatePostElement/>
    }
];

const UnauthenticatedRoutesNames = ['Login / Register', 'Browse','Create'];

const AuthenticatedRoutes = [
    {
        path: '/',
        element: <BrowsePostsElement/>
    },
    {
        path: '/createposts',
        element:<CreatePostElement/>
    }
];

const AuthenticatedRoutesNames = ['Browse','Create'];

const isAuthenticated = false;

export const routes = isAuthenticated ? AuthenticatedRoutes.reverse() : UnauthenticatedRoutes.reverse();
export const routes_names = isAuthenticated ? AuthenticatedRoutesNames.reverse() : UnauthenticatedRoutesNames.reverse();
