// src/components/organisms/Navbar.jsx
import React from "react";
import NavMenu from "../molecules/NavMenu";
import Logo from "../atoms/Logo";
import NavAction from "../molecules/NavAction";

const Navbar = () => {
  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "MOVIE", to: "/movie" },
    { label: "BUY TIKET", to: "/tickets" },
  ];
  const navButtons = [
    {
      label: "LOGIN",
      to: "/signin",
      variant: "secondary",
    },
    {
      label: "SIGN UP",
      to: "/signup",
      variant: "primary",
    },
  ];

  return (
    <div className="container mx-auto w-full h-[100px] flex items-center justify-between px-4">
      <div className="flex-shrink-0">
        <Logo size="small" />
      </div>

      <div className="flex-grow flex justify-center items-center w-[320px] ml-[100px]">
        <NavMenu links={navLinks} />
      </div>

      <div className="flex-shrink-0 ">
        <NavAction buttons={navButtons} />
      </div>
    </div>
  );
};

export default Navbar;
