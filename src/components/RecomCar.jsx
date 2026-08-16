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
      {/* הקונטיינר הראשי - רקע נקי ועדין עם מסגרת עדינה */}
      <div className="flex flex-col relative h-full w-full max-w-xl mx-4 overflow-hidden rounded-3xl shadow-md border border-amber-200/60 bg-gradient-to-b from-amber-50/70 to-amber-100/40 pt-4 pb-16">
        
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
              {/* הכרטיסייה הפנימית - מראה מודרני ונקי עם צללית רכה */}
              <div
                className="w-full flex flex-col items-center justify-between bg-white h-64 rounded-2xl shadow-sm border border-amber-100 p-8 relative"
                dir="rtl"
              >
                {/* אייקון מרכאות קטן ואסתטי למעלה */}
                <span className="text-4xl text-amber-300 font-serif leading-none absolute top-4 right-6 select-none opacity-60">
                  “
                </span>

                <p className="text-xl md:text-lg text-center font-medium text-amber-950 px-2 leading-relaxed z-10 my-auto">
                  {item.text}
                </p>

                {item.author && (
                  <p className="w-full text-base flex justify-end text-amber-800/80 font-medium italic border-t border-amber-50 pt-2">
                    — {item.author}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ניווט ומספור */}
        <div
          className="absolute bottom-4 left-0 right-0 flex justify-center items-center px-8"
          dir="rtl"
        >
          <div className="w-full flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="inline-flex items-center justify-center px-5 py-2 border-2 border-amber-600 bg-white hover:bg-amber-50 text-amber-900 font-semibold rounded-2xl shadow-sm transition-all duration-300 active:scale-95 text-sm"
            >
              → קודם
            </button>

            <div className="flex items-center justify-center font-bold text-amber-900 bg-white/80 border border-amber-200/70 px-4 py-1.5 rounded-full shadow-xs text-sm">
              <span>{slide + 1}</span>
              <span className="mx-1.5 text-amber-400">/</span>
              <span>{items.length}</span>
            </div>

            <button
              onClick={nextSlide}
              className="inline-flex items-center justify-center px-5 py-2 border-2 border-amber-600 bg-white hover:bg-amber-50 text-amber-900 font-semibold rounded-2xl shadow-sm transition-all duration-300 active:scale-95 text-sm"
            >
              הבא ←
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}