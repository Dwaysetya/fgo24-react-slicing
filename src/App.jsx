import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Tickets from "./pages/Tickets";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import OrderPage from "./pages/OrderPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie",
      element: <Movie />,
    },
    {
      path: "/tickets/:id",
      element: <Tickets />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/order/:id",
      element: <OrderPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
