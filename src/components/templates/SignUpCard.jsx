import { LuEye } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { addUsers } from "../../redux/reducers/users";
import { FaFacebook } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import image11 from "../../assets/images/signup/image 1.png";
import Button from "../atoms/Button";
import logoTick from "../../assets/images/logo/logorooms.png";
import React from "react";
import * as yup from "yup";
import Swal from "sweetalert2";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Format email tidak valid")
    .min(8, "Email minimal 8 karakter")
    .required("Email wajib diisi"),

  password: yup
    .string()
    .min(8, "Password minimal 8 karakter")
    .matches(/[a-z]/, "Harus mengandung huruf kecil")
    .matches(/[A-Z]/, "Harus mengandung huruf besar")
    .matches(/[0-9]/, "Harus mengandung angka")
    .required("Password wajib diisi"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Konfirmasi password tidak cocok")
    .required("Konfirmasi password wajib diisi"),

  rokok: yup.array().notRequired(),
});

function SignUpCard() {
  const [showPassword, setShowPassword] = React.useState(false);
  const users = useSelector((state) => state.users.data);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("first", users);

  function saveData(data) {
    const userDitemukan = users.find((user) => user.email === data.email);

    if (userDitemukan) {
      Swal.fire({
        title: "Error!",
        text: "Email sudah digunakan",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const newData = {
      email: data.email,
      password: btoa(data.password),
    };

    dispatch(addUsers(newData));

    Swal.fire({
      title: "Berhasil!",
      text: "Data berhasil disimpan",
      icon: "success",
      confirmButtonText: "OK",
    });

    navigate("/signin");
    reset();
  }

  return (
    <section className="main-container">
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col gap-5 relative justify-center items-center"
        style={{ backgroundImage: `url(${image11})` }}
      >
        <div className="w-full min-h-auto px-4 sm:px-6 md:px-8 lg:px-10 flex justify-center items-center rounded-tl-4xl rounded-br-4xl">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 bg-black/80 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:w-[40%] py-8 sm:py-5 md:py-16 lg:py-5 px-6 sm:px-8 md:px-12 lg:px-16 justify-center items-center rounded-2xl sm:rounded-3xl md:rounded-4xl">
            <div className="flex justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 items-center mb-2">
              <img
                src={logoTick}
                alt="logo"
                className="w-full object-contain"
              />
            </div>
            <form
              onSubmit={handleSubmit(saveData)}
              className="w-full space-y-4 sm:space-y-5"
            >
              {/* Email Field */}
              <div className="w-full">
                <label className="block text-white text-sm sm:text-base mb-2 px-1">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  required
                  {...register("email")}
                  autoComplete="off"
                  className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                />
                {errors.email && (
                  <p className="text-yellow-400 text-xs sm:text-sm mt-1 px-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="w-full">
                <label className="block text-white text-sm sm:text-base mb-2 px-1">
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    autoComplete="off"
                    {...register("password")}
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 pr-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1"
                  >
                    {showPassword ? (
                      <LuEye size={18} />
                    ) : (
                      <LuEyeClosed size={18} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-yellow-400 text-xs sm:text-sm mt-1 px-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="w-full">
                <label className="block text-white text-sm sm:text-base mb-2 px-1">
                  Confirm Password
                </label>
                <div className="relative w-full">
                  <input
                    id="confirm"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    required
                    autoComplete="off"
                    {...register("confirmPassword")}
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 pr-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1"
                  >
                    {showPassword ? (
                      <LuEye size={18} />
                    ) : (
                      <LuEyeClosed size={18} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1 px-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 mt-4 px-1">
                <input
                  type="checkbox"
                  name="gree"
                  required
                  className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                />
                <label
                  htmlFor="gree"
                  className="text-white text-xs sm:text-sm md:text-base leading-relaxed"
                >
                  I agree to terms & conditions
                </label>
              </div>

              {/* Submit Button */}
              <div className="w-full pt-2">
                <Button className="w-full h-12 sm:h-14 rounded-full text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-shadow">
                  Join For Free Now
                </Button>
                <p className="text-white text-center mt-4 sm:mt-5 text-xs sm:text-sm md:text-base">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-orange-500 hover:text-orange-400 transition-colors font-medium"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </form>

            {/* Social Login */}
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

export default SignUpCard;
