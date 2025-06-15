import { LuEye } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { loginUser } from "../../redux/reducers/auth";
import { FaFacebook } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import React from "react";
import Button from "../atoms/Button";
import image11 from "../../assets/images/signup/image 1.png";
import logoTick from "../../assets/images/logo/logorooms.png";

function SignInCard() {
  const { register, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isModal, setIsModal] = React.useState(false);
  const users = useSelector((state) => state.users.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(data) {
    const decodedUsers = users.map((user) => ({
      ...user,
      password: atob(user.password),
    }));

    console.log(decodedUsers[0].password);
    console.log(data.password);

    const index = decodedUsers.findIndex(
      (user) => user.email === data.email && user.password === data.password
    );
    console.log(index, "s");

    if (index !== -1) {
      const user = decodedUsers[index];

      const { id, email, role } = user;

      dispatch(loginUser({ id, email }));

      Swal.fire({
        title: "Login berhasil!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      if (role && role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      Swal.fire({
        title: "Login gagal!",
        text: "Email atau password salah.",
        icon: "error",
      });
    }

    reset();
  }

  return (
    <section className="main-container">
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col gap-5 relative justify-center items-center"
        style={{ backgroundImage: `url(${image11})` }}
      >
        {isModal && (
          <div className="flex w-full h-screen absolute z-30 justify-center items-center bg-black/90 px-4">
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 bg-black/70 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl md:rounded-4xl w-full max-w-sm sm:max-w-md">
              <form>
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                  <label className="text-white text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                    className="w-full h-12 sm:h-14 md:h-[54px] rounded-full py-3 sm:py-4 md:py-[15px] px-4 sm:px-5 md:px-[24px] bg-orange/50 border border-white hover:border-[#b20f15] text-white shadow-xl/50 text-sm sm:text-base outline-none"
                  />
                </div>
                <div className="w-full h-12 sm:h-14 md:h-[54px] rounded-full mt-6 sm:mt-8 md:mt-10">
                  <Button
                    className="shadow-xl/10 w-full h-full rounded-full text-sm sm:text-base"
                    onClick={() => setIsModal(false)}
                  >
                    Send email
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 flex justify-center items-center">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center items-center bg-black/80 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:w-[40%] py-8 sm:py-12 md:py-16 lg:py-20 px-6 sm:px-8 md:px-12 rounded-2xl sm:rounded-3xl md:rounded-4xl">
            <div className="flex justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[30%]">
              <img
                src={logoTick}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full space-y-4 sm:space-y-5"
            >
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                <label className="text-white px-2 sm:px-3 md:px-4 lg:px-5 text-sm sm:text-base">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  autoComplete="off"
                  {...register("email")}
                  className="w-full px-4 2xl:px-5 py-3 sm:px-5 sm:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
              <div className="w-full">
                <label className="block text-white text-sm sm:text-base mb-2 px-5">
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 pr-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    {...register("password")}
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1"
                  >
                    {showPassword ? (
                      <LuEye size={18} className="sm:w-5 sm:h-5" />
                    ) : (
                      <LuEyeClosed size={18} className="sm:w-5 sm:h-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex justify-end gap-3 sm:gap-4 md:gap-5 mt-3 sm:mt-4 md:mt-5 px-2 sm:px-3 md:px-4 lg:px-5">
                <p
                  className="text-white hover:text-[#b20f15] cursor-pointer text-xs sm:text-sm md:text-base transition-colors"
                  onClick={() => setIsModal(true)}
                >
                  Forgot your password
                </p>
              </div>
              <div className="w-full h-12 sm:h-14 md:h-[54px] rounded-full mt-6 sm:mt-8 md:mt-10">
                <Button className="shadow-xl/10 w-full h-full rounded-full text-sm sm:text-base font-medium">
                  Join For Free Now
                </Button>
              </div>
            </form>
            <div className="mt-4 sm:mt-6">
              <p className="text-white text-xs sm:text-sm md:text-base text-center">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#b20f15] hover:text-orange-400 transition-colors font-medium"
                >
                  Sign-Up
                </Link>
              </p>
            </div>
            <div className="flex items-center w-full max-w-xs sm:max-w-sm gap-4 sm:gap-6 justify-center mt-6 sm:mt-8">
              <button className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 text-white text-xs sm:text-sm font-medium transition-colors min-w-0 flex-1">
                <FcGoogle className="text-lg sm:text-xl flex-shrink-0" />
                <span className="truncate">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 text-white text-xs sm:text-sm font-medium transition-colors min-w-0 flex-1">
                <FaFacebook className="text-blue-400 text-lg sm:text-xl flex-shrink-0" />
                <span className="truncate">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInCard;
