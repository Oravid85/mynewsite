import { useState } from "react";

export default function RecomCar({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };
  const maxDots = 3;
  const visibleDotIndex =
    currentIndex - Math.floor(currentIndex / maxDots) * maxDots;

  return (
    <div className="relative w-full max-w-xl mx-4 overflow-hidden rounded-2xl shadow-lg mb-2 bg-amber-100">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(+${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col gap-4 items-center justify-center bg-amber-100 h-64"
          >
            <p className="text-2xl md:text-xl text-center font-medium text-amber-800 px-4">
              {item.text}
            </p>
            {item.author && (
              <p className="text-xl md:text-base flex justify-end mt-2 text-gray-600">
                {item.author}
              </p>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute bottom-4 right-4 border-2 border-amber-700 bg-amber-600 rounded-2xl shadow  p-2  font-heebo text-base text-white  hover:bg-amber-700 hover:font-bold transition-all duration-200"
      >
        {"קודם"}
      </button>

      <button
        onClick={nextSlide}
        className="absolute bottom-4 left-4  border-2 border-amber-700 bg-amber-600 rounded-2xl shadow  p-2  font-heebo text-base text-white hover:bg-amber-700 hover:font-bold transition-all duration-200"
      >
        {"הבא"}
      </button>

      <div className="  bg-amber-100 absolute bottom-1 w-full flex justify-center gap-x-2">
        {Array.from({ length: maxDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === visibleDotIndex ? "bg-amber-700" : "bg-amber-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
