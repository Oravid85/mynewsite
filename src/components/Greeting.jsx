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

      <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
        על האתר
      </h2>

      <p className="text-justify leading-relaxed whitespace-pre-wrap m-4 mb-10 font-alef text-lg text-gray-800">
        אם אתם מחפשים הרצאות מעניינות על מוזיקה ישראלית, אומנים ישראלים, קצת על
        השירה העברית ועל אנשי רוח שעיצבו את התרבות שלנו, הגעתם למקום הנכון:
        <br />
        שמי אור, ואני מדריך, נגן, ומרצה, ואשמח לפגוש אתכם לשעה-שעתיים, לדבר,
        להראות ולנגן את המוזיקה של האנשים שהשפיעו על כולנו.
      </p>

      <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
        הרצאות
      </h2>

      {/* קונטיינר לכרטיסים בטור יחיד במבנה נקי ושמנמן */}
      <div className="flex flex-col space-y-6">
        {artistsData.map((lecture) => (
          <div
            key={lecture.name}
            className="bg-white border-2 border-amber-200/70 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-400 p-6 cursor-pointer transition-all duration-300"
            onClick={() => {
              navigate(`/lectures/${lecture.slug}`);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <div className="flex flex-col">
              {/* כותרת ההרצאה */}
              <h2 className="text-right font-bold text-2xl mb-4 font-noto text-amber-800">
                {lecture.name}
              </h2>

              {/* תוכן הכרטיסייה: תמונה נקייה וטקסט */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                {/* תמונה ללא קונטיינר או רקע מסביב */}
                <img
                  className="w-full md:w-56 h-auto max-h-48 object-contain flex-shrink-0"
                  src={lecture.picture}
                  alt={lecture.name}
                />

                {/* טקסט מוגדל ונוח לקריאה */}
                <div className="flex flex-col flex-grow text-right w-full">
                  <p className="text-justify leading-relaxed whitespace-pre-wrap font-alef text-lg text-gray-800 mb-4">
                    {lecture.onlecture.split(" ").slice(0, 14).join(" ")}...
                  </p>
                  
                  <span className="text-amber-700 font-semibold text-sm hover:underline">
                    לפרטים נוספים ←
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}