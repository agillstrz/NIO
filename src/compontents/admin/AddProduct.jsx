import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
export default function AddProduct() {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      stock: "",
      description: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  let navigate = useNavigate();
  return (
    <div className="">
      <button
        onClick={() => navigate("/dashboard/product")}
        className="px-2 flex items-center gap-1 py-1 rounded-lg border bg-green-400 hover:bg-green-500 transition-all duration-150 ease-in-out my-1 font-semibold text-sm text-white "
      >
        <TbArrowBackUp size={18} /> Kembali
      </button>
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
          <input name="image" onChange={formik.handleChange} type="file" />
        </div>
        <button className="w-fit px-5 rounded-lg py-2 text-white font-semibold bg-primary hover:bg-primary2 transition-all duration-150 ease-linear">
          Submit
        </button>
      </form>
    </div>
  );
}
