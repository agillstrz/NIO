/* eslint-disable react/no-unescaped-entities */
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";
import contact from "../../assets/img/contact.png";
import profile from "../../assets/img/profile.png";
export default function About() {
  return (
    <div className="pt-24">
      <div className="">
        <h1 className="font-bold text-xl lg:text-3xl text-center text-primary">
          NIO'S Profile
        </h1>
        <div className="flex lg:flex-row flex-col-reverse items-center  justify-center gap-2">
          <div className="lg:w-1/2 text-md ">
            <p>
              Merupakan perusahaan yang bergerak dibidang Kuliner Oleh-Oleh Khas
              Daerah khususnya Daerah Sulawesi Utara yang berdiri sejak tahun
              2017 dengan produk utama Nike Tore atau Keripik Nike lalu terus
              berinovasi dan sampai saat ini sudah memproduksi bermacam-macam
              Oleh-oleh Khas Daerah Sulawesi Utara
            </p>
            <p>
              Nio's sudah memiliki izin usaha seperti NIB, IUMK, MD, HAKI,
              P-IRT, Halal MUI, BPOM, dan izin usaha lainnya. Nio's juga
              merupakan produk kebanggaan Daerah Sulawesi Utara yang sudah
              bekerjasama dengan beberapa Kementerian RI seperti Kementerian
              Pariwisata, Kementerian Koperasi Dan UKM. Nio's sendiri memiliki
              banyak prestasi dalam lomba-lomba yang diikuti.
            </p>
          </div>

          <img
            className="h-[20rem]  lg:w-[30rem] w-[20rem] lg:h-[30rem] "
            src={profile}
            alt=""
          />
        </div>
      </div>

      <div className="min-h-screen flex lg:flex-row flex-col mt-10 lg:mt-0 items-start">
        <div className="lg:w-1/2 lg:order-1 order-2">
          <img className="" src={contact} alt="" />
        </div>
        <div className="lg:w-1/2 lg:order-2 order-1 flex flex-col justify-start h-full ">
          <h1 className="font-bold text-xl lg:text-4xl text-center my-5">
            Contact
          </h1>
          <div className="flex flex-col text-[16px] lg:text-[20px] font-medium gap-5">
            <div className="flex items-center gap-7">
              <FaLocationDot className="lg:text-[55px]" color="#0866FF" />
              <p className="">
                JAGA XII Desa Kawangkoan Baru, Kec. Kalawat Kab. Minahasa
              </p>
            </div>
            <div className="flex items-center gap-7">
              <FaFacebook className="lg:text-[55px]" color="#0866FF" />
              <p>Oleh-oleh Manado Nike Tore</p>
            </div>
            <div className="flex items-center gap-7">
              <FaInstagram className="lg:text-[55px]" color="#F700D1" />
              <p>NIKE TORE MANADO</p>
            </div>
            <div className="flex items-center gap-7">
              <FaWhatsapp className="lg:text-[55px]" color="#40BF50" />
              <p>089529425797</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
