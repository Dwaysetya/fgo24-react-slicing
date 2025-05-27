import { LuEye } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { addUsers } from "../../redux/reducers/users";
import { FaFacebook } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import image11 from "../../assets/images/signup/image 1.png";
import Button from "../atoms/Button";
import logoTick from "../../assets/images/logo/logorooms.png";
import React from "react";
import * as yup from "yup";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";

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
    const newData = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    dispatch(addUsers(btoa(JSON.stringify(newData))));

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
        <div className="w-full bg-black/30 min-h-screen px-10 flex justify-center items-center rounded-tl-4xl rounded-br-4xl">
          <div className=" flex flex-col gap-5 bg-black/10 w-full justify-center items-center">
            <div className="flex justify-center w-[20%] items-center">
              <img
                src={logoTick}
                alt="logo"
                className="flex justify-center items-center "
              />
            </div>
            <form onSubmit={handleSubmit(saveData)}>
              <div className="flex flex-col gap-5">
                <label className="text-white px-5">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  required
                  {...register("email")}
                  autoComplete="off"
                  className="regist-2"
                />
              </div>
              {errors.email && (
                <div className="text-yellow-600">{errors.email.message}</div>
              )}
              <div className="flex flex-col gap-5">
                <label className="text-white px-5 mt-5">Password</label>
                <div className="regist-2 flex justify-between ">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    autoComplete="off"
                    {...register("password")}
                    className=" w-full outline-none"
                  />

                  <div onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <LuEye /> : <LuEyeClosed />}
                  </div>
                </div>
                {errors.password && (
                  <div className="text-yellow-600">
                    {errors.password.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-5">
                <label className="text-white px-5 mt-5">Confirm Password</label>
                <div className="regist-2 flex focus:bg-transparent justify-between ">
                  <input
                    id="confirm"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    required
                    autoComplete="off"
                    {...register("confirmPassword")}
                    className=" w-full outline-none"
                  />
                  <div onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <LuEye /> : <LuEyeClosed />}
                  </div>
                </div>
                {errors.confirmPassword && (
                  <p style={{ color: "red" }}>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className="flex gap-5 mt-2 px-5">
                <input type="checkbox" name="gree" required />
                <label htmlFor="gree" className="text-white">
                  I agree to terms & conditions
                </label>
              </div>
              <div className="w-[384px] h-[54px] rounded-full mt-5">
                <Button className="shadow-xl/10 w-[384px] h-[54px] rounded-full">
                  Join For Free Now
                </Button>
                <p className="shadow-xl/10 rounded-full text-white mt-5 flex align-center justify-center">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-orange-500 hover:text-white"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </form>
            <div className="flex items-center w-full gap-10 justify-center mt-10">
              <div className="regist-1">
                <FcGoogle />
                <span>Google</span>
              </div>
              <div className="regist-1">
                <FaFacebook className="text-blue-700" />
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpCard;
