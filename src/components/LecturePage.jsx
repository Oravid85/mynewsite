import { artistsData } from "/src/artistdata";

export function LecturePage(props) {
  const lectureData = props.lectureData;
  console.log(lectureData);

  return (
    <div className={`${lectureData.bgColor} min-h-screen`}>
      <h1 className="flex font-semibold text-3xl mt-6 mb-2 font-assistant  text-amber-800 mr-2">
        {lectureData.header}
      </h1>

      <div className="flex flex-col-reverse md:flex md:flex-row-reverse md:space-x-8 md:mt-20">
        <img
          className="w-[80%] h-[80%] md:w-115 md:h-auto m-4 mr-10 mb-10"
          src={lectureData.picture}
        />
        <div className="flex-col ">
          <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
            על האומן
          </h2>

          <p className="text-justify leading-relaxed whitespace-pre-wrap m-4 mb-10 font-alef text-base text-gray-800">
            {lectureData.onartist}
          </p>

          <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
            על ההרצאה
          </h2>

          <p className="text-justify leading-relaxed whitespace-pre-wrap m-4 font-alef text-base text-gray-800">
            {lectureData.onlecture}
          </p>
        </div>
      </div>
    </div>
  );
}
