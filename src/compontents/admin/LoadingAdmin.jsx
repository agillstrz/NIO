import { ImSpinner9 } from "react-icons/im";
export default function LoadingAdmin() {
  return (
    <div className=" min-h-screen w-full pb-20  flex  justify-center  text-primary lg:text-[30px] items-center">
      <ImSpinner9 className="animate-spin" />
    </div>
  );
}
