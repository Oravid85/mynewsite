import { aristsData } from "../artistdata";

export function LecturePage(props) {
  const lectureData = props.lectureData;
  console.log(lectureData);
  return (
    <div>
      <h1>{lectureData.header}</h1>

      <h2 className="text-center">על ההרצאה</h2>
      <p className="text-justify">
        אריס סאן, הוא אחד מאבות המוזיקה והתרבות הישראלית וחלוץ המוזיקה
        הים-תיכונית בארץ.
      </p>
      <p className="text-justify">
        מי שהגיע ליפו כנער יווני בן17 והתחיל לנגן גיטרה במועדונים, והפך לאחת
        מאושיות התרבות הגדולות ביותר בישראל בשנות ה-60 וה-70, 'הוליד' דורות של
        מוזיקאים חדשים שהביאו את הקולות והניחוחות של הים התיכון והמזרח לקדמת
        הבמה בישראל.
      </p>

      <p className="text-justify">
        שעה של סיפורים, סרטונים, שירים, מוזיקה חיה ותמונות שבה נכיר את אריס סאן,
        דמותו, הסיפור שלו, מאיפה בא, ולאן הלך? וננסה להבין איך הצליח ב-13 שנים
        להשאיר חותם על ישראל, ולהפוך לפרק בסיפור שלה, שמלווה אותה עד היום ונוכח
        כמעט בכל פינה.
      </p>
    </div>
  );
}
