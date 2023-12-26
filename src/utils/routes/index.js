import { BrowsePostsElement, ChatElement, CreatePostElement, LoginElement, ViewPostElement } from "../../elements";

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
        path: '/',
        element: <BrowsePostsElement />
    },
    {
        path: '/createposts',
        element: <CreatePostElement />
    },
    {
        path: '/chat',
        element: <ChatElement />
    },
    {
        path: '/view',
        element: <ViewPostElement />
    },
    {
        path: '/editposts',
        element: <CreatePostElement />
    }
];

export const AuthenticatedRoutesNames = ['Browse', 'Create', 'Chat'];