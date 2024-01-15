/* eslint-disable react/no-unescaped-entities */
import { FaDumpster, FaMoneyCheck } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/img/logo.jpeg";
export default function SideBar() {
  let navigate = useNavigate();
  const menus = [
    {
      label: "Product",
      path: "/admin",
      icon: <FaDumpster />,
    },
    {
      label: "Pesanan",
      path: "pesanan",
      icon: <FaMoneyCheck />,
    },
  ];
  return (
    <div className="bg-[#211511] h-screen sticky top-0 py-10 px-5">
      <ul className="flex flex-col  text-white gap-2">
        <div
          onClick={() => navigate("/")}
          className="flex w-full flex-col items-center"
        >
          <img src={logo} className="h-12 w-12 rounded-full" alt="" />
          <button className="text-primary text-xl font-bold">NIO'S</button>
        </div>
        {menus.map((menu) => (
          <Link
            to={menu.path}
            className="rounded-lg flex items-center gap-2 text-lg font-semibold px-2 py-1"
            key={menu.path}
          >
            <span className="text-primary">{menu.icon}</span>
            {menu.label}
          </Link>
        ))}
      </ul>
    </div>
  );
}
