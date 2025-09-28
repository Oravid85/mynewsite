import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function Footer(props) {
  return (
    <footer className="bg-black ">
      <br />
      <h3 className="text-right font-bold text-white mt-2 mr-3">
        לפרטים נוספים
      </h3>
      <br />

      <a
        href="https://wa.me/+972546738697"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white"
      >
        <FaWhatsapp className="text-right text-green-500 mr-10 ml-2 mb-1.5" />
        פנו אלי ב־ WhatsApp
      </a>

      <a
        href="mailto:oravid85@gmail.com"
        className="flex items-center text-white"
      >
        <FaEnvelope className="text-blue-500 mr-10 ml-2" />
        אפשר גם ב-דוא"ל
      </a>
      <br />
      <br />
    </footer>
  );
}
