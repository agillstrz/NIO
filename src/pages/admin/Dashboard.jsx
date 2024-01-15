import AddProduct from "../../compontents/admin/AddProduct";

export default function Dashboard() {
  return (
    <div className="p-2">
      <div className="flex my-2">
        <button className="bg-primary2 text-white font-semibold text-sm rounded-lg px-2 py-1">
          Kembali
        </button>
      </div>
      <AddProduct />
    </div>
  );
}
