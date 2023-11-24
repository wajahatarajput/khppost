import App from "../../App";
import { CounterPage, LoginPage, RegisterPage } from "../../pages";

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
    {
      path: "/counter",
      element: <CounterPage />,
    },
  ]