import { useNavigate } from "react-router-dom";
import { lecturesCom } from "../lecturesrecom";
import RecomCar from "../components/RecomCar";
export const TestPage = () => {
  return (
    <div className=" bg-red-400 h-screen w-screen flex justify-center items-center">
      <RecomCar
        lectureData={null}
        aboutMe={null}
        mainview={"Greeting"}
        items={lecturesCom.filter((item) => item.artist)}
      />
    </div>
  );
};
