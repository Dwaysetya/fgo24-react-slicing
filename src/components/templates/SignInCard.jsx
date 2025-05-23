import image11 from "../../assets/images/signup/image 1.png";
import { LuEyeClosed } from "react-icons/lu";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import logoTick from "../../assets/images/logo/logorooms.png";
import React from "react";

function SignInCard() {
  const [isModal, setIsModal] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <section className="main-container">
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col gap-5 relative justify-center items-center"
        style={{ backgroundImage: `url(${image11})` }}
      >
        {isModal && (
          <div className="flex w-full h-screen absolute z-30 justify-center items-center">
            <div className=" flex flex-col gap-10 bg-black/10 ">
              <form action="">
                <div className="flex flex-col gap-5">
                  <label className="text-white px-5">Email</label>
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
          <div className=" flex flex-col gap-10 justify-center items-center">
            <div className="flex justify-center w-[30%]">
              <img src={logoTick} alt="logo" />
            </div>
            <form action="">
              <div className="flex flex-col gap-5 justify-center items-center">
                <label className="text-white px-5">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  autoComplete="off"
                  className="w-[384px] h-[54px] rounded-full py-[15px] px-[24px] bg-orange/50 border border-white hover:border-orange-500 text-white shadow-xl/50 "
                />
              </div>
              <div className="flex flex-col gap-5">
                <label className="text-white px-5 mt-10">Password</label>
                <div className="shadow-xl/50 flex justify-between w-[384px] h-[54px] rounded-full py-[15px] px-[24px] bg-orange/50 border border-white hover:border-orange-500 text-white">
                  <input
                    id="password"
                    type={showPassword ? "password" : "text"}
                    placeholder="Enter your password"
                    className="w-full outline-none"
                    autoComplete="off"
                  />
                  <div onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <LuEyeClosed /> : <LuEye />}
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
