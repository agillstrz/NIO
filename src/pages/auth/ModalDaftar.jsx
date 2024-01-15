import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { validatePassword } from "../../hooks/ValidatePassword";
import AUTH from "../../utils/Auth";
import logo from "../../assets/img/logo.jpeg";
import { toast } from "react-toastify";
import { CONSTANT } from "../../utils/constant";
import { RiLockPasswordFill, RiLockUnlockFill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
export default function ModalDaftar({ setLogin, setModal, navigate }) {
  const [loading, setLoading] = useState(false);
  const [lock, setLock] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validate: (value) => {
      const errors = {};
      const { name, email, password } = value;
      if (!validatePassword(password)) {
        errors.password =
          "passsword harus berisikan angka, huruf besar dan huruf kecil";
      }
      if (name == "") {
        errors.name = "nama harus diisi";
      }
      if (email == "") {
        errors.email = "email harus diisi";
      }

      return errors;
    },

    onSubmit: async (values) => {
      const { password, email, name } = values;
      setLoading(true);
      try {
        const res = await axios.post(`${CONSTANT.baseURL}auth/register`, {
          email,
          password,
          name,
        });
        AUTH.storeCookies(res.data);
        setModal(false);
        navigate("/");
      } catch (error) {
        toast.error(error.response.data.message, {
          autoClose: 500,
          position: "top-center",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center">
          <img src={logo} className="h-10 w-10 rounded-full" alt="" />
          <h1 className="text-center font-semibold text-xl">Daftar</h1>
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="flex flex-col gap-2 font-semibold text-sm"
      >
        <div className="">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="outline-none px-2 py-2 w-full border rounded-md "
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <p className="text-[12px]">{formik.errors.email}</p>
        </div>
        <div className="">
          <label htmlFor="">Nama</label>
          <input
            type="text"
            className="outline-none px-2 py-2 w-full border rounded-md "
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            id=""
          />
          <p className="text-[12px]">{formik.errors.name}</p>
        </div>
        <div className="font-semibold">
          <label htmlFor="">Password</label>
          <div className="relative flex items-center justify-between w-full border rounded-md">
            <input
              type={`${lock ? "password" : "text"}`}
              className="outline-none px-2 py-2  overflow-hidden   w-full in  "
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              id=""
            />
            <button
              type="button"
              onClick={() => setLock(!lock)}
              className="w-[15%] lg:text-[20px]  flex justify-center"
            >
              {lock ? (
                <RiLockPasswordFill className="" />
              ) : (
                <RiLockUnlockFill />
              )}
            </button>
          </div>
          <p className="text-[12px]">{formik.errors.password}</p>
          <p className="text-[12px]">
            {formik.errors.error && formik.errors.error}
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`${
            loading
              ? "bg-slate-300 cursor-not-allowed"
              : "bg-primary hover:bg-primary2"
          } text-white rounded-lg  font-semibold transition-all duration-150 ease-linear w-full py-2`}
        >
          {loading ? "Loading..." : "Daftar"}
        </button>
      </form>
      <p className="text-sm mt-2">
        Sudah punya akun ?{" "}
        <span className="cursor-pointer" onClick={() => setLogin(true)}>
          Login
        </span>
      </p>
    </>
  );
}
