/* eslint-disable react/prop-types */
import { TiWarning } from "react-icons/ti";
import Button from "../Button";
import Modal from "./Modal";
import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

export default function ModalDelete({ handleDelete, id, loadingDelete }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button onClick={() => setModal(true)} className="px-4 py-2 text-xl btn">
        <FaTrashCan />
      </button>
      <Modal modal={modal} setModal={setModal}>
        <div className="bg-white w-[90%] lg:w-[30%] h-fit p-3 rounded-md flex flex-col gap-4">
          <h2 className="font-semibold text-center">
            Yakin untuk menghapus data ?
            <span className="text-center w-full flex justify-center text-[40px] text-red-700">
              <TiWarning />
            </span>
          </h2>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-1/2 py-2 text-white rounded-lg bg-primary2 hover:bg-primary2 font-semibold transition-all duration-150 ease-linear"
              onClick={() => setModal(false)}
            >
              kembali
            </button>
            <button
              type="button"
              className="w-1/2 py-2 text-white rounded-lg bg-primary hover:bg-primary2 font-semibold transition-all duration-150 ease-linear"
              onClick={() => handleDelete(id)}
            >
              {loadingDelete ? "Loading.." : "Hapus"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
