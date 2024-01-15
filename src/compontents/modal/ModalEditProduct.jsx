/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import UsePostData from "../../services/UsePostData";
import Button from "../Button";
import Modal from "./Modal";
export default function ModalEditProduct({ refetch, data }) {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(data.img);
  const { mutate: updateProduk } = UsePostData({
    url: `product/${data.id}`,
    onSuccess: (res) => {
      toast.success(res.message, {
        autoClose: 500,
        theme: "dark",
      });
      setModal(false);
      refetch();
    },
  });
  const formik = useFormik({
    initialValues: {
      name: data.name,
      price: data.price,
      stock: data.stock,
      description: data.description,
      img: data.image,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("stock", values.stock);
      formData.append("description", values.description);
      formData.append("image", image);
      updateProduk(formData);
    },
  });

  return (
    <>
      <Button
        onClick={() => setModal(true)}
        style={"px-4 py-2"}
        label={"Edit"}
      />
      <Modal modal={modal} setModal={setModal}>
        <div className="bg-white w-[30%] h-fit p-3 rounded-md">
          <h2>Add Product</h2>
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
                Price
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
                Stock
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
                Description
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
              simpan
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
