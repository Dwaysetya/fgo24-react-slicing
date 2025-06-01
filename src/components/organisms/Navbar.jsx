import { BiLogOut } from "react-icons/bi";
import { logoutUser } from "../../redux/reducers/auth";
import { getDisplayName } from "../../script/Function";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../atoms/Logo";
import NavMenu from "../molecules/NavMenu";
import NavAction from "../molecules/NavAction";

const Navbar = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const image = useSelector((image) => image.profile.image);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  function LogOut() {
    dispatch(logoutUser());
    navigate("/signin");
  }

  return (
    <div className="container mx-auto w-full h-[100px] flex items-center justify-between px-4 bg-black text-white">
      <div className="flex-shrink-0">
        <Logo size="small" />
      </div>

      <div className="flex-grow flex justify-center items-center w-[320px] ml-[100px]">
        <NavMenu links={navLinks} />
      </div>

      <div className="flex-shrink-0 flex gap-5 items-center">
        {currentUser ? (
          <Link to="/profil/setting">
            <div className="text-sm font-medium">
              Hi,{" "}
              {currentUser.name
                ? currentUser.name
                : getDisplayName(currentUser.email)}
            </div>
          </Link>
        ) : (
          <NavAction buttons={navButtons} />
        )}
        {image && (
          <img
            src={image}
            className="w-10 h-10 rounded-full object-cover self-center"
            alt="Profile"
          />
        )}
        <div onClick={LogOut} className="ml-5">
          <BiLogOut className="text-red-700 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
