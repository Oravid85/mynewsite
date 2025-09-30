import { aboutMe } from "/src/aboutme";

export function AboutMe(props) {
  const MyData = props.aboutMe;
  console.log(MyData);

  return (
    <div className={aboutMe.bgColor}>
      <div className="mb-80">
        <h1 className="flex font-semibold text-4xl mt-6">{aboutMe.header}</h1>
        <br />

        <img
          dir="ltr"
          className="w-3/8 h-auto float-left m-4 mr-10"
          src={aboutMe.picture}
        />

        <br />
        <h2 className="text-right font-semibold text-3xl m-4">עלי</h2>

        <p className="text-justify leading-relaxed whitespace-pre-wrap m-4">
          {aboutMe.onartist}
        </p>
        <br />
        <br />
        <h2 className="text-right font-semibold text-3xl m-4">ממליצים</h2>

        <p className="text-justify leading-relaxed whitespace-pre-wrap m-4">
          {aboutMe.recomendations}
        </p>
      </div>
      <br />
    </div>
  );
}
