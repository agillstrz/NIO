/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.jpeg";
import ModalLogin from "../../pages/auth/ModalLogin";
import AUTH from "../../utils/Auth";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  let navigate = useNavigate();
  let { pathname } = useLocation();

  const menus = [
    {
      name: "Tentang",
      path: "/tentang",
    },
    {
      name: "Awards",
      path: "/award",
    },
  ];

  const menusAuth = [
    {
      name: "keranjang",
      path: "/keranjang",
    },
    {
      name: "Riwayat",
      path: "/riwayat",
    },
  ];

  return (
    <>
      <nav className="fixed lg:absolute px-2  top-0 w-full bg-white  z-[999] shadow-sm text-primary text-[20px] lg:px-20 h-20   flex justify-between items-center">
        <Link to={`/`} className="font-bold flex items-center gap-2 ">
          <img src={logo} className="h-12 rounded-full" alt="" />
          Nio's Kuliner
        </Link>
        <button
          onClick={() => setMenu(!menu)}
          className={`${
            menu && "rotate-90"
          } transition-all duration-200 lg:hidden`}
        >
          <GiHamburgerMenu />
        </button>
        {menu && (
          <div className="fixed inset-0 bg-transparent backdrop-blur-md  mt-20 items-start px-5 pt-2 flex text-2xl font-semibold gap-2 flex-col">
            <Link className="w-full border p-2 " to={`/about`}>
              Tentang
            </Link>
            <Link className="w-full border p-2 " to={`/award`}>
              Awards
            </Link>

            {AUTH.isAuthorization() ? (
              <>
                {menusAuth.map((m, index) => (
                  <Link
                    key={index}
                    className="w-full border p-2 flex items-center"
                    to={m.path}
                  >
                    {m.name} {m.name == "keranjang" && <RiShoppingCartFill />}
                  </Link>
                ))}

                <button
                  className="w-full text-left border p-2 "
                  onClick={() => AUTH.logout(navigate)}
                >
                  logout
                </button>
              </>
            ) : (
              <ModalLogin />
            )}
          </div>
        )}
        <div className="lg:flex hidden items-center gap-3 font-semibold  justify-end ">
          {menus.map((m, index) => (
            <Link className="relative" key={index} to={`${m.path}`}>
              {m.name}
              {pathname.includes(m.path) && (
                <span className="absolute w-full -bottom-1 left-0  bg-primary h-1"></span>
              )}
            </Link>
          ))}

          {AUTH.isAuthorization() ? (
            <>
              {menusAuth.map((m, index) => (
                <Link
                  key={index}
                  className="flex items-center gap-1 relative"
                  to={m.path}
                >
                  {m.name} {m.name == "keranjang" && <RiShoppingCartFill />}
                  {pathname.includes(m.path) && (
                    <span className="absolute w-full -bottom-1 left-0  bg-primary h-1"></span>
                  )}
                </Link>
              ))}
              <button onClick={() => AUTH.logout(navigate)}>logout</button>
            </>
          ) : (
            <ModalLogin />
          )}
        </div>
      </nav>
    </>
  );
}
