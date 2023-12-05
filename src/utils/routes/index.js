import { BrowsePostsElement, LoginElement } from "../../elements";


const UnauthenticatedRoutes = [
    {
        path: "/",
        element: <LoginElement />,
    },
    {
        path: '/browserposts',
        element:<BrowsePostsElement/>
    }
];

const UnauthenticatedRoutesNames = ['Login / Register', 'Browse'];

const AuthenticatedRoutes = [
    {
        path: '/browserposts',
        element: <BrowsePostsElement/>
    }
];

const AuthenticatedRoutesNames = ['Login / Register', 'Browse'];

const isAuthenticated = false;

export const routes = isAuthenticated ? AuthenticatedRoutes.reverse() : UnauthenticatedRoutes.reverse();
export const routes_names = isAuthenticated ? AuthenticatedRoutesNames.reverse() : UnauthenticatedRoutesNames.reverse();
