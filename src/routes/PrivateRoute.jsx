import { Navigate } from "react-router-dom";
import LayoutAdmin from "../pages/LayoutAdmin";
import AUTH from "../utils/Auth";

export default function PrivateRoute() {
  if (AUTH.isAuthorization()) {
    return <LayoutAdmin />;
  }
  return <Navigate to={"/"} replace={true} />;
}
