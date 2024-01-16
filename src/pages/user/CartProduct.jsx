import { FormatRupiah } from "@arismun/format-rupiah";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoIosCart } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../compontents/Button";
import Loading from "../../compontents/admin/Loading";
import axiosInstance from "../../config/axiosInstance";
import { FetchData } from "../../services/FetchData";
import { CONSTANT } from "../../utils/CONSTANT.JS";
export default function CartProduct() {
  let navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const { data, refetch, isLoading } = FetchData("cart");

  const { mutate: deleteCart } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosInstance.delete(`cart/${id}`);
      toast.success(res.data.message, {
        autoClose: 500,
        closeOnClick: true,
      });
    },
    onSuccess: () => refetch(),
  });

  const { mutate: updateCart } = useMutation({
    mutationFn: async (id) => {
      await axiosInstance.patch(`cart/${id}`);
    },
    onSuccess: () => refetch(),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen">
      <>
        <h1 className="lg:text-3xl text-xl font-bold text-primary  flex items-center gap-2 justify-center pt-24 mb-5">
          Keranjang <IoIosCart />
        </h1>

        {data?.data.length > 0 ? (
          <>
            <div className="grid lg:grid-cols-2  lg:gap-10 gap-2 w-full  place-content-center ">
              {isLoading
                ? new Array(4)
                    .fill(null)
                    .map((m, index) => (
                      <div
                        key={index}
                        className="w-full h-44 rounded-lg animate-pulse bg-slate-300 border"
                      ></div>
                    ))
                : data?.data.map((m, index) => (
                    <div
                      key={index}
                      className="w-full relative  p-2 gap-5 flex border shadow-md rounded-lg"
                    >
                      <img
                        className="h-36"
                        src={`${CONSTANT.urlImage}/storage/${m.product.img}`}
                        alt=""
                      />
                      <div className="flex flex-col gap-2 justify-between">
                        <div className="">
                          <h2 className="text-[25px] font-bold">
                            {m.product.name}
                          </h2>
                          <p className="text-[20px] font-semibold">
                            <FormatRupiah value={m.product.price} />
                          </p>
                        </div>
                        <div className="border flex items-center gap-2 rounded-lg w-[50%]  ">
                          <button
                            disabled={qty <= 1}
                            onClick={() => setQty((prev) => (prev -= 1))}
                            className="w-[20%] py-1  border"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="outline-none text-center px-2 w-[50%]"
                            name=""
                            disabled
                            value={m.qty}
                            id=""
                          />
                          <button
                            onClick={() => {
                              updateCart(m.id);
                            }}
                            className="w-[20%] py-1  border"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteCart(m.id)}
                        className="absolute hover:text-primary transition-all duration-150 ease-linear right-2 top-2 cursor-pointer"
                      >
                        <RiDeleteBinFill className="lg:text-[25px] " />
                      </button>
                    </div>
                  ))}
            </div>
            <div className="flex justify-end mt-5 gap-2">
              <Button
                onClick={() => navigate("/checkout", { state: data })}
                style={`px-6 py-2 text-2xl`}
                label={"Pesan Sekarang"}
              />
            </div>
          </>
        ) : (
          <div className="h-screen w-full flex justify-center ">
            <div className="">
              <p>Keranjang Kosong, Cari Produk Sekarang</p>
              <button
                onClick={() => navigate("/")}
                className="w-full rounded-lg text-white justify-center hover:bg-primary2 flex items-center gap-1 px-5 py-2 bg-primary font-semibold"
              >
                Lihat Produk
                <GoSearch />
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
