/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { toast } from "react-toastify";
import UsePostData from "../../services/UsePostData";
import Modal from "./Modal";
export default function ModalAddProduct({ refetch }) {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const { mutate } = UsePostData({
    url: "product",
    onSuccess: () => {
      toast.success("Berhasil Menambahkan Produk", {
        autoClose: 500,
        theme: "dark",
        position: "top-center",
      });
      setModal(false);
      refetch();
    },
    onError: (err) => {
      toast.error(err.response.data.message, {
        autoClose: 500,
        theme: "dark",
        position: "top-center",
        style: { zIndex: "9999" },
      });
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      stock: "",
      description: "",
      img: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("stock", values.stock);
      formData.append("description", values.description);
      mutate(formData);
    },
  });

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="px-4 py-2 gap-2 flex items-center  btn"
      >
        Tambah Produk <GrAdd />
      </button>
      <Modal modal={modal} setModal={setModal}>
        <div className="bg-white w-[30%] h-fit p-3 rounded-md">
          <h2 className="text-xl font-bold text-center mb-2 text-primary">
            Tambah Produk
          </h2>
          <form
            onSubmit={formik.handleSubmit}
            className="flex text-sm flex-col gap-3 border rounded-lg p-2"
          >
            <div className="">
              <label className="" htmlFor="">
                Nama
              </label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="w-full h-8 px-1 outline-none border rounded-lg"
                id="name"
              />
            </div>
            <div className="">
              <label className="" htmlFor="">
                Harga
              </label>
              <input
                name="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price}
                className="w-full h-8 px-1 outline-none border rounded-lg"
                id=""
              />
            </div>
            <div className="">
              <label className="" htmlFor="">
                Stok
              </label>
              <input
                name="stock"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.stock}
                className="w-full h-8 px-1 outline-none border rounded-lg"
                id=""
              />
            </div>
            <div className="">
              <label className="" htmlFor="">
                Deskripsi
              </label>
              <textarea
                type="text"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                placeholder="Description"
                className="w-full h-20 py-1 px-1 outline-none border rounded-lg"
                id=""
              />
            </div>
            <div className="">
              <input
                name="img"
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
              />
            </div>
            <button
              type="submit"
              className="w-fit px-5 rounded-lg py-2 text-white font-semibold bg-primary hover:bg-primary2 transition-all duration-150 ease-linear"
            >
              Simpan
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
