import { useState } from "react";

export default function RecomCar({
  items = [],
  mainview,
  lectureData = {},
  aboutMe = {},
}) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === items.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? items.length - 1 : slide - 1);
  };

  const bgcolor =
    mainview === "Greeting"
      ? "bg-white"
      : mainview === "AboutMe"
      ? aboutMe.bgColor
      : lectureData.bgColor;

  // console.log("bgcolor", bgcolor, lectureData, aboutMe);
  return (
    <div className={` w-full flex justify-center my-4 md:mb-0 `}>
      <div className="flex flex-col relative h-[360px] w-full max-w-xl mx-4 overflow-hidden rounded-2xl shadow-lg bg-amber-100 p-4">
        <div
          className="  h-[280px] flex transition-transform duration-500 ease-in-out gap-4.5  "
          style={{ transform: `translateX(+${slide * 104}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col w-full items-center justify-center bg-white h-64 rounded-2xl shadow-xl p-2 "
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

        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center px-4">
          <div className="w-full max-w-xl flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="border-2 border-amber-700 bg-amber-600 rounded-2xl shadow p-2 font-heebo text-base text-white hover:bg-amber-700 hover:font-bold transition-all duration-200"
            >
              קודם
            </button>

            <div className="flex items-center justify-center">
              <span className="mx-1">{items.length}</span>
              <span className="mx-1">/</span>
              <span className="mx-1">{slide + 1}</span>
            </div>

            <button
              onClick={nextSlide}
              className="border-2 border-amber-700 bg-amber-600 rounded-2xl shadow p-2 font-heebo text-base text-white hover:bg-amber-700 hover:font-bold transition-all duration-200"
            >
              הבא
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
