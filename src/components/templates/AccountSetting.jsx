import { useEffect, useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import Button from "../atoms/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../../redux/reducers/users";
import { loginUser } from "../../redux/reducers/auth";
import Swal from "sweetalert2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Validasi schema dengan Yup

const schema = yup.object().shape({
  name: yup.string().optional(),
  lastname: yup.string().optional(),
  email: yup
    .string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),
  phone: yup.string().optional(),
  password: yup.string().optional(),
  newpassword: yup.string().when("password", {
    is: (val) => val && val.length > 0, // Jika password lama diisi
    then: (schema) =>
      schema
        .required("Password baru wajib diisi")
        .notOneOf(
          [yup.ref("password")],
          "Password baru tidak boleh sama dengan password lama"
        ),
    otherwise: (schema) => schema.optional(),
  }),
});

const AccountSetting = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userId = useSelector((state) => state.auth.currentUser?.id);
  const users = useSelector((state) => state.users.data);
  const user = users.find((e) => e.id === userId);
  console.log(atob(users[0].password));

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("lastname", user.lastname);
      setValue("email", user.email);
      setValue("phone", user.phone);
    }
  }, [user, setValue]);

  const handleEdit = (data) => {
    if (!user) {
      return Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "User tidak ditemukan.",
      });
    }

    // Kalau password lama diisi, validasi dulu
    if (data.password?.trim()) {
      if (atob(user.password) !== data.password) {
        return Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Password lama salah.",
        });
      }
    }

    const updatedData = {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
      password: data.newpassword?.trim()
        ? btoa(data.newpassword)
        : user.password,
    };

    const editValue = {
      id: user.id,
      ...updatedData,
    };

    dispatch(editData(editValue));
    dispatch(loginUser(editValue));

    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Data profil berhasil diperbarui.",
      timer: 2000,
      showConfirmButton: false,
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleEdit)} className="flex flex-col gap-10">
      <div className="bg-white rounded-2xl py-6 px-5 shadow-sm flex flex-col gap-5">
        <h1 className="text-gray-500 border-b border-black pb-4">
          Details Information
        </h1>
        <div className="flex gap-5">
          <div className="flex flex-col w-full gap-2">
            <label>First Name</label>
            <input
              {...register("name")}
              placeholder="Enter your first name"
              autoComplete="off"
              className="w-full rounded-full py-2 px-4 bg-orange/50 border border-gray-500 hover:border-orange-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label>Last Name</label>
            <input
              {...register("lastname")}
              placeholder="Enter your last name"
              autoComplete="off"
              className="w-full rounded-full py-2 px-4 bg-orange/50 border border-gray-500 hover:border-orange-500"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname.message}</p>
            )}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col w-full gap-2">
            <label>Email</label>
            <input
              {...register("email")}
              placeholder="Enter your email"
              autoComplete="off"
              className="w-full rounded-full py-2 px-4 bg-orange/50 border border-gray-500 hover:border-orange-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label>Phone Number</label>
            <input
              {...register("phone")}
              placeholder="Enter your phone number"
              autoComplete="off"
              className="w-full rounded-full py-2 px-4 bg-orange/50 border border-gray-500 hover:border-orange-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl py-6 px-5 shadow-sm flex flex-col gap-5">
        <h1 className="text-gray-500 border-b border-black pb-4">
          Account and Privacy
        </h1>
        <div className="flex gap-5">
          <div className="flex flex-col w-full gap-2">
            <label>Old Password</label>
            <div className="flex items-center w-full rounded-full px-4 bg-orange/50 border border-gray-500 hover:border-orange-500">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your current password"
                className="w-full bg-transparent py-2 outline-none"
                autoComplete="off"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer text-black px-2"
              >
                {showPassword ? <LuEye /> : <LuEyeClosed />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label>New Password</label>
            <div className="flex items-center w-full rounded-full px-4 bg-orange/50 border border-gray-500 hover:border-orange-500">
              <input
                {...register("newpassword")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your new password"
                className="w-full bg-transparent py-2 outline-none"
                autoComplete="off"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer text-black px-2"
              >
                {showPassword ? <LuEye /> : <LuEyeClosed />}
              </span>
            </div>
            {errors.newpassword && (
              <p className="text-red-500 text-sm">
                {errors.newpassword.message}
              </p>
            )}
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
