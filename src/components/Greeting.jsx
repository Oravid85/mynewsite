import { useNavigate } from "react-router-dom";
import { artistsData } from "../artistdata";

export function Greeting({ setCurrentLecture, setMainView }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen px-4 md:px-12 py-8 max-w-5xl mx-auto">
      {/* כותרת ראשית */}
      <h1 className="flex font-semibold text-3xl mt-6 mb-2 font-assistant text-amber-900">
        ברוכים הבאים!
      </h1>

      {/* על האתר */}
      <div className="my-6">
        <h2 className="text-right font-bold text-2xl mb-3 font-noto text-amber-700">
          על האתר
        </h2>
        <p className="text-justify leading-relaxed whitespace-pre-wrap font-alef text-lg text-gray-800">
          אם אתם מחפשים הרצאות מעניינות על מוזיקה ישראלית, אומנים ישראלים, קצת על
          השירה העברית ועל אנשי רוח שעיצבו את התרבות שלנו, הגעתם למקום הנכון:
          <br />
          שמי אור, ואני מדריך, נגן, ומרצה, ואשמח לפגוש אתכם לשעה-שעתיים, לדבר,
          להראות ולנגן את המוזיקה של האנשים שהשפיעו על כולנו.
        </p>
      </div>

      {/* הרצאות */}
      <h2 className="text-right font-bold text-2xl mt-10 mb-6 font-noto text-amber-700">
        הרצאות
      </h2>

      {/* קונטיינר לכרטיסים במבנה שורות נקי */}
      <div className="flex flex-col space-y-6">
        {artistsData.map((lecture) => (
          <div
            key={lecture.name}
            className="bg-white border-2 border-amber-200/60 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-400 p-5 cursor-pointer transition-all duration-300"
            onClick={() => {
              navigate(`/lectures/${lecture.slug}`);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
              {/* תמונה מעוגלת ומסודרת */}
              <div className="w-full md:w-48 h-36 flex-shrink-0 overflow-hidden rounded-xl bg-amber-50">
                <img
                  className="w-full h-full object-cover"
                  src={lecture.picture}
                  alt={lecture.name}
                />
              </div>

              {/* תוכן הטקסט */}
              <div className="flex flex-col flex-grow text-right w-full">
                <h2 className="font-bold text-2xl mb-2 font-noto text-amber-800">
                  {lecture.name}
                </h2>
                <p className="text-justify leading-relaxed font-alef text-base text-gray-700 line-clamp-2">
                  {lecture.onlecture}
                </p>
                <span className="text-amber-700 font-semibold text-sm mt-3 inline-block hover:underline">
                  לפרטים נוספים ←
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}