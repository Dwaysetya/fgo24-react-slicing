import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Tickets from "./pages/Tickets";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import OrderPage from "./pages/OrderPage";
import Payment from "./pages/Payment";
import TicketResult from "./pages/TicketResult";
import OrderHistory from "./components/templates/OrderHistory";
import ProfilPage from "./pages/ProfilPage";
import AccountSetting from "./components/templates/AccountSetting";
import Admin from "./pages/Admin";
import AdminList from "./pages/AdminList";
import AddNewMovie from "./pages/AddNEwMovie";

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
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/adminlist",
      element: <AdminList />,
    },
    {
      path: "/addmovie",
      element: <AddNewMovie />,
    },
    {
      path: "/profil",
      element: <ProfilPage />,
      children: [
        {
          path: "/profil/setting",
          element: <AccountSetting />,
        },
        {
          path: "/profil/history",
          element: <OrderHistory />,
        },
      ],
    },
  ]);

  // penghubung antara halaman halaman , secara otomatis akan memberikan akses ke redux kepada haaman halaman yang lain
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
