import { useState } from "react";

export default function RecomCar({
  items = [],
  mainview,
  lectureData = {},
  aboutMe = {},
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const bgcolor =
    mainview === "Greeting"
      ? "bg-white"
      : mainview === "AboutMe"
      ? aboutMe.bgColor
      : lectureData.bgColor;

  console.log("bgcolor", bgcolor, lectureData, aboutMe);
  return (
    <div className={`${bgcolor} w-full flex justify-center my-4 md:mb-0`}>
      <div className="flex flex-col relative h-[360px] w-fit max-w-xl mx-4 overflow-hidden rounded-2xl shadow-lg bg-amber-100">
        <div
          className="  h-[280px] flex transition-transform duration-500 ease-in-out my-4  "
          style={{ transform: `translateX(+${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col gap-4 items-center justify-center bg-white h-64 shadow-xl"
            >
              <p className="text-2xl md:text-xl text-center font-medium text-amber-800 px-4">
                {item.text}
              </p>
              {item.author && (
                <p className=" px-6 w-full text-xl md:text-base flex justify-end mt-4 text-gray-600">
                  {item.author}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="px-4 py-2 absolute bottom-0 w-full flex flex-row items-center justify-between">
          <button
            onClick={prevSlide}
            className=" border-2 border-amber-700 bg-amber-600 rounded-2xl shadow  p-2  font-heebo text-base text-white  hover:bg-amber-700 hover:font-bold transition-all duration-200"
          >
            {"קודם"}
          </button>
          <div>
            <span className="mx-1">{items.length}</span>
            <span className="mx-1">/</span>
            <span className="mx-1">{currentIndex + 1}</span>
          </div>
          <button
            onClick={nextSlide}
            className="  border-2 border-amber-700 bg-amber-600 rounded-2xl shadow  p-2  font-heebo text-base text-white hover:bg-amber-700 hover:font-bold transition-all duration-200"
          >
            {"הבא"}
          </button>
        </div>
      </div>
    </div>
  );
}
