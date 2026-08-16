import React from "react";
import { useLocation, Link } from "react-router-dom";
import { artistsData } from "../artistdata";

import ContactForm from "./form.jsx";
import RecomCar from "./RecomCar";

export function BuisnessSection({ lecturesCom, aboutMe }) {
  const location = useLocation();
  const pathname = location.pathname;

  const isLecturePage = pathname.startsWith("/lectures/");
  const slug = isLecturePage ? pathname.replace("/lectures/", "") : null;
  const currentLecture = slug ? artistsData.find((i) => i.slug === slug) : null;

  const bgcolor = currentLecture?.bgColor || aboutMe?.bgColor || "bg-white";

  return (
    <div className="w-full flex flex-col items-center">
      <div className={`${bgcolor} w-full py-12 px-6 md:px-12`}>
        <div className="flex flex-col lg:flex-row items-stretch gap-8 w-full max-w-6xl mx-auto">
          {/* אזור ההמלצות (רחב יותר) */}
          <div className="w-full lg:w-2/3 flex flex-col">
            {!isLecturePage && aboutMe?.recommendations?.length > 0 && (
              <div className="h-full flex flex-col">
                <RecomCar items={aboutMe.recommendations} />
              </div>
            )}

            {currentLecture && (
              <div className="h-full flex flex-col">
                <RecomCar
                  lectureData={currentLecture}
                  aboutMe={aboutMe}
                  items={lecturesCom.filter(
                    (item) => item.artist === currentLecture.name,
                  )}
                />
              </div>
            )}
          </div>

          {/* טופס יצירת קשר */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <ContactForm lectureData={currentLecture} aboutMe={aboutMe} />
          </div>
        </div>
      </div>

      {/* כפתור חזרה להרצאות נוספות */}
      <div className="w-full max-w-6xl px-6 md:px-12 py-6 flex justify-start">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-600 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold rounded-2xl shadow-sm transition-all duration-300"
        >
          ← הרצאות נוספות
        </Link>
      </div>
    </div>
  );
}