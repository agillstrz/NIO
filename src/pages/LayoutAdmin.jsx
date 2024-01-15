import { Outlet } from "react-router-dom";
import SideBar from "../compontents/layouts/SideBar";
import Headers from "../compontents/layouts/Headers";
export default function LayoutAdmin() {
  return (
    <div className="flex  ">
      <div className="w-[25%]  ">
        <SideBar />
      </div>
      <div className=" w-full ">
        <Headers />
        <div className="mx-20  my-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
