/* eslint-disable react/no-unescaped-entities */
import { FormatRupiah } from "@arismun/format-rupiah";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import axiosInstance from "../../config/axiosInstance";
import { FetchData } from "../../services/FetchData";
import { FaCartPlus } from "react-icons/fa";
import { CONSTANT } from "../../utils/CONSTANT.JS";
import AUTH from "../../utils/Auth";
export default function NioProduct() {
  const { data, isLoading } = FetchData("product");
  const { mutate: addACart } = useMutation({
    mutationFn: async (product_id) => {
      const res = await axiosInstance.post("cart", {
        product_id,
      });
      toast.success(res.data.message, { autoClose: 500 });
    },
    onError: () => {
      toast.error("produk sudah ada dikeranjang", {
        autoClose: 500,
        hideProgressBar: true,
      });
    },
  });

  const handleAddCart = (id) => {
    if (!AUTH.isAuthorization()) {
      toast.error("Login untuk menambahkan produk", {
        autoClose: 500,
        hideProgressBar: true,
        position: "top-center",
      });
      return;
    } else {
      addACart(id);
    }
  };

  return (
    <>
      <div className="">
        <h1 className="text-4xl font-extrabold">Nio's Product</h1>
        <div className="grid lg:grid-cols-2 gap-10 w-full  place-items-center">
          {isLoading &&
            new Array(4)
              .fill(null)
              .map((index) => (
                <div
                  key={index}
                  className="w-full h-72 animate-pulse bg-slate-300 rounded-lg"
                ></div>
              ))}
          {data?.data.map((m, index) => (
            <div key={index} className="w-full shadow-sm  p-2 gap-5 flex ">
              <img
                src={`${CONSTANT.urlImage}/storage/${m.img}`}
                className="h-32"
                alt=""
              />
              <div className="flex flex-col gap-2 justify-between">
                <div className="">
                  <h2 className="text-[20px] lg:text-[25px] font-bold">
                    {m.name}
                  </h2>
                  <p className="text-[20px] lg:text-[20px] font-semibold">
                    <FormatRupiah value={m.price} />
                  </p>
                  <p className="lg:text-md text-[15px] ">{m.description}</p>
                </div>
                <div className="flex  gap-2 items-center ">
                  <button
                    onClick={() => handleAddCart(m.id)}
                    className="active:scale-90 px-4 flex items-center gap-2 py-2 font-semibold text-white rounded-lg bg-primary hover:bg-white hover:text-primary border border-primary  transition-all duration-150"
                  >
                    <FaCartPlus /> Keranjang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
