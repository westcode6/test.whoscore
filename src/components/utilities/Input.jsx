export default function InputElement({ type, value, onChange, placeholder }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-12 mt-4 text-sm outline-none bg-gray-50 text-neutral-800  rounded-xl border-2 border-gray-400 focus:ring focus:ring-gray-300 px-3 "
      />
    </div>
  );
}
