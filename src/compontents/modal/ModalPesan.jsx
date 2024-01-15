/* eslint-disable react/prop-types */
import { TiWarning } from "react-icons/ti";
import Button from "../Button";
import Modal from "./Modal";

export default function ModalPesan({ modal, setModal, onSubmit, isLoading }) {
  return (
    <>
      <Button label={"Pesan Sekarang"} style={"w-full py-2"} />
      <Modal modal={modal} setModal={setModal}>
        <div className="bg-white w-[90%] lg:w-[30%] h-fit p-3 rounded-md flex flex-col gap-4">
          <h2 className="font-semibold text-center">
            Pastikan data sudah benar dan anda telah mengirimkan bukti bayar
            sebelum memesan produk ini
            <span className="text-center w-full flex justify-center text-[40px] text-red-700">
              <TiWarning />
            </span>
          </h2>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-1/2 py-2 text-white rounded-lg bg-primary hover:bg-primary2 font-semibold transition-all duration-150 ease-linear"
              onClick={() => setModal(false)}
            >
              kembali
            </button>
            <button
              type="button"
              className="w-1/2 py-2 text-white rounded-lg bg-primary hover:bg-primary2 font-semibold transition-all duration-150 ease-linear"
              onClick={(e) => onSubmit(e)}
            >
              {isLoading ? "Loading..." : "Pesan Sekarang"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
