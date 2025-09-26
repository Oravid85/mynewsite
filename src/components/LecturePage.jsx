import { aristsData } from "../artistdata";

export function LecturePage(props) {
  const lectureData = props.lectureData;
  console.log(lectureData);
  return (
    <div>
      <h1>{lectureData.header}</h1>
      <br />
      <br />
      <img src={lectureData.picture} />
      <br />
      <br />
      <h2 className="text-center">על האומן</h2>
      <br />
      <p className="text-justify">{lectureData.onartist}</p>
      <br />
      <br />
      <h2>על ההרצאה</h2>
      <br />
      <p className="text-justify">{lectureData.onlecture}</p>
    </div>
  );
}
