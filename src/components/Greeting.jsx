import { useNavigate } from "react-router-dom";
import { artistsData } from "../artistdata";

export function Greeting() {
  const navigate = useNavigate();

  return (
    <div className="bg-amber-50/50 min-h-screen px-4 md:px-12 py-8 max-w-6xl mx-auto">
      <div>
        <h1 className="flex font-semibold text-3xl mt-6 mb-2 font-assistant text-amber-900">
          ברוכים הבאים!
        </h1>

        <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
          על האתר
        </h2>

        <p className="text-justify leading-relaxed whitespace-pre-wrap m-4 mb-10 font-alef text-lg text-gray-800">
          אם אתם מחפשים הרצאות מעניינות על מוזיקה ישראלית, אומנים ישראלים, קצת על
          השירה העברית ועל אנשי רוח שעיצבו את תרבותנו, הגעתם למקום הנכון:
          <br />
          שמי אור, ואני מדריך, נגן, ומרצה, ואשמח לפגוש אתכם לשעה-שעתיים, לדבר,
          להראות ולנגן את המוזיקה של האנשים שהשפיעו על כולנו.
        </p>

        <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
          הרצאות
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
          {artistsData.map((lecture) => (
            <div
              key={lecture.name}
              className="group bg-white border-2 border-amber-200 rounded-2xl shadow-sm hover:shadow-xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between"
              onClick={() => {
                navigate(`/lectures/${lecture.slug}`);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className="flex flex-col items-center">
                <h2 className="text-right font-bold text-xl mb-4 font-noto text-amber-800 group-hover:text-amber-950 transition-colors w-full line-clamp-1">
                  {lecture.name}
                </h2>

                <div className="w-full h-40 mb-4 overflow-hidden rounded-xl flex items-center justify-center bg-amber-50">
                  <img
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    src={lecture.picture}
                    alt={lecture.name}
                  />
                </div>

                <p className="text-justify leading-relaxed whitespace-pre-wrap font-alef text-base text-gray-800 mb-6 w-full line-clamp-3">
                  {lecture.onlecture}
                </p>
              </div>

              <div className="w-full text-right mt-auto">
                <span className="text-amber-700 font-semibold text-sm inline-block">
                  לפרטים נוספים ←
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}