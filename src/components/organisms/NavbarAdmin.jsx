import { X, Menu } from "lucide-react";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { logoutUser } from "../../redux/reducers/auth";
import { getDisplayName } from "../../script/Function";
import { Link, useNavigate } from "react-router-dom";
import { clearHistoryTransaksi } from "../../redux/reducers/historyTransaksi";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../atoms/Logo";
import NavMenu from "../molecules/NavMenu";
import NavAction from "../molecules/NavAction";

const NavbarAdmin = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Dashboard", to: "/admin" },
    { label: "MOVIE", to: "/adminlist" },
  ];

  const navButtons = [
    { label: "LOGIN", to: "/signin", variant: "other" },
    { label: "SIGN UP", to: "/signup", variant: "other" },
  ];

  const profileImage = currentUser?.id
    ? users?.find((item) => item.id === currentUser.id)?.image
    : null;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearHistoryTransaksi());
    navigate("/signin");
  };

  const renderUserProfile = () => (
    <div className="flex items-center gap-3 sm:gap-4">
      <Link
        to="/profil/setting"
        className="hidden sm:block text-sm font-medium hover:text-gray-300 transition-colors"
      >
        Hi, {currentUser.name || getDisplayName(currentUser.email)}
      </Link>

      <Link to="/profil/setting">
        {profileImage ? (
          <img
            src={profileImage}
            alt="User Avatar"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gray-600 hover:border-orange-500 transition-colors"
          />
        ) : (
          <FaUserCircle size={44} color="#888" />
        )}
      </Link>

      <button
        onClick={handleLogout}
        className="p-1 hover:bg-gray-800 rounded-full transition-colors"
        title="Logout"
      >
        <BiLogOut className="text-red-500 text-xl sm:text-2xl" />
      </button>
    </div>
  );

  const renderMobileMenuButton = () => (
    <button
      onClick={toggleMobileMenu}
      className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
      aria-label="Toggle mobile menu"
    >
      {isMobileMenuOpen ? (
        <X className="w-6 h-6 text-white" />
      ) : (
        <Menu className="w-6 h-6 text-white" />
      )}
    </button>
  );

  const renderMobileMenu = () => (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={closeMobileMenu}
      />
      <div className="fixed top-0 right-0 h-[70%] w-full rounded-br-4xl rounded-bl-4xl bg-white z-50 transform transition-transform duration-300 md:hidden">
        <div className="flex items-center bg-black justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              <Logo size="small" />
            </div>
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
          </div>
          <button
            onClick={closeMobileMenu}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="py-8">
          <nav className="space-y-2">
            {navLinks.map((link, index) => (
              <div key={link.to} className="text-center">
                <Link
                  to={link.to}
                  onClick={closeMobileMenu}
                  className="text-lg text-gray-800 hover:text-orange-500 transition-colors font-medium"
                >
                  {link.label}
                </Link>
                {index === 0 && (
                  <div className="w-2 h-2 bg-orange-500 rounded-full mx-auto mt-2" />
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          {currentUser ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <img
                  src={
                    profileImage ||
                    "https://randomuser.me/api/portraits/men/32.jpg"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {currentUser.name || getDisplayName(currentUser.email)}
                  </p>
                  <Link
                    to="/profil/setting"
                    onClick={closeMobileMenu}
                    className="text-xs text-orange-500 hover:text-orange-600"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              <button
                onClick={() => {
                  handleLogout();
                  closeMobileMenu();
                }}
                className="w-full py-3 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
              >
                <BiLogOut className="text-lg" />
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-2 sm:space-y-5 px-0 sm:px-50">
              <Link
                to="/signin"
                onClick={closeMobileMenu}
                className="block w-full py-3 px-6 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors text-center"
              >
                LOGIN
              </Link>
              <Link
                to="/signup"
                onClick={closeMobileMenu}
                className="block w-full py-3 px-6 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors text-center"
              >
                SIGN UP
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <nav className="w-full bg-black text-white sticky top-0 z-30 shadow-lg">
      <div className="container w-full mx-auto px-0 sm:px-4 md:px-6">
        <div className="flex w-full items-center justify-between h-16 sm:h-20">
          <div className="flex sm:flex-shrink-0">
            <Logo size="small" />
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <NavMenu links={navLinks} />
          </div>
          <div className="hidden md:flex items-center">
            {currentUser ? (
              renderUserProfile()
            ) : (
              <NavAction buttons={navButtons} />
            )}
          </div>
          <div className="flex items-center gap-2 md:hidden">
            {currentUser && (
              <img
                src={
                  profileImage ||
                  "https://randomuser.me/api/portraits/men/32.jpg"
                }
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            {renderMobileMenuButton()}
          </div>
        </div>
      </div>
      {isMobileMenuOpen && renderMobileMenu()}
    </nav>
  );
};

export default NavbarAdmin;
