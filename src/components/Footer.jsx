import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white border-t border-amber-100 py-12 px-6 md:px-12 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col items-center md:items-start text-right">
        
        {/* כותרת קטנה ועדינה */}
        <h3 className="font-medium mb-4 text-xl tracking-wide text-amber-950/80">
          לפרטים נוספים
        </h3>

        {/* קישורים בעיצוב טקסטואלי נקי */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
          <a
            href="https://wa.me/+972546738697"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg flex items-center gap-2.5 text-amber-900 hover:text-green-600 transition-colors"
          >
            <FaWhatsapp className="text-green-500 text-xl" />
            פנו אלי ב־ WhatsApp
          </a>

          <a
            href="mailto:oravid85@gmail.com"
            className="text-lg flex items-center gap-2.5 text-amber-900 hover:text-blue-600 transition-colors"
          >
            <FaEnvelope className="text-blue-500 text-xl" />
            אפשר גם בדוא"ל
          </a>
        </div>
      </div>
    </footer>
  );
}