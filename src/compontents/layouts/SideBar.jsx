/* eslint-disable react/no-unescaped-entities */
import { FaDumpster, FaMoneyCheck } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

import logo from "../../assets/img/logo.jpeg";
import AUTH from "../../utils/Auth";
export default function SideBar() {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const menus = [
    {
      label: "Product",
      path: "product",
      icon: <FaDumpster />,
    },
    {
      label: "Pesanan",
      path: "pesanan",
      icon: <FaMoneyCheck />,
    },
  ];
  return (
    <div className="bg-white border h-screen sticky top-0 py-10 px-5">
      <ul className="flex flex-col  text-primary gap-2">
        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer w-full flex-col items-center"
        >
          <img src={logo} className="h-12 w-12 rounded-full" alt="" />
          <button className="text-primary text-xl font-bold">NIO'S</button>
        </div>
        {menus.map((menu) => (
          <Link
            to={menu.path}
            className={`rounded-lg flex  items-center gap-2 text-lg font-semibold px-2 py-1 ${
              pathname.split("/").pop().includes(menu.path) &&
              "bg-primary text-white"
            } `}
            key={menu.path}
          >
            <span
              className={`${
                pathname.split("/").pop().includes(menu.path) && " text-white"
              }`}
            >
              {menu.icon}
            </span>
            {menu.label}
          </Link>
        ))}
        <button
          onClick={() => AUTH.logout(navigate)}
          className={`rounded-lg flex  items-center gap-2 text-lg  font-semibold px-2 py-1  `}
        >
          <CiLogout className="text-primary" /> Logout
        </button>
      </ul>
    </div>
  );
}
