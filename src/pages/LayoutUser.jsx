import { Outlet } from "react-router-dom";
import Navbar from "../compontents/layouts/navbar";
import Footer from "../compontents/layouts/Footer";
export default function LayoutUser() {
  return (
    <>
      <Navbar />
      <div className="lg:px-20 px-5 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
