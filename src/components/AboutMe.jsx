import { useState, useEffect } from 'react';
import RecomCar from "./RecomCar";
import or01 from '../assets/lecturesPictures/or_01.jpg'; // ייבוא התמונה הנוספת של הבוזוקי

export function AboutMe({ aboutMe }) {
  // מערך תמונות למובייל שיתחלפו אוטומטית
  const mobileImages = [aboutMe.picture, or01];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // אפקט להחלפה אוטומטית חלקית כל 4 שניות במובייל עם אפקט דהייה (Fade)
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // התחלת טשטוש/העלמה
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % mobileImages.length);
        setFade(true); // החזרה להופעה מלאה
      }, 300); // זמן ההפסקה המדויק לדהייה חלקה
    }, 4000);
    return () => clearInterval(timer);
  }, [mobileImages.length]);

  return (
    <div className={`${aboutMe.bgColor} min-h-screen px-4 md:px-12 py-8 max-w-5xl mx-auto`}>
      <h1 className="flex font-semibold text-3xl mt-6 mb-8 font-assistant text-amber-900">
        {aboutMe.header}
      </h1>

      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12">
        
        {/* אזור התמונות */}
        <div className="w-full md:w-[380px] flex-shrink-0 flex flex-col items-center">
          
          {/* תצוגת מובייל: תיבה בגובה קבוע ואחיד למניעת קפיצות פריסה + מעבר דהייה חלק */}
          <div className="block md:hidden w-full h-[360px] overflow-hidden rounded-3xl shadow-md border border-amber-200/60 bg-amber-50 relative">
            <img
              className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
              src={mobileImages[currentImageIndex]}
              alt={aboutMe.header}
            />
          </div>

          {/* תצוגת דסקטופ: תמונות קטנות יותר ומרווח גדול יותר ביניהן */}
          <div className="hidden md:flex flex-col gap-8 w-full">
            <img
              className="w-full h-[260px] object-cover rounded-3xl shadow-md border border-amber-200/60"
              src={aboutMe.picture}
              alt={aboutMe.header}
            />
            <img
              className="w-full h-[260px] object-cover rounded-3xl shadow-md border border-amber-200/60"
              src={or01}
              alt="נגינה בבוזוקי מקרוב"
            />
          </div>

        </div>

        {/* טקסט ותוכן עם מרווחים נקיים בין הפסקאות */}
        <div className="flex flex-col text-right w-full">
          <h2 className="font-bold text-2xl mb-4 font-noto text-amber-700">
            עלי
          </h2>

          <div className="text-justify leading-relaxed whitespace-pre-wrap font-alef text-lg md:text-xl text-gray-800 space-y-4">
            {aboutMe.onartist}
          </div>
        </div>

      </div>
    </div>
  );
}