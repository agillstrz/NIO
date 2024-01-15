/* eslint-disable react/jsx-no-target-blank */
import { FormatRupiah } from "@arismun/format-rupiah";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { Link } from "react-router-dom";
import LoadingAdmin from "../../compontents/admin/LoadingAdmin";
import { FetchData } from "../../services/FetchData";
export default function Pesanan() {
  const { data, isLoading } = FetchData("pesanan");

  if (isLoading) {
    return <LoadingAdmin />;
  }
  return (
    <div className="w-full">
      <h2 className="text-lg font-bold mb-2">Daftar Pesanan</h2>
      <table className="table-fixed w-full  ">
        <thead className="">
          <tr className="font-semibold">
            <th className="border bg-black/5 text-primary w-10">No</th>
            <th className="border bg-black/5 text-primary">Nama Pembeli</th>
            <th className="border bg-black/5 text-primary">Total Pesanan</th>
            <th className="border bg-black/5 text-primary">Total Produk</th>
            <th className="border bg-black/5 text-primary">Bukti Bayar</th>
            <th className="border bg-black/5 text-primary">Chat</th>
            <th className="border bg-black/5 text-primary">Detail</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((m, index) => (
            <tr
              key={index}
              className="text-sm hover:bg-[#f9f9f9] transition-all duration-75"
            >
              <td className="rowtable text-center">{++index}</td>
              <td className="rowtable">{m.name}</td>
              <td className="rowtable">
                <FormatRupiah value={m.amount_price} />
              </td>
              <td className="rowtable">{m.total}</td>
              <td className="rowtable text-center">
                <a
                  className="underline p-1 rounded-lg bg-blue-200 font-medium"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=6${m.nohp
                    .split("")
                    .slice(1)
                    .join("")}`}
                >
                  Lihat Bukti
                </a>
              </td>
              <td className="rowtable flex justify-center text-[20px]">
                {m.status ? (
                  <FaCheckCircle className="text-green-500 " />
                ) : (
                  <MdOutlineDoNotDisturbOn className="text-red-500" />
                )}
              </td>
              <td className="rowtable">
                <Link to={`${m.id}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
