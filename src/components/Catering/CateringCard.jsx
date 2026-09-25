
function CateringCard({ catering, onBookNow }) {
  return (
    <div className="w-full overflow-hidden rounded-xl border-2 border-[#8B4513] bg-white shadow-md">

      <div className="h-48 w-full overflow-hidden">
        <img
          src={catering.image}
          alt={catering.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4">

        <h3 className="mb-2 text-center text-lg font-bold">
          {catering.name}
        </h3>

        <p className="mb-4 text-center leading-6">
          {catering.description}
        </p>

        <div className="flex gap-2">

          <button
            className="flex-1 rounded-md border border-[#8B4513] px-3 py-2"
            type="button"
          >
            VIEW
          </button>

          <button
            className="flex-1 rounded-md bg-[#8B4513] px-3 py-2 text-white"
            type="button"
            onClick={() => onBookNow(catering)}
          >
            BOOK NOW
          </button>

        </div>

      </div>

    </div>
  );
}

export default CateringCard;
