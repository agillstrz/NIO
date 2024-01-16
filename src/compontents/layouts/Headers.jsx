import { MdWavingHand } from "react-icons/md";
export default function Headers() {
  return (
    <div className="w-full h-12 border flex items-center px-2">
      <h2 className="font-bold text-primary flex items-center gap-2 text-xl">
        Hello Admin <MdWavingHand />
      </h2>
    </div>
  );
}
