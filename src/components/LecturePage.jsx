import { artistsData } from "/src/artistdata";

export function LecturePage(props) {
  const lectureData = props.lectureData;
  console.log(lectureData);

  return (
    <div className={lectureData.bgColor}>
      <div className="mb-80">
        <h1 className="font-bold text-4xl">{lectureData.header}</h1>
        <br />

        <img
          dir="ltr"
          className="w-3/8 h-auto float-left m-4 mr-10"
          src={lectureData.picture}
        />

        <br />
        <h2 className="text-right font-bold text-2xl m-4">על האומן</h2>

        <p className="text-justify leading-relaxed whitespace-pre-wrap m-4">
          {lectureData.onartist}
        </p>
        <br />
        <br />
        <h2 className="text-right font-bold text-2xl m-4">על ההרצאה</h2>

        <p className="text-justify leading-relaxed whitespace-pre-wrap m-4">
          {lectureData.onlecture}
        </p>
      </div>
      <br />
    </div>
  );
}
