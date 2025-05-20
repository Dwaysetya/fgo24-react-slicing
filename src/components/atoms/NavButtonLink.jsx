// src/components/atoms/NavButtonLink.jsx
import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavButtonLink = ({ to, label, variant = "primary" }) => {
  const baseStyle =
    "inline-block w-auto h-[54px] rounded-[60px] border text-sm font-medium text-center leading-[16px] py-[19px] px-[24px]";

  const variantStyle = clsx({
    "bg-[#E95102] text-white border-transparent": variant === "primary",
    "bg-white text-black border border-gray-300": variant === "secondary",
  });

  return (
    <Link to={to} className={`${baseStyle} ${variantStyle}`}>
      {label}
    </Link>
  );
};

export default NavButtonLink;
