import { FormatRupiah } from "@arismun/format-rupiah";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dompet from "../../assets/img/dompet.png";
import { FetchData } from "../../services/FetchData";

import ModalPesan from "../../compontents/modal/ModalPesan";
import UsePostData from "../../services/UsePostData";
import { CONSTANT } from "../../utils/CONSTANT.JS";
export default function Checkout() {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    nohp: "",
    province: "",
    city: "",
    kodepos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  let navigate = useNavigate();
  const { data } = FetchData("cart");
  const { mutate: checkout, isLoading } = UsePostData({
    url: "checkout",
    onSuccess: () => {
      navigate("/");
      window.open(
        "https://api.whatsapp.com/send?phone=6281243001327&text=Bukti%20Transfer",
        "_blank"
      );
    },
    onError: (err) => console.log(err.response.data.message),
  });

  const openModal = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkout(form);
  };

  return (
    <div className="pt-20">
      <div className="border border-primary2 p-2">
        <form
          onSubmit={openModal}
          className="flex flex-col items-center gap-4 "
        >
          <h2 className="text-xl font-semibold w-full text-left text-black">
            Penerima
          </h2>
          <div className="lg:w-[80%] w-full grid lg:grid-cols-2 lg:gap-5 gap-2">
            <div className="">
              <label className="block" htmlFor="">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                placeholder=""
                className="outline-none px-2 w-full py-1 border rounded-lg"
                name="name"
                onChange={handleChange}
                id=""
              />
            </div>
            <div className="">
              <label className="block" htmlFor="">
                Nomor Handphone
              </label>
              <input
                type="text"
                required
                className="outline-none px-2 w-full py-1 border rounded-lg"
                name="nohp"
                onChange={handleChange}
                id=""
              />
            </div>
            <div className="">
              <label className="block" htmlFor="">
                Provinsi
              </label>
              <input
                type="text"
                required
                className="outline-none px-2 w-full py-1 border rounded-lg"
                name="province"
                onChange={handleChange}
                id=""
              />
            </div>
            <div className="">
              <label className="block" htmlFor="">
                Kabupaten / Kota
              </label>
              <input
                type="text"
                required
                className="outline-none px-2 w-full py-1 border rounded-lg"
                name="city"
                onChange={handleChange}
                id=""
              />
            </div>
            <div className="">
              <label className="block" htmlFor="">
                Kode Pos
              </label>
              <input
                type="text"
                required
                className="outline-none px-2 w-full py-1 border rounded-lg"
                name="kodepos"
                id=""
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="block" htmlFor="">
                Alamat Lengkap
              </label>
              <input
                type="text"
                required
                className="outline-none px-2 w-full py-1 border rounded-lg"
                name="address"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-semibold text-left  text-black">
              Pesanan
            </h2>
            <table className="table-fixed w-full  ">
              <thead className="">
                <tr className="font-semibold">
                  <th className="border bg-black/5 text-primary">Product</th>
                  <th className="border bg-black/5 text-primary">Nama</th>
                  <th className="border bg-black/5 text-primary">
                    Harga Satuan
                  </th>
                  <th className="border bg-black/5 text-primary">Jumlah</th>
                  <th className="border bg-black/5 text-primary">Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {data?.data.map((m, index) => (
                  <tr
                    key={index}
                    className="lg:text-sm text-[15px] hover:bg-[#f9f9f9] transition-all duration-75"
                  >
                    <td className="rowtable flex justify-center">
                      <img
                        className="h-12"
                        src={`${CONSTANT.urlImage}/storage/${m.product.img}`}
                        alt=""
                      />
                    </td>
                    <td className="rowtable">{m.product.name}</td>
                    <td className="rowtable">
                      <FormatRupiah value={m.product.price} />
                    </td>
                    <td className="rowtable text-center">{m.qty}</td>
                    <td className="rowtable">
                      <FormatRupiah value={m.product.price * m.qty} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex w-full justify-end  mt-2">
              <div
                type="button"
                className="bg-primary rounded-lg lg:w-fit w-full justify-center font-semibold flex items-center gap-2 p-2 text-white"
              >
                <p>Jumlah yang harus dibayar :</p>
                <FormatRupiah
                  value={data?.data.reduce(
                    (curr, item) => curr + item.qty * item.product.price,
                    0
                  )}
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-semibold text-center lg:mb-2  text-black">
              Pembayaran dapat melalui
            </h2>
            <div className="grid lg:grid-cols-2 w-full gap-5 lg:px-44 place-content-center">
              <div className="w-full p-2 border text-lg font-semibold">
                <div className="flex mb-2 justify-center">
                  <img
                    className="h-20"
                    src="https://cdn.freelogovectors.net/wp-content/uploads/2023/02/bri-logo-freelogovectors.net_.png"
                    alt=""
                  />
                </div>

                <p>053801115991509</p>
                <p>a.n Gabriella Julita Watupongoh</p>
              </div>
              <div className="w-full p-2 border text-lg font-semibold">
                <div className="flex mb-2 justify-center">
                  <img className="h-20" src={dompet} alt="" />
                </div>
                <div>
                  <p> DANA : 081243001327 </p>
                  <p>GOPAY: 081243001327</p>
                  <p>OVO : 081243001327</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <ModalPesan
              onSubmit={handleSubmit}
              modal={modal}
              setModal={setModal}
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
