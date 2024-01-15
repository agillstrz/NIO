import { ImSpinner9 } from "react-icons/im";
export default function Loading() {
  return (
    <div className="w-full  h-screen flex mb-40 justify-center animate-spin text-primary lg:text-[30px] items-center">
      <ImSpinner9 />
    </div>
  );
}
