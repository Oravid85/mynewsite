import RecomCar from "./RecomCar";

export function AboutMe({ aboutMe }) {
  return (
    <div className={`${aboutMe.bgColor} min-h-screen px-4`}>
      <h1 className="flex font-semibold text-3xl mt-6 mb-2 mr-2 font-assistant  text-amber-800 ">
        {aboutMe.header}
      </h1>

      <div className="flex flex-col-reverse md:flex-row-reverse md:space-x-8 md:mt-10">
        <img
          className="w-[80%] h-[80%] md:w-[450px] md:h-[450px] m-4 mr-10 mb-10"
          src={aboutMe.picture}
        />
        <div className="flex-col ">
          <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
            עלי
          </h2>

          <p className="text-justify leading-relaxed whitespace-pre-wrap m-4 mb-10 font-alef  text-xl md:text-lg  text-gray-800">
            {aboutMe.onartist}
          </p>
        </div>
      </div>
    </div>
  );
}
