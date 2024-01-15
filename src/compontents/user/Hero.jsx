/* eslint-disable react/no-unescaped-entities */
import foto from "../../assets/img/homepage.png";
export default function Hero() {
  return (
    <div className=" h-screen w-full flex flex-col lg:pt-0 pt-28 lg:flex-row lex-col items-center gap-2 ">
      <div className=" lg:px-10  flex flex-col  gap-2 w-full lg:w-1/2">
        <div className="">
          <h1 className="lg:text-7xl text-5xl font-extrabold bg-gradient-to-r from-primary to-primary2 bg-clip-text text-transparent">
            NIO'S
          </h1>
          <p className="font-semibold text-primary">
            Oleh-oleh Kuliner Khas Daerah Sulawesi Utara
          </p>
        </div>
        <p className="">
          Merupakan perusahaan yang bergerak dibidang Kuliner Oleh-Oleh Khas
          Daerah khususnya Daerah Sulawesi Utara yang berdiri sejak tahun 2017
          dengan produk utama Nike Tore atau Keripik Nike lalu terus berinovasi
          dan sampai saat ini sudah memproduksi bermacam-macam Oleh-oleh Khas
          Daerah Sulawesi Utara
        </p>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 font-semibold text-white rounded-lg bg-primary hover:bg-white hover:text-primary border border-primary  transition-all duration-150">
            Show Product
          </button>
          <button className="px-4 py-2 font-semibold text-white rounded-lg bg-primary hover:bg-white hover:text-primary border border-primary  transition-all duration-150">
            Order Now
          </button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src={foto} className="w-full h-full" alt="" />
      </div>
    </div>
  );
}
