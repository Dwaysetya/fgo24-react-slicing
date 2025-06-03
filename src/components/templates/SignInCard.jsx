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

      dispatch(loginUser({ id: user.id, ...user }));

      Swal.fire({
        title: "Login berhasil!",
        icon: "success",
      });

      navigate("/");
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
          <div className="flex w-full h-screen absolute z-30 justify-center items-center bg-black/90 ">
            <div className=" flex flex-col gap-10 bg-black/70">
              <form action="">
                <div className="flex flex-col gap-5">
                  <label className="text-white">Email</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                    className="w-[384px] h-[54px] rounded-full py-[15px] px-[24px] bg-orange/50 border border-white hover:border-orange-500 text-white shadow-xl/50 "
                  />
                </div>
                <div className="w-[384px] h-[54px] rounded-full mt-10">
                  <Button
                    className="shadow-xl/10 w-[384px] h-[54px] rounded-full"
                    onClick={() => setIsModal(false)}
                  >
                    Send email
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="w-full min-h-screen px-10 flex justify-center items-center">
          <div className=" flex flex-col gap-10 justify-center items-center bg-black/80 w-[40%] py-20 rounded-4xl">
            <div className="flex justify-center w-[30%]">
              <img src={logoTick} alt="logo" />
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-5">
                <label className="text-white px-5">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  autoComplete="off"
                  {...register("email")}
                  className="w-[384px] h-[54px] rounded-full py-[15px] px-[24px] bg-orange/50 border border-white hover:border-orange-500 text-white shadow-xl/50 "
                />
              </div>
              <div className="flex flex-col gap-5">
                <label className="text-white px-5 mt-10">Password</label>
                <div className="shadow-xl/50 flex justify-between w-[384px] h-[54px] rounded-full py-[15px] px-[24px] bg-orange/50 border border-white hover:border-orange-500 text-white">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full outline-none"
                    {...register("password")}
                    autoComplete="off"
                  />
                  <div onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <LuEye /> : <LuEyeClosed />}
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-5 mt-5 px-5">
                <p
                  className="text-white hover:text-orange-500 cursor-pointer"
                  onClick={() => setIsModal(true)}
                >
                  Forgot your password
                </p>
              </div>
              <div className="w-[384px] h-[54px] rounded-full mt-10">
                <Button className="shadow-xl/10 w-[384px] h-[54px] rounded-full">
                  Join For Free Now
                </Button>
              </div>
            </form>
            <div>
              <p className="text-white">
                Don't have an account?{" "}
                <Link to="/signup" className="text-orange-500">
                  Sign-Up
                </Link>
              </p>
            </div>
            <div className="flex items-center w-full gap-10 justify-center">
              <div className="shadow-xl/50 flex justify-center items-center gap-5 h-[54px] rounded-full py-[15px] px-[24px] bg-orange/50 border border-white hover:border-orange-500 text-white">
                <FcGoogle />
                <span>Google</span>
              </div>
              <div className="shadow-xl/50 flex justify-center items-center gap-5 h-[54px] rounded-full py-[15px] px-[24px] bg-orange/50 border border-white hover:border-orange-500 text-white">
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

export default SignInCard;
