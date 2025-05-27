import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Tickets from "./pages/Tickets";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import OrderPage from "./pages/OrderPage";
import Payment from "./pages/Payment";
import TicketResult from "./pages/TicketResult";

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
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/ticketresult",
      element: <TicketResult />,
    },
  ]);

  // penghubung antara halaman halaman , secara otomatis akan memberikan akses ke redux kepada haaman halaman yang lain
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
