import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutUser from "../pages/LayoutUser";
import DetailPesanan from "../pages/admin/DetailPesanan";
import Pesanan from "../pages/admin/Pesanan";
import ProductAdmin from "../pages/admin/Product";
import About from "../pages/user/About";
import Award from "../pages/user/Award";
import CartProduct from "../pages/user/CartProduct";
import Checkout from "../pages/user/Checkout";
import DetailPesananUser from "../pages/user/DetailPesananUser";
import History from "../pages/user/History";
import Home from "../pages/user/Home";
import PrivateRoute from "./PrivateRoute";
import ProtecRoute from "./ProtecRoute";

export default function SetUpRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<Home />} />
          <Route path="tentang" element={<About />} />
          <Route path="award" element={<Award />} />
          <Route path="/" element={<ProtecRoute />}>
            <Route path="keranjang" element={<CartProduct />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="riwayat" element={<History />} />
            <Route path="riwayat/:id" element={<DetailPesananUser />} />
          </Route>
        </Route>
        <Route path="admin" element={<PrivateRoute />}>
          <Route index element={<ProductAdmin />} />
          <Route path="pesanan" element={<Pesanan />} />
          <Route path="pesanan/:id" element={<DetailPesanan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
