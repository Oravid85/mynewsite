import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center group">
      {/* כפתור הוואטסאפ */}
      <a
        href="https://wa.me/+972546738697?text=היי%20אור,%20אשמח%20לפרטים%20נוספים%20על%20ההרצאות"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="פנו אלי בווטסאפ"
        className="bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* בועית הטקסט - מופיעה עכשיו מימין לכפתור בדסקטופ */}
      <div className="absolute left-full mr-3 bg-white text-amber-950 font-medium px-3.5 py-2 rounded-2xl shadow-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-amber-100 hidden md:block">
        דברו איתי בוואטסאפ
      </div>
    </div>
  );
}