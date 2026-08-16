import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaBars } from "react-icons/fa";
import { artistsData } from "../artistdata";

export function Header() {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // ===== גלילה למעלה בכל שינוי URL =====
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
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

            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="font-heebo text-2xl md:text-3xl font-bold text-amber-950"
            >
              אור אביד <span className="text-amber-600 font-normal text-xl">| הרצאות</span>
            </Link>
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

        {/* ===== תפריט נפתח ===== */}
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
              מסך הבית
            </Link>

            <div className="border-t border-amber-100 my-1"></div>

            {/* הרצאות */}
            {artistsData.map((artist) => (
              <Link
                key={artist.name}
                to={`/lectures/${artist.slug}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full rounded-xl py-2 px-3 text-right hover:bg-amber-50 transition-colors text-amber-800"
              >
                {artist.name}
              </Link>
            ))}

            <div className="border-t border-amber-100 my-1"></div>

            {/* About Me */}
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