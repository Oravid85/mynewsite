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

  const isHomePage = location.hash === "#/" || location.hash === "";
  const isAboutMePage = location.hash === "#/aboutme";

  const bgcolor = currentLecture?.bgColor || aboutMe?.bgColor || "bg-white";

  return (
    <div className="w-full flex flex-col items-center">
      {/* אזור הקרוסלה + טופס */}
      <div className={`${bgcolor} w-full p-4`}>
        <div className="flex flex-col md:flex-row gap-6 w-3/4 mx-auto">
          {/* RecomCar של AboutMe – רק אם זה לא דף הרצאה */}
          {!isLecturePage && aboutMe?.recommendations?.length > 0 && (
            <div className="w-full md:w-2/3 flex flex-col">
              <RecomCar items={aboutMe.recommendations} />
            </div>
          )}

          {/* RecomCar של הרצאה */}
          {currentLecture && (
            <div className="w-full md:w-2/3">
              <RecomCar
                lectureData={currentLecture}
                aboutMe={aboutMe}
                items={lecturesCom.filter(
                  (item) => item.artist === currentLecture.name,
                )}
              />
            </div>
          )}

          {/* ContactForm */}
          <div className="w-full md:w-1/3">
            <ContactForm lectureData={currentLecture} aboutMe={aboutMe} />
          </div>
        </div>
      </div>

      {/* קישור ל"הרצאות נוספות" */}
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-40 border-2 border-amber-700 bg-amber-600 rounded-2xl shadow p-2 m-2 text-white text-center"
      >
        הרצאות נוספות
      </Link>
    </div>
  );
}
