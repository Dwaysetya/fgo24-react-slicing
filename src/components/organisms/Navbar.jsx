// src/components/organisms/Navbar.jsx
import React from "react";
import { useSelector } from "react-redux";
import NavMenu from "../molecules/NavMenu";
import Logo from "../atoms/Logo";
import NavAction from "../molecules/NavAction";

const Navbar = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "MOVIE", to: "/movie" },
    { label: "BUY TIKET", to: "/tickets" },
  ];

  const navButtons = [
    {
      label: "LOGIN",
      to: "/signin",
      variant: "other",
    },
    {
      label: "SIGN UP",
      to: "/signup",
      variant: "other",
    },
  ];

  // Fungsi ambil nama dari email
  const getDisplayName = (email) => {
    if (!email) return "";
    return email.split("@")[0]; // hanya ambil bagian depan
  };

  return (
    <div className="container mx-auto w-full h-[100px] flex items-center justify-between px-4 bg-black text-white">
      <div className="flex-shrink-0">
        <Logo size="small" />
      </div>

      <div className="flex-grow flex justify-center items-center w-[320px] ml-[100px]">
        <NavMenu links={navLinks} />
      </div>

      <div className="flex-shrink-0">
        {currentUser ? (
          <div className="text-sm font-medium">
            Hi, {getDisplayName(currentUser.email)}
          </div>
        ) : (
          <NavAction buttons={navButtons} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
