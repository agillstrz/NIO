import Cookies from "js-cookie";

const AUTH = {
  isAuthorization() {
    if (Cookies.get("token")) return true;
    return null;
  },
  getToken() {
    return Cookies.get("token");
  },
  getRole() {
    return Cookies.get("role");
  },
  getName() {
    return Cookies.get("name");
  },
  logout(navigate) {
    navigate("/");
    Cookies.remove("token");
    Cookies.remove("role");
  },
  storeCookies(data) {
    if (!data) return null;
    Cookies.set("token", data.token);
    Cookies.set("name", data.data.name);
    Cookies.set("role", data.data.role);
  },
};

export default AUTH;
