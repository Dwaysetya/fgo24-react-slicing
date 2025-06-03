import { BiLogOut } from "react-icons/bi";
import { logoutUser } from "../../redux/reducers/auth";
import { getDisplayName } from "../../script/Function";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../atoms/Logo";
import NavMenu from "../molecules/NavMenu";
import NavAction from "../molecules/NavAction";
import { setHistorytransaksi } from "../../redux/reducers/historyTransaksi";

const Navbar = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const image = useSelector((image) => image.users.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "MOVIE", to: "/movie" },
    { label: "BUY TIKET", to: "/tickets" },
  ];

  const profileImage = image.find((item) => item.id === currentUser.id)?.image;

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
    dispatch(logoutUser()); // Kosongkan auth
    dispatch(setHistorytransaksi({})); // Kosongkan histori
    navigate("/signin"); // Pindah ke login page
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
          <>
            <Link to="/profil/setting">
              <div className="text-sm font-medium">
                Hi,{" "}
                {currentUser.name
                  ? currentUser.name
                  : getDisplayName(currentUser.email)}
              </div>
            </Link>

            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full mb-2 object-cover"
              />
            ) : (
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            )}

            <div onClick={LogOut} className="ml-5 cursor-pointer">
              <BiLogOut className="text-red-700 text-2xl" />
            </div>
          </>
        ) : (
          <NavAction buttons={navButtons} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
