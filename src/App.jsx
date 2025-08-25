import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Not_found from "./assets/pages/Not_found";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "*",
    element: <Not_found />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
