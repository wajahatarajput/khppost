import App from "../../App";
import { LoginPage, RegisterPage } from "../../pages";

export const routes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]