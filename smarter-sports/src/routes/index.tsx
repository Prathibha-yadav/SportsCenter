import AccountLayout from "../layouts";
import ProtectedRoutes from "./ProtectedRoute";
import Signin from "../pages/signin";
import Signup from "../pages/signup";

import Logout from "../pages/logout";
import Notfound from "../pages/Notfound";
// import { Outlet } from "react-router-dom";

import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },
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
  // Protected Routes
  {
    path: "/account",
    element: (
      <ProtectedRoutes>
        <AccountLayout />
      </ProtectedRoutes>
    ),
    children: [],
  },
]);

export default router;