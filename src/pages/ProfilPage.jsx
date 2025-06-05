import { Outlet } from "react-router-dom";
import { getDisplayName } from "../script/Function";
import { setProfileImage } from "../redux/reducers/profile";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/organisms/Navbar";
import NavMenu from "../components/molecules/NavMenu";
import { editData } from "../redux/reducers/users";
import { loginUser } from "../redux/reducers/auth";

function ProfilPage() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const image = useSelector((image) => image.users.data);
  const dispatch = useDispatch();

  const user = {
    role: "Moviegoers",
    points: 320,
    pointsToMaster: 180,
  };
  const navLinks = [
    { label: "Account Setting", to: "/profil/setting" },
    { label: "Order Historry", to: "/profil/history" },
  ];
  const profileImage = image.find((item) => item.id === currentUser.id)?.image;

  return (
    <main className="main-container">
      <header className="header-nav">
        <Navbar />
      </header>
      <section className="w-full min-h-screen bg-gray-100 p-6 flex justify-center">
        <div className=" w-full flex gap-15 justify-center">
          {/* Left Sidebar: User Info and Loyalty Points */}
          <div className="w-1/5 flex flex-col gap-6">
            {/* User Info */}

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col items-center">
                <div className="relative group">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-20 h-20 rounded-full mb-4 object-cover"
                    />
                  ) : (
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="User Avatar"
                      className="w-20 h-20 rounded-full mb-4 object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 w-20 h-20 rounded-full mb-4">
                    <label
                      htmlFor="fileUpload"
                      className="bg-transparent border-1 text-white hover:bg-transparent hover:text-orange-500 hover:border hover:border-orange-500 rounded-full px-1"
                    >
                      Edit Foto
                    </label>
                    <input
                      id="fileUpload"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            const base64Image = reader.result;

                            const originalUser = image.find(
                              (item) => item.id === currentUser.id
                            );

                            if (originalUser) {
                              const updatedUser = {
                                ...originalUser, // data yang lengkap, termasuk password terenkripsi
                                image: base64Image,
                              };

                              // Update image di state profile
                              dispatch(setProfileImage(base64Image));

                              // Update image di Redux users
                              dispatch(editData(updatedUser));

                              // Update user yang sedang login (auth)
                              dispatch(loginUser(updatedUser));
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="hidden"
                    />
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-gray-800">
                  {currentUser.name
                    ? currentUser.name
                    : getDisplayName(currentUser.email)}
                </h2>
                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
            </div>

            {/* Loyalty Points */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">
                Loyalty Points
              </h3>
              <div className="relative mt-4">
                <div className="bg-orange-600 text-white rounded-2xl p-4 flex items-center gap-3">
                  <div className="bg-orange-500 rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Moviegoers</p>
                    <p className="text-2xl font-bold">
                      {user.points}{" "}
                      <span className="text-sm font-normal">points</span>
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                {user.pointsToMaster} points become a master
              </p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-600 h-2 rounded-full"
                  style={{
                    width: `${
                      (user.points / (user.points + user.pointsToMaster)) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Section: Navigation and Order History */}
          <div className="w-1/2 flex flex-col gap-6">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex gap-10 items-center">
              <NavMenu links={navLinks} textColor="text-black" />
            </div>
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProfilPage;
