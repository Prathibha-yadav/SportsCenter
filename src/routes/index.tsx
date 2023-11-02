import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import Notfound from "../pages/Notfound";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Articles from "../pages/articles/Articles";
import LiveScore from "../pages/scores/LiveScore";
import Home from "../pages/Home";


const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/Home" replace /> },
  {
    path: "/Home",
    element: <Home />,
  },
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
  {
    path: "/teams",
    element: 
     <LiveScore />,
  },
  {
    path: "/sports",
    element: 
    <LiveScore />,
  },
  {
    path: "/matches",
    element: 
    <LiveScore />,
  },
  {
    path: "/dashboard",
    element: <Home />,
  },
]);

export default router;