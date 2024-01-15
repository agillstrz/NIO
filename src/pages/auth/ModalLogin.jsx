import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { RiLockPasswordFill, RiLockUnlockFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/img/logo.jpeg";
import Button from "../../compontents/Button";
import Modal from "../../compontents/modal/Modal";
import { validatePassword } from "../../hooks/ValidatePassword";
import AUTH from "../../utils/Auth";
import { CONSTANT } from "../../utils/constant";
import ModalDaftar from "./ModalDaftar";
export default function ModalLogin() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lock, setLock] = useState(true);
  const [login, setLogin] = useState(true);

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (value) => {
      const errors = {};
      const { password } = value;
      if (!validatePassword(password)) {
        errors.password =
          "passsword harus berisikan angka, huruf besar dan huruf kecil";
      }
      return errors;
    },

    onSubmit: async (values) => {
      const { password, email } = values;
      setLoading(true);
      try {
        const res = await axios.post(`${CONSTANT.baseURL}auth/login`, {
          email,
          password,
        });
        AUTH.storeCookies(res.data);
        setModal(false);
        toast.success("Berhasil login", {
          autoClose: 500,
          position: "top-center",
        });
        if (AUTH.isAuthorization() && AUTH.getRole() == 1) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } catch (error) {
        formik.errors.error = error.response.data.message;
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
      <Button
        onClick={() => setModal(true)}
        label={"Login"}
        style={`px-2 py-1`}
      />

      <Modal setModal={setModal} modal={modal}>
        <div className="bg-white lg:h-fit w-screen h-screen lg:w-[25%] p-5 rounded-md relative">
          {login ? (
            <>
              <div className="flex flex-col items-center">
                <img src={logo} className="h-10 w-10 rounded-full" alt="" />
                <h1 className="text-center font-semibold text-xl">Login</h1>
              </div>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-2 text-sm font-medium"
              >
                <div className="font-semibold">
                  <label htmlFor="">Email Address</label>
                  <input
                    type="text"
                    className="outline-none px-2 py-2 w-full border rounded-md "
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    id=""
                  />
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
                  {loading ? "Loading..." : "Login"}
                </button>
              </form>

              <div className="text-[12px] font-semibold mt-2 ">
                <p>
                  Belum Punya akun ?{" "}
                  <span
                    className="cursor-pointer font-bold hover:underline"
                    onClick={() => setLogin(!login)}
                  >
                    Daftar
                  </span>
                </p>
              </div>
            </>
          ) : (
            <ModalDaftar
              setModal={setModal}
              navigate={navigate}
              setLogin={setLogin}
            />
          )}
        </div>
      </Modal>
    </>
  );
}
