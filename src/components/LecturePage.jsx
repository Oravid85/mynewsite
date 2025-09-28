import { aristsData } from "../artistdata";

export function LecturePage(props) {
  const lectureData = props.lectureData;
  console.log(lectureData);
  return (
    <div className={lectureData.bgColor}>
      <div>
        <h1 className="font-bold text-4xl">{lectureData.header}</h1>
        <br />
        <br />
        <img src={lectureData.picture} />
        <br />
        <br />
        <h2 className="text-right font-bold text-2xl">על האומן</h2>
        <br />
        <p className="text-justify leading-relaxed whitespace-pre-wrap">
          {lectureData.onartist}
        </p>
        <br />
        <br />
        <h2 className="text-right font-bold text-2xl">על ההרצאה</h2>
        <br />
        <p className="text-justify leading-relaxed whitespace-pre-wrap">
          {lectureData.onlecture}
        </p>
      </div>
    </div>
  );
}
