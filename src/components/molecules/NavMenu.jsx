import { NavLink } from "react-router-dom";

const NavMenu = ({ links = [] }) => {
  return (
    <div className="w-[320px] h-[51px] bg-transparent flex flex-col justify-center items-center">
      <div className="w-[320px] h-[32px] flex gap-[60px] justify-center items-center">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              `text-sm text-black px-2 whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "underline decoration-orange-500 decoration-2 underline-offset-4"
                  : "hover:underline hover:decoration-orange-500 hover:decoration-2 hover:underline-offset-4"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
