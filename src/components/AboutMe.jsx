import RecomCar from "./RecomCar";

export function AboutMe({ aboutMe }) {
  return (
    <div className={`${aboutMe.bgColor} min-h-screen px-4 md:px-12 py-8 max-w-5xl mx-auto`}>
      <h1 className="flex font-semibold text-3xl mt-6 mb-8 font-assistant text-amber-900">
        {aboutMe.header}
      </h1>

      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12">
        {/* תמונה מעוצבת, נקייה ומאוזנת */}
        <div className="w-full md:w-[420px] flex-shrink-0 flex justify-center">
          <img
            className="w-full max-w-sm md:max-w-none h-auto max-h-[420px] object-cover rounded-3xl shadow-md border border-amber-200/60"
            src={aboutMe.picture}
            alt={aboutMe.header}
          />
        </div>

        {/* טקסט ותוכן */}
        <div className="flex flex-col text-right w-full">
          <h2 className="font-bold text-2xl mb-4 font-noto text-amber-700">
            עלי
          </h2>

          <p className="text-justify leading-relaxed whitespace-pre-wrap font-alef text-lg md:text-xl text-gray-800">
            {aboutMe.onartist}
          </p>
        </div>
      </div>
    </div>
  );
}