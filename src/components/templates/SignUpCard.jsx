import image11 from "../../assets/images/signup/image 1.png";
import { LuEyeClosed } from "react-icons/lu";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import logoTick from "../../assets/images/logo/logorooms.png";
import React from "react";
import { registerHooks } from "../../hooks/registerHooks";

function SignUpCard() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState("");
  const [isPassword, setIsPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = { email: isEmail, password: isPassword };
    const result = registerHooks(data);
    return result;
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
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5">
                <label className="text-white px-5">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  required
                  value={isEmail}
                  autoComplete="off"
                  onChange={(e) => setIsEmail(e.target.value)}
                  className="regist-2"
                />
              </div>
              <div className="flex flex-col gap-5">
                <label className="text-white px-5 mt-5">Password</label>
                <div className="regist-2 flex justify-between ">
                  <input
                    id="password"
                    type={showPassword ? "password" : "text"}
                    placeholder="Enter your password"
                    required
                    autoComplete="off"
                    value={isPassword}
                    onChange={(e) => setIsPassword(e.target.value)}
                    className=" w-full outline-none"
                  />

                  <div onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <LuEyeClosed /> : <LuEye />}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <label className="text-white px-5 mt-5">Confirm Password</label>
                <div className="regist-2 flex focus:bg-transparent justify-between ">
                  <input
                    id="confirm"
                    type={showPassword ? "password" : "text"}
                    placeholder="Confirm your password"
                    required
                    autoComplete="off"
                    className=" w-full outline-none"
                  />
                  <div onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <LuEyeClosed /> : <LuEye />}
                  </div>
                </div>
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
