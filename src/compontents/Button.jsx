// eslint-disable-next-line react/prop-types
export default function Button({ style, label, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`${style} text-white rounded-lg bg-primary hover:bg-primary2 font-semibold transition-all duration-150 ease-linear`}
    >
      {label}
    </button>
  );
}
