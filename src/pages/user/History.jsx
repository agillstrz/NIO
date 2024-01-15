/* eslint-disable react/jsx-no-target-blank */
import { FormatRupiah } from "@arismun/format-rupiah";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { FetchData } from "../../services/FetchData";
import axiosInstance from "../../config/axiosInstance";
import Loading from "../../compontents/admin/Loading";
export default function History() {
  const { data, isLoading, refetch } = FetchData("history");

  const { mutate: updateChat } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosInstance.patch(`update-status/${id}`);
      return res.data;
    },
    onSuccess: () => refetch(),
    onError: (err) => console.log(err.response.data),
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full pt-28 min-h-screen">
      <h2 className="text-center font-bold text-3xl mb-4 text-primary">
        Riwayat Pembelian
      </h2>
      <table className="table-fixed w-full  ">
        <thead className="">
          <tr className="font-semibold">
            <th className="border bg-black/5 text-primary w-10">No</th>
            <th className="border bg-black/5 text-primary">Nama Pembeli</th>
            <th className="border bg-black/5 text-primary">Total Produk</th>
            <th className="border bg-black/5 text-primary">Total Pesanan</th>

            <th className="border bg-black/5 text-primary">Konfirmasi Chat</th>
            <th className="border bg-black/5 text-primary">Detail</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            data?.data.map((m, index) => (
              <tr
                key={index}
                className="text-sm hover:bg-[#f9f9f9] transition-all duration-75"
              >
                <td className="rowtable text-center">{++index}</td>
                <td className="rowtable">{m.name}</td>
                <td className="rowtable text-center">{m.total}</td>
                <td className="rowtable">
                  <FormatRupiah value={m.amount_price} />
                </td>

                <td className="rowtable flex justify-center">
                  <label className="flex items-center cursor-pointer select-none text-dark  dark:text-white">
                    <div
                      onClick={() => updateChat(m.id)}
                      className="relative  rounded-lg w-full"
                    >
                      <input type="checkbox" className="peer sr-only w-full " />
                      <div className="block h-8 rounded-full dark:bg-dark-2 bg-gray-3 w-14 bg-zinc-300 "></div>
                      <div
                        className={`absolute w-6 h-6 transition rounded-full  left-1 top-1 ${
                          m.status
                            ? "translate-x-full bg-green-700"
                            : "bg-red-700"
                        }`}
                      ></div>
                    </div>
                  </label>
                </td>

                <td className="rowtable text-center">
                  <Link
                    to={`${m.id}`}
                    className="p-2 hover:underline bg-slate-200 rounded-lg"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
