import { artistsData } from "./artistdata.js";

const getArtistName = (name) => artistsData.find((a) => a.name === name)?.name;

export const lecturesCom = [
  // אריס סאן
  {
    artist: getArtistName("אריס סאן"),
    text: "ההרצאה של אריס סאן פתחה לי את העיניים! סיפור חיים מדהים.",
    author: "יוסי, תל אביב",
  },
  {
    artist: getArtistName("אריס סאן"),
    text: "אהבתי את הדרך שבה אריס שילב סיפורים עם מוזיקה חיה.",
    author: "נועה, חיפה",
  },
  {
    artist: getArtistName("אריס סאן"),
    text: "הרצאה מרתקת ומלאת השראה. ממליץ בחום!",
    author: "דנה, ירושלים",
  },

  // ביאליק
  {
    artist: getArtistName("ביאליק"),
    text: "ביאליק הצליח להפוך את השירה שלו לחוויה חיה ומרגשת.",
    author: "מיכל, ראשון לציון",
  },
  {
    artist: getArtistName("ביאליק"),
    text: "שמעתי הרבה על ביאליק, אבל הרצאה זו הייתה חוויה אחרת לגמרי.",
    author: "רוני, חיפה",
  },
  {
    artist: getArtistName("ביאליק"),
    text: "מומלץ לכל חובבי ספרות ומוזיקה – הרצאה מקצועית ומעניינת.",
    author: "עמית, תל אביב",
  },

  // פוליקר
  {
    artist: getArtistName("פוליקר"),
    text: "פוליקר שיתף אותנו בסיפורים האישיים שמאחורי השירים – מעולה!",
    author: "ליאורה, ירושלים",
  },
  {
    artist: getArtistName("פוליקר"),
    text: "מוזיקה חיה, סיפורים מצחיקים ומרגשים – הרצאה שלא שוכחים.",
    author: "גילי, תל אביב",
  },
  {
    artist: getArtistName("פוליקר"),
    text: "החיבור בין המילים למוזיקה נתן לי השראה אמיתית.",
    author: "דוד, חיפה",
  },
];
