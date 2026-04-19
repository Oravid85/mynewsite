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

  return (
    <div className="w-full flex justify-center my-4 md:my-0 h-full" dir="ltr">
      {" "}
      {/* הקונטיינר הצהוב - ללא Padding בצדדים כדי לא להרוס את חישוב ה-100% */}
      <div className="flex flex-col relative h-full w-full max-w-xl mx-4 overflow-hidden rounded-2xl shadow-lg bg-amber-100 pt-4">
        {/* פס הסליידים שזז */}
        <div
          className="h-[280px] flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {items.map((item, index) => (
            /* מעטפת שקופה לכל סלייד - תמיד 100% מהרוחב */
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center px-4"
            >
              {/* הכרטיסייה הלבנה - העיצוב עצמו */}
              <div
                className="w-full flex flex-col items-center justify-center bg-white h-64 rounded-2xl shadow-xl p-6"
                dir="rtl"
              >
                <p className="text-2xl md:text-xl text-center font-medium text-amber-800 px-2">
                  {item.text}
                </p>
                {item.author && (
                  <p className="w-full text-lg md:text-base flex justify-end mt-4 text-gray-600 italic">
                    {item.author}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ניווט ומספור */}
        <div
          className="absolute bottom-6 left-0 right-0 flex justify-center items-center px-8"
          dir="rtl"
        >
          <div className="w-full flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="border-2 border-amber-700 bg-amber-600 rounded-2xl shadow-md px-5 py-1 text-white hover:bg-amber-700 transition-all active:scale-95"
            >
              קודם
            </button>

            <div className="flex items-center justify-center font-bold text-amber-900 bg-amber-200/50 px-4 py-1 rounded-full">
              <span>{slide + 1}</span>
              <span className="mx-1">/</span>
              <span>{items.length}</span>
            </div>

            <button
              onClick={nextSlide}
              className="border-2 border-amber-700 bg-amber-600 rounded-2xl shadow-md px-5 py-1 text-white hover:bg-amber-700 transition-all active:scale-95"
            >
              הבא
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
