import { BrowsePostsElement, CreatePostElement, LoginElement } from "../../elements";


export const UnauthenticatedRoutes = [
    {
        path: "/",
        element: <LoginElement />,
    },
    {
        path: '/browserposts',
        element: <BrowsePostsElement />
    }
];

export const UnauthenticatedRoutesNames = ['Login / Register', 'Browse'];

export const AuthenticatedRoutes = [
    {
        path: '/browserposts',
        element: <BrowsePostsElement />
    },
    {
        path: '/createposts',
        element: <CreatePostElement />
    },
    {
        path: '/editposts',
        element: <CreatePostElement />
    }
];

export const AuthenticatedRoutesNames = ['Browse', 'Create'];