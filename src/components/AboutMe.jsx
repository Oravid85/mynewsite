import RecommendationCarousel from "./RecommendationCarousel";
import { aboutMe } from "/src/aboutme";

export function AboutMe(props) {
  const MyData = props.aboutMe;
  // console.log(MyData);

  return (
    <div className={`${aboutMe.bgColor} min-h-screen`}>
      <h1 className="flex font-semibold text-3xl mt-6 mb-2 font-assistant  text-amber-800 mr-2">
        {aboutMe.header}
      </h1>

      <div className="flex flex-col-reverse md:flex md:flex-row-reverse md:space-x-8 md:mt-20">
        <img
          className="w-[80%] h-[80%] md:w-115 md:h-auto m-4 mr-10 mb-10"
          src={aboutMe.picture}
        />
        <div className="flex-col ">
          <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
            עלי
          </h2>

          <p className="text-justify leading-relaxed whitespace-pre-wrap m-4 mb-10 font-alef text-base text-gray-800">
            {aboutMe.onartist}
          </p>

          <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
            ממליצים
          </h2>

          <div className="flex-col md:flex-1 md:min-h-[150px] md:h-auto m-4">
            <RecommendationCarousel recommendations={aboutMe.recommendations} />
          </div>

          {/* <p className="text-justify leading-relaxed whitespace-pre-wrap m-4 font-alef text-base text-gray-800">
            {aboutMe.recomendations}
          </p> */}
        </div>
      </div>
    </div>
  );
}
