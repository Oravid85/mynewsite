import React from "react";
import { useLocation, Link } from "react-router-dom";
import { artistsData } from "../artistdata";

import ContactForm from "./form.jsx";
import RecomCar from "./RecomCar";

// שינוי כאן: הסרנו את ה-default כדי שיתאים לייבוא ב-App.jsx
export function BuisnessSection({ lecturesCom, aboutMe }) {
  const location = useLocation();
  const pathname = location.pathname;

  const isLecturePage = pathname.startsWith("/lectures/");
  const slug = isLecturePage ? pathname.replace("/lectures/", "") : null;
  const currentLecture = slug ? artistsData.find((i) => i.slug === slug) : null;

  const bgcolor = currentLecture?.bgColor || aboutMe?.bgColor || "bg-white";

  return (
    <div className="w-full flex flex-col items-stretch">
      <div className={`${bgcolor} w-full p-4`}>
        {/* items-stretch משווה גבהים, h-full על הילדים מותח אותם */}
        <div className="flex flex-col md:flex-row items-stretch gap-6 w-full max-w-6xl mx-auto px-4">
          <div className="w-full md:w-2/3 flex flex-col">
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

          <div className="w-full md:w-1/3 flex flex-col">
            <ContactForm lectureData={currentLecture} aboutMe={aboutMe} />
          </div>
        </div>
      </div>

      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-40 border-2 border-amber-700 bg-amber-600 rounded-2xl shadow p-2 m-6 text-white text-center hover:bg-amber-700 transition-all"
      >
        הרצאות נוספות
      </Link>
    </div>
  );
}
