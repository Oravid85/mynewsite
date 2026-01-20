import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaBars } from "react-icons/fa";
import { artistsData } from "../artistdata";

export function Header() {
  const menuRef = useRef(null);
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  // ===== גלילה למעלה בכל שינוי URL =====
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false); // סוגר את התפריט הסלולרי אם פתוח
  }, [location.pathname]);

  // ===== סגירה של התפריט בלחיצה מחוץ =====
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (IsMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [IsMenuOpen]);

  return (
    <header className="bg-amber-100 px-2 py-4 border-b-4 border-amber-600 flex flex-col space-y-1 md:px-8">
      <div className="text-center md:flex justify-between items-start w-full">
        <h1 className="font-heebo text-4xl text-amber-900 ml-auto">
          אור אביד | הרצאות
        </h1>

        <div className="hidden md:flex flex-col space-y-2 mr-auto">
          <a
            href="https://wa.me/+972546738697"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl font-semibold text-amber-900 hover:text-green-700 transition-colors"
          >
            <FaWhatsapp className="text-green-500 ml-3 text-2xl" />
            WhatsApp
          </a>

          <a
            href="mailto:oravid85@gmail.com"
            className="flex items-center text-xl font-semibold text-amber-900 hover:text-blue-700 transition-colors"
          >
            <FaEnvelope className="text-blue-500 ml-3 text-2xl" />
            דוא"ל
          </a>
        </div>
      </div>

      {/* ===== תפריט סלולרי ===== */}
      <div>
        <button
          className="py-2 px-2 border-2 border-amber-700 bg-amber-100 rounded-sm shadow hover:scale-105 transition-all duration-200"
          onClick={() => setIsMenuOpen(!IsMenuOpen)}
        >
          <FaBars />
        </button>

        <div
          ref={menuRef}
          className={`absolute right-2 left-2 z-50 flex flex-col w-2/5 space-y-2 items-start border-2 border-amber-700 bg-amber-100 shadow p-2 font-heebo text-base text-amber-600 transform origin-top transition-all duration-300 ease-in-out ${
            IsMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          {/* דף הבית */}
          <Link
            to="/"
            className="block w-full border-b-2 border-amber-600 py-2 px-3 text-right"
          >
            מסך הבית
          </Link>

          {/* הרצאות */}
          {artistsData.map((artist) => (
            <Link
              key={artist.name}
              to={`/lectures/${artist.slug}`}
              className="block w-full border-b-2 border-amber-600 py-1 px-3 text-right"
            >
              {artist.name}
            </Link>
          ))}

          {/* About Me */}
          <Link
            to="/about"
            className="block w-full border-b-0 border-amber-600 py-1 px-3 text-right"
          >
            עלי
          </Link>
        </div>
      </div>
    </header>
  );
}
