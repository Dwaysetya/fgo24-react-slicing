import { Link } from "react-router-dom";
import clsx from "clsx";

const NavButtonLink = ({ to, label, variant = "primary" }) => {
  const baseStyle =
    "inline-block w-auto h-[54px] rounded-[60px] border text-sm font-medium text-center leading-[16px] py-[19px] px-[24px]";

  const variantStyle = clsx({
    "bg-[#b20f15] text-[#9599a2] border-transparent hover:bg-[#1e2c39] p-5":
      variant === "primary",
    "bg-[#9599a2] text-black border border-gray-300": variant === "secondary",
    "bg-transparant text-[#9599a2] border-[#9599a2] hover:bg-orange-500":
      variant === "other",
    "bg-[#b20f15] text-[#9599a2] border-transparent hover:bg-[#1e2c39] w-full p-5":
      variant === "payment",
  });

  return (
    <Link to={to} className={`${baseStyle} ${variantStyle}`}>
      {label}
    </Link>
  );
};

export default NavButtonLink;
