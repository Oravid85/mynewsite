import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-amber-100 px-8 py-6 border-t-[5px] border-amber-600 ">
      <h3 className="text-right font-semibold mb-4 mt-2 text-3xl font-assistant  text-amber-800 ">
        לפרטים נוספים
      </h3>
      <div className="flex flex-col items-center md:items-start">
        <a
          href="https://wa.me/+972546738697"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-2xl mb-3 flex items-center text-amber-900 hover:text-green-700 hover:font-bold transition-colors md:text-xl"
        >
          <FaWhatsapp className=" text-green-500 mx-2 mb-1.5 text-3xl md:text-2xl " />
          פנו אלי ב־ WhatsApp
        </a>

        <a
          href="mailto:oravid85@gmail.com"
          className="text-2xl flex items-center text-amber-900 hover:text-blue-700 hover:font-bold transition-colors md:text-xl"
        >
          <FaEnvelope className="text-blue-500 mx-2 text-3xl md:text-2xl" />
          אפשר גם ב-דוא"ל
        </a>
      </div>
    </footer>
  );
}
