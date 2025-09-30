import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function Footer(props) {
  return (
    <footer className="bg-amber-100 px-8 py-6 border-t-5 border-amber-600 ">
      <h3 className="text-right text-3xl font-semibold text-amber-900 mb-4 mt-2 ">
        לפרטים נוספים
      </h3>

      <a
        href="https://wa.me/+972546738697"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-3 flex items-center text-amber-900 hover:text-green-700 hover:font-bold transition-colors"
      >
        <FaWhatsapp className="text-right text-green-500 mr-2 ml-2 mb-1.5 text-2xl " />
        פנו אלי ב־ WhatsApp
      </a>

      <a
        href="mailto:oravid85@gmail.com"
        className="flex items-center text-amber-900 hover:text-blue-700 hover:font-bold transition-colors"
      >
        <FaEnvelope className="text-blue-500 mr-3 ml-2 text-2xl" />
        אפשר גם ב-דוא"ל
      </a>
    </footer>
  );
}
