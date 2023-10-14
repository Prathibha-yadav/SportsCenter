import AccountLayout from "../layouts";
import ProtectedRoutes from "./ProtectedRoute";
import Signin from "../pages/signin";
import Signup from "../pages/signup";

import Logout from "../pages/logout";
import Notfound from "../pages/Notfound";
// import { Outlet } from "react-router-dom";

import { createBrowserRouter, Navigate } from "react-router-dom";
import Articles from "../pages/articles/Articles";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/articles" replace /> },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "/articles",
    element: 
     <Articles />,
  },
]);

export default router;