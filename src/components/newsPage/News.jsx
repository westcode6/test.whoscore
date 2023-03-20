export default function News({ image, title, desc, tag, time }) {
  return (
    <div className="h-32 flex items-center mb-6 w-full gap-4 bg-white shadow hover:shadow-xl rounded-lg transform transition hover:-translate-y-1 cursor-pointer">
      <img
        src={image}
        className="w-1/2 h-full object-cover rounded-lg shadow"
        alt="stadium"
      />

      <div className="w-1/2 h-full p-2 pl-0">
        <h2 className="font-semibold tracking-wide">{title}</h2>
        <p className="my-2 text-xs text-neutral-600 font-medium leading-2">
          {desc}
        </p>

        <div className="flex gap-1 items-center justify-between">
          <span className="bg-neutral-400 shadow text-white text-xs rounded-sm px-3 py-1">
            {tag}
          </span>

          <span className="text-xs text-neutral-600">{time}</span>
        </div>
      </div>
    </div>
  );
}
