import AUTH from "../utils/Auth";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtecRoute() {
  if (AUTH.isAuthorization()) {
    return <Outlet />;
  }
  return <Navigate to={"/"} replace={true} />;
}
