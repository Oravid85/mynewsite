import { artistsData } from "../artistdata";

export function Greeting({ setcurrentlecture, setmainview }) {
  return (
    <div className="bg-white min-h-screen p-4">
      <h1 className="flex font-semibold text-3xl mt-6 mb-2 font-assistant text-amber-800">
        ברוכים הבאים!
      </h1>

      <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
        על האתר
      </h2>

      <p className="text-justify leading-relaxed whitespace-pre-wrap m-4 mb-10 font-alef text-base text-gray-800">
        אם אתם מחפשים הרצאות מעניינות על מוזיקה ישראלית, אומנים ישראלים, קצת על
        השירה העברית ועל אנשי רוח שעיצבו את התרבות שלנו, הגעתם למקום הנכון:
        <br />
        שמי אור, ואני מדריך, נגן, ומרצה, ואשמח לפגוש אתכם לשעה-שעתיים, לדבר,
        להראות ולנגן את המוזיקה של האנשים שהשפיעו על כולנו.
      </p>

      <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
        הרצאות
      </h2>

      {/* קונטיינר לכרטיסים */}
      <div className="flex flex-col space-y-4">
        {artistsData.map((lecture) => (
          <div
            key={lecture.name}
            className="border-amber-800 rounded-xl shadow-lg p-4 pt-2 cursor-pointer"
            onClick={() => {
              setcurrentlecture(lecture);
              setmainview("LecturePage");
            }}
          >
            {/* תוכן בצד ימין */}
            <div className="flex-col">
              <h2 className="text-right font-bold text-1xl mt-2 mr-4 font-noto text-amber-700">
                {lecture.name}
              </h2>

              <div className="flex flex-col-reverse md:flex-row-reverse">
                <img
                  className="w-4/5 mx-auto md:w-[20%] h-auto"
                  src={lecture.picture}
                />
                <p className="md:ml-100 text-justify leading-relaxed whitespace-pre-wrap m-4 mb-10 font-alef text-base text-gray-800">
                  {lecture.onlecture.split(" ").slice(0, 12).join(" ")}...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
