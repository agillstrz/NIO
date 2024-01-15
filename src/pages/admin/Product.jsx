import { FormatRupiah } from "@arismun/format-rupiah";
import { toast } from "react-toastify";
import Button from "../../compontents/Button";
import LoadingAdmin from "../../compontents/admin/LoadingAdmin";
import ModalAddProduct from "../../compontents/modal/ModalAddProduct";
import ModalEditProduct from "../../compontents/modal/ModalEditProduct";
import { FetchData } from "../../services/FetchData";
import UseDeleteData from "../../services/UseDeleteData";
import { CONSTANT } from "../../utils/constant";
export default function ProductAdmin() {
  const { data, isLoading, refetch } = FetchData("product");

  const { mutate: deleteProduct } = UseDeleteData({
    url: "product",
    onSuccess: (res) => {
      toast(res.message, {
        autoClose: 500,
        theme: "dark",
      });
      refetch();
    },
  });

  if (isLoading) {
    return <LoadingAdmin />;
  }
  return (
    <>
      <div className="w-full ">
        <div className="flex w-full my-2 justify-end">
          <ModalAddProduct refetch={refetch} />
        </div>
        <table className="table-fixed w-full  ">
          <thead className="">
            <tr className="font-medium">
              <th className="border py-1  bg-black/5 text-primary w-10">No</th>
              <th className="border  bg-black/5 text-primary">Nama</th>
              <th className="border  bg-black/5 text-primary">Harga</th>
              <th className="border  bg-black/5 text-primary">Stok</th>
              <th className="border  bg-black/5 text-primary">Foto</th>
              <th className="border  bg-black/5 text-primary">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <>loading</>}
            {!isLoading &&
              data?.data.map((product, index) => (
                <tr
                  key={index}
                  className="text-sm hover:bg-[#f9f9f9] transition-all duration-75"
                >
                  <td className="rowtable text-center">{++index}</td>
                  <td className="rowtable">{product.name}</td>
                  <td className="rowtable">
                    <FormatRupiah value={product.price} />
                  </td>
                  <td className="rowtable">{product.stock}</td>
                  <td className="rowtable flex justify-center">
                    <img
                      className="h-20"
                      src={`${CONSTANT.urlImage}/storage/${product.img}`}
                      alt=""
                    />
                  </td>
                  <td className="rowtable  gap-3   ">
                    <div className="flex items-center gap-2 justify-center ">
                      <ModalEditProduct data={product} refetch={refetch} />
                      <Button
                        onClick={() => deleteProduct(product.id)}
                        style={"px-4 py-2"}
                        label={"Delete"}
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
