import { useParams, Navigate } from "react-router-dom";
import { artistsData } from "/src/artistdata";

export function LecturePage() {
  const { slug } = useParams();

  const currentLecture = artistsData.find((lecture) => lecture.slug === slug);

  if (!currentLecture) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className={`${currentLecture.bgColor} min-h-screen px-4 md:px-12 py-8 max-w-6xl mx-auto`}>
      {/* כותרת ראשית */}
      <h1 className="flex font-semibold text-3xl md:text-4xl mt-6 mb-8 font-assistant text-amber-900">
        {currentLecture.header}
      </h1>

      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12">
        {/* תמונה דינאמית ומאוזנת (ללא מעיוותים או מתיחות) */}
        <div className="w-full md:w-[420px] flex-shrink-0 flex justify-center">
          <img
            className="w-full max-w-sm md:max-w-none h-auto max-h-[450px] object-contain rounded-3xl shadow-md border border-amber-200/60 bg-white/50 p-2"
            src={currentLecture.picture}
            alt={currentLecture.header}
          />
        </div>

        {/* טקסטים מוגדלים ונוחים לקריאה */}
        <div className="flex flex-col text-right w-full">
          <h2 className="font-bold text-2xl mb-4 font-noto text-amber-700">
            על האומן
          </h2>

          <p className="text-justify leading-relaxed whitespace-pre-wrap font-alef text-lg md:text-xl text-gray-800 mb-8">
            {currentLecture.onartist}
          </p>

          <h2 className="font-bold text-2xl mb-4 font-noto text-amber-700">
            על ההרצאה
          </h2>

          <p className="text-justify leading-relaxed whitespace-pre-wrap font-alef text-lg md:text-xl text-gray-800">
            {currentLecture.onlecture}
          </p>
        </div>
      </div>
    </div>
  );
}