import { FormatRupiah } from "@arismun/format-rupiah";
import { useParams } from "react-router-dom";
import Loading from "../../compontents/admin/Loading";
import { FetchData } from "../../services/FetchData";
import { CONSTANT } from "../../utils/CONSTANT.JS";
export default function DetailPesananUser() {
  let { id } = useParams();

  const { data, isLoading } = FetchData(`pesanan-user/${id}`);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="pt-28 min-h-screen">
      <h2 className="text-3xl text-center font-bold mb-5 text-primary">
        Detail Pesanan{" "}
      </h2>

      <div className="w-full ">
        <table className="table-fixed w-full  ">
          <thead className="">
            <tr className="font-semibold">
              <th className="border bg-black/5 text-primary">Produk</th>
              <th className="border bg-black/5 text-primary">Nama</th>
              <th className="border bg-black/5 text-primary">Harga Satuan</th>
              <th className="border bg-black/5 text-primary">Jumlah</th>
              <th className="border bg-black/5 text-primary">Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {data?.order.map((m, index) => (
              <tr
                key={index}
                className="text-sm hover:bg-[#f9f9f9] transition-all duration-75"
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
                <td className="rowtable">{m.qty}</td>
                <td className="rowtable">
                  <FormatRupiah value={m.product.price * m.qty} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 font-semibold p-2 bg-slate-200">
          Pesana akan dikirim ke provinsi {data.customer.province} , kota{" "}
          {data.customer.city} {data.customer.address} dengan nama penerima :{" "}
          {data.customer.name}
        </p>
        <div className="flex justify-end items-center">
          <button className="p-2 bg-primary font-semibold text-white mt-5 rounded-lg">
            Total Harga : <FormatRupiah value={data.total} />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="lg:w-[80%]  w-full grid lg:grid-cols-2 font-semibold lg:gap-5 gap-2">
          <h2 className="col-span-2 text-2xl">Penerima</h2>
          <div className="">
            <label className="block" htmlFor="">
              Nama Lengkap
            </label>
            <input
              type="text"
              disabled
              placeholder=""
              className="outline-none px-2 w-full py-1 border rounded-lg"
              name="name"
              value={data?.customer.name}
              id=""
            />
          </div>
          <div className="">
            <label className="block" htmlFor="">
              Nomor Handphone
            </label>
            <input
              type="text"
              disabled
              className="outline-none px-2 w-full py-1 border rounded-lg"
              name="nohp"
              value={data?.customer.nohp}
              id=""
            />
          </div>
          <div className="">
            <label className="block" htmlFor="">
              Provinsi
            </label>
            <input
              type="text"
              disabled
              className="outline-none px-2 w-full py-1 border rounded-lg"
              name="province"
              value={data?.customer.province}
              id=""
            />
          </div>
          <div className="">
            <label className="block" htmlFor="">
              Kabupaten / Kota
            </label>
            <input
              type="text"
              disabled
              className="outline-none px-2 w-full py-1 border rounded-lg"
              name="city"
              value={data?.customer.city}
              id=""
            />
          </div>
          <div className="">
            <label className="block" htmlFor="">
              Kode Pos
            </label>
            <input
              type="text"
              disabled
              className="outline-none px-2 w-full py-1 border rounded-lg"
              name="kodepos"
              value={data?.customer.kodepos}
              id=""
            />
          </div>
          <div className="">
            <label className="block" htmlFor="">
              Alamat Lengkap
            </label>
            <input
              type="text"
              disabled
              className="outline-none px-2 w-full py-1 border rounded-lg"
              name="address"
              value={data?.customer.address}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
