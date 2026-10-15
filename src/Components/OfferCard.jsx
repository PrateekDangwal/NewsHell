 export default function OfferCard({
  title,
  description,
  oldPrice,
  price,
  discount,
  features,
  buttonText,
  onClose,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 backdrop-blur-sm p-4">

      {/* Card */}
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-black transition"
        >
          ✕
        </button>

        {/* Badge */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
            LIMITED TIME OFFER
          </span>

          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            {title}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="my-6 text-center">

          <div className="flex items-center justify-center gap-3">
            <span className="text-lg text-gray-400 line-through">
              ₹{oldPrice}
            </span>

            <span className="text-4xl font-bold text-gray-900">
              ₹{price}
            </span>
          </div>

          <p className="mt-2 font-medium text-green-600">
            Save {discount}%
          </p>

        </div>

        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <span className="text-green-500 font-bold">
                ✓
              </span>

              <span className="text-gray-700">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-7 w-full rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]">
          {buttonText}
        </button>

        {/* Footer */}
        <p className="mt-3 text-center text-xs text-gray-400">
          Offer available for a limited time
        </p>

      </div>
    </div>
  );
}