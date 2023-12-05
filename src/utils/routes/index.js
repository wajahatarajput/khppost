import { BrowsePostsElement, LoginElement, SignupElement } from "../../elements";


const UnauthenticatedRoutes = [
    {
        path: "/",
        element: <SignupElement />,
    },
    {
        path: '/login',
        element: <LoginElement/>
    },
    {
        path: '/browserposts',
        element:<BrowsePostsElement/>
    }
];

const UnauthenticatedRoutesNames = ['Sign Up', 'Login', 'Browse'];

const AuthenticatedRoutes = [
    {
        path: '/browserposts',
        element: <BrowsePostsElement/>
    }
];

const AuthenticatedRoutesNames = ['Sign Up', 'Login', 'Browse'];

const isAuthenticated = false;

export const routes = isAuthenticated ? AuthenticatedRoutes.reverse() : UnauthenticatedRoutes.reverse();
export const routes_names = isAuthenticated ? AuthenticatedRoutesNames.reverse() : UnauthenticatedRoutesNames.reverse();
