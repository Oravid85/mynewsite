import { useNavigate } from "react-router-dom";
import RecomCar from "../components/RecomCar";
export const TestPage = () => {
  return (
    <div className=" bg-red-400 h-screen w-screen flex justify-center items-center">
      <RecomCar
        lectureData={"אריס סאן"}
        aboutMe={aboutMe}
        mainview={"Greeting"}
        items={[
          {
            name: "אריס סאן",
            picture:
              "https://images.cdn-files-a.com/uploads/6918488/2000_65c646aa59e06.jpg",
            header: "הוא לא היה איש חכם, אין מה לעשות",
            onartist: `אריס סאן, הוא אחד מאבות המוזיקה והתרבות הישראלית וחלוץ המוזיקה הים-תיכונית בארץ.
מי שהגיע ליפו כנער יווני בן 17 והתחיל לנגן גיטרה במועדונים, והפך לאחת מאושיות התרבות הגדולות ביותר בישראל בשנות ה-60 וה-70, 
'הוליד' דורות של מוזיקאים חדשים שהביאו את הקולות והניחוחות של הים התיכון והמזרח לקדמת הבמה בישראל.`,
            onlecture: `בשעה של סיפורים, סרטונים, שירים, מוזיקה חיה ותמונות ננסה להכיר את אריס סאן:
דמותו, הסיפור שלו, מאיפה בא, ולאן הלך? 
וננסה להבין יחד איך הצליח תוך 13 שנים בלבד להשאיר חותם על מדינת ישראל, ולכתוב פרק משמעותי בסיפור שלה, שמלווה את כולנו עד היום ונוכח כמעט בכל פינה.`,

            bgColor: "bg-amber-50 ",
          },
        ]}
      />
    </div>
  );
};
