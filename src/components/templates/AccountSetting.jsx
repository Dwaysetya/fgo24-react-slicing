import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import Button from "../atoms/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../../redux/reducers/users";
import { loginUser } from "../../redux/reducers/auth";
import Swal from "sweetalert2";

const AccountSetting = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userId = useSelector((state) => state.auth.currentUser?.id);
  const users = useSelector((state) => state.users.data);
  const user = users.find((e) => e.id === userId);

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function handleEdit(data) {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "User tidak ditemukan.",
      });
      return;
    }

    const updatedData = {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
      password: data.password,
      confirm: data.confirm,
    };

    const editValue = {
      id: user.id,
      ...updatedData,
    };

    console.log(editValue);

    dispatch(editData(editValue));
    dispatch(loginUser(editValue));
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Data profil berhasil diperbarui.",
      timer: 2000,
      showConfirmButton: false,
    });
  }

  return (
    <form onSubmit={handleSubmit(handleEdit)} className="flex flex-col gap-10">
      <div className="bg-white rounded-2xl py-6 px-5 shadow-sm flex flex-col justify-between items-center gap-5">
        <div className="bg-white w-full py-6 border-b border-black flex gap-10 items-center">
          <h1 className="text-gray-500">Details Information</h1>
        </div>
        <div className="flex flex-col w-full py-5 justify-between gap-5">
          <div className="flex w-full gap-5">
            <div className="flex flex-col gap-5 w-full">
              <label className="text-black">First Name</label>
              <input
                id="naem"
                {...register("name")}
                type="text"
                placeholder="Enter your first name"
                autoComplete="off"
                className=" w-full rounded-full py-[10px] px-[24px] bg-orange/50 border border-gray-500 hover:border-orange-500 text-black "
              />
            </div>
            <div className="flex flex-col gap-5 w-full">
              <label className="text-black">Last Name</label>
              <input
                {...register("lastname")}
                id="last name"
                type="text"
                placeholder="Enter your last name"
                autoComplete="off"
                className="w-full rounded-full py-[10px] px-[24px] bg-orange/50 border border-gray-500 hover:border-orange-500 text-black "
              />
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div className="flex flex-col gap-5 w-full">
              <label className="text-black">E-mail</label>
              <input
                {...register("email")}
                id="email"
                type="text"
                placeholder="Enter your email"
                autoComplete="off"
                className=" w-full rounded-full py-[10px] px-[24px] bg-orange/50 border border-gray-500 hover:border-orange-500 text-black "
              />
            </div>
            <div className="flex flex-col gap-5 w-full">
              <label className="text-black">Phone Number</label>
              <input
                {...register("phone")}
                id="phone"
                type="text"
                placeholder="Enter your phone number"
                autoComplete="off"
                className="w-full rounded-full py-[10px] px-[24px] bg-orange/50 border border-gray-500 hover:border-orange-500 text-black "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl py-6 px-5 shadow-sm flex flex-col justify-between items-center gap-5">
        <div className="bg-white w-full py-6 border-b border-black flex gap-10 items-center">
          <h1 className="text-gray-500">Account and Privacy</h1>
        </div>
        <div className="flex w-full py-5 justify-between gap-5">
          <div className="flex w-full gap-5 flex-col">
            <label className="text-black">Old Password</label>
            <div className="w-full rounded-full flex items-center gap-3 bg-orange/50 border border-gray-500 hover:border-orange-500 text-black">
              <input
                id="password"
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-full py-[10px] px-[24px] bg-orange/50 hover:border-orange-500 text-black outline-0"
                autoComplete="off"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="text-black px-5"
              >
                {showPassword ? <LuEye /> : <LuEyeClosed />}
              </div>
            </div>
          </div>
          <div className="flex w-full gap-5 flex-col">
            <label className="text-black">New Password</label>
            <div className="w-full rounded-full flex items-center gap-3 bg-orange/50 border border-gray-500 hover:border-orange-500 text-black">
              <input
                id="password"
                {...register("confirm")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-full py-[10px] px-[24px] bg-orange/50 hover:border-orange-500 text-black outline-0"
                autoComplete="off"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="text-black px-5"
              >
                {showPassword ? <LuEye /> : <LuEyeClosed />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button type="submit">Update changes</Button>
      </div>
    </form>
  );
};

export default AccountSetting;
