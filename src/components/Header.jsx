import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaBars, FaChevronDown } from "react-icons/fa";
import { artistsData } from "../artistdata";

export function Header() {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  // סטייט חדש לשליטה בפתיחה/סגירה של תת-התפריט "הרצאות"
  const [isLecturesSubOpen, setIsLecturesSubOpen] = useState(false);
  const location = useLocation();

  // ===== גלילה למעלה בכל שינוי URL =====
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
    setIsLecturesSubOpen(false);
  }, [location.pathname]);

  // ===== סגירה של התפריט בלחיצה מחוץ =====
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setIsLecturesSubOpen(false);
      }
    };

    if (IsMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [IsMenuOpen]);

  // פונקציה ייעודית לחזרה לראש הדף בלחיצה על הלוגו
  const handleLogoClick = () => {
    setIsMenuOpen(false);
    setIsLecturesSubOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ה-Header מקובע לחלוטין לחלק העליון */}
      <header className="bg-white border-b border-amber-100 fixed top-0 right-0 left-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          
          {/* צד ימין: כפתור התפריט ראשון, ומיד אחריו כותרת האתר */}
          <div className="flex items-center gap-3">
            <button
              ref={buttonRef}
              className="p-2.5 border border-amber-200 bg-amber-50 rounded-xl text-amber-800 hover:bg-amber-100 transition-all shadow-sm"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="תפריט"
            >
              <FaBars size={20} />
            </button>

           <div className="flex items-center gap-1.5 font-heebo text-2xl md:text-3xl font-bold">
  {/* לחצן "אור אביד" -> מוביל לדף הבית */}
  <Link 
    to="/" 
    onClick={handleLogoClick}
    className="text-amber-950 hover:text-amber-800 transition-colors"
  >
    אור אביד
  </Link>

  <span className="text-amber-600 font-normal text-xl">|</span>

  {/* לחצן "הרצאות מוזיקליות" -> מוביל לדף /about-lectures */}
  <Link 
    to="/about-lectures" 
    onClick={handleLogoClick}
    className="text-amber-600 hover:text-amber-800 font-normal text-xl transition-colors"
  >
    הרצאות מוזיקליות
  </Link>
</div>
          </div>

          {/* קישורי יצירת קשר (דסקטופ) */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://wa.me/+972546738697"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-amber-900 font-medium hover:text-green-600 transition-colors"
            >
              <FaWhatsapp className="text-green-500 text-xl" />
              WhatsApp
            </a>

            <a
              href="mailto:oravid85@gmail.com"
              className="flex items-center gap-2 text-amber-900 font-medium hover:text-blue-600 transition-colors"
            >
              <FaEnvelope className="text-blue-500 text-xl" />
              דוא"ל
            </a>
          </div>
        </div>

        {/* ===== תפריט נפתח היררכי ===== */}
        <div className="max-w-5xl mx-auto px-4 relative">
          <div
            ref={menuRef}
            className={`absolute right-4 top-2 z-50 flex flex-col w-64 md:w-72 space-y-1 bg-white border border-amber-100 shadow-2xl rounded-2xl p-3 font-heebo text-base text-amber-900 transform origin-top transition-all duration-300 ease-in-out ${
              IsMenuOpen
                ? "scale-y-100 opacity-100"
                : "scale-y-0 opacity-0 pointer-events-none"
            }`}
          >
            {/* דף הבית */}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full rounded-xl py-2 px-3 text-right hover:bg-amber-50 transition-colors"
            >
              ברוכים הבאים!
            </Link>

            <div className="border-t border-amber-100 my-1"></div>

            {/* רמה ראשונה: על ההרצאות */}
            <Link
              to="/about-lectures"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full rounded-xl py-2 px-3 text-right hover:bg-amber-50 transition-colors"
            >
              מה זה הרצאה מוזיקלית?
            </Link>

            <div className="border-t border-amber-100 my-1"></div>

            {/* רמה ראשונה: הרצאות (עם כפתור פתיחה לרמה שניה) */}
            <div>
              <button
                onClick={() => setIsLecturesSubOpen((prev) => !prev)}
                className="w-full flex items-center justify-between rounded-xl py-2 px-3 text-right hover:bg-amber-50 transition-colors text-amber-950 font-semibold"
              >
                <span>פירוט ההרצאות</span>
                <FaChevronDown
                  size={12}
                  className={`transition-transform duration-200 text-amber-700 ${
                    isLecturesSubOpen ? "rotate-180" : ""
                  }`}
                />
                
              </button>

              {/* רמה שניה: פירוט ההרצאות (נפתח רק כשלוחצים על הרצאות) */}
              {isLecturesSubOpen && (
                <div className="pr-4 mt-1 space-y-1 border-r-2 border-amber-200 mr-2">
                  {artistsData.map((artist) => (
                    <Link
                      key={artist.name}
                      to={`/lectures/${artist.slug}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsLecturesSubOpen(false);
                      }}
                      className="block w-full rounded-xl py-1.5 px-3 text-right hover:bg-amber-50 transition-colors text-sm text-amber-800"
                    >
                      {artist.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-amber-100 my-1"></div>

            {/* רמה ראשונה: עלי */}
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full rounded-xl py-2 px-3 text-right hover:bg-amber-50 transition-colors"
            >
              עלי
            </Link>
          </div>
        </div>
      </header>

      {/* אלמנט ריווח (Spacer) כדי שהתוכן מתחת ל-Header לא ייחתך בגלל ה-fixed */}
      <div className="pt-20"></div>
    </>
  );
}