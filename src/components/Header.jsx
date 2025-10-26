import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaBars } from "react-icons/fa";
import { artistsData } from "../artistdata";

export function Header(props) {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuClick = (mainView, currentLecture) => {
    setIsMenuOpen(false);
    props.setCurrentLecture(currentLecture);
    props.setMainView(mainView);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="bg-amber-100 px-2 py-4 border-b-4 border-amber-600 flex flex-col space-y-1 md:px-8">
      <div className="text-center md:flex justify-between items-start w-full ">
        <h1 className="font-heebo text-4xl text-amber-900 ml-auto">
          אור אביד | הרצאות{" "}
        </h1>

        <div className="hidden md:flex flex-col space-y-2 mr-auto">
          <a
            href="https://wa.me/+972546738697"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-1xl font-semibold text-amber-900 hover:text-green-700 transition-colors"
          >
            <FaWhatsapp className="text-green-500 ml-3 text-2xl" />
            WhatsApp
          </a>

          <a
            href="mailto:oravid85@gmail.com"
            className="flex items-center text-1xl font-semibold text-amber-900 hover:text-blue-700 transition-colors"
          >
            <FaEnvelope className="text-blue-500 ml-3 text-2xl" />
            דוא"ל
          </a>
        </div>
      </div>
      <div>
        <button
          className="md:hidden py-2 px-2  border-2 border-amber-700 bg-amber-100 rounded-sm shadow  p-2  hover: font-heebo text-base text-amber-700  hover:scale-105 hover:font-bold transition-all duration-200"
          key="המבורגר"
          onClick={() => setIsMenuOpen(!IsMenuOpen)}
        >
          <FaBars />
        </button>
        <div
          className={`absolute right-2 left-2 z-50 flex flex-col  w-2/5 space-y-2 items-start border-2 border-amber-700 bg-amber-100 shadow p-2 font-heebo text-base text-amber-600 md:hidden
        transform origin-top transition-all duration-300 ease-in-out
  ${
    IsMenuOpen
      ? "scale-y-100 opacity-100"
      : "scale-y-0 opacity-0 pointer-events-none"
  }`}
        >
          <button
            onClick={() =>
              handleMobileMenuClick(() => props.setMainView("Greeting"))
            }
            className="block w-full border-b-2 border-amber-600 py-2 px-3 text-right"
          >
            מסך הבית
          </button>

          {props.artistsData.map((artist) => (
            <button
              className="block w-full border-b-2 border-amber-600 py-1 px-3 text-right"
              key={artist.name}
              onClick={() => handleMobileMenuClick("LecturePage", artist)}
            >
              {artist.name}
            </button>
          ))}

          <button
            onClick={() => handleMobileMenuClick("AboutMe")}
            className="block w-full border-b-0 border-amber-600 py-1 px-3 text-right"
          >
            עלי
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-row space-x-2 items-start">
        <button
          className="py-1 px-5  border-2 border-amber-700 bg-amber-600 rounded-sm shadow  p-2  hover:bg-amber-700 font-heebo text-base text-white  hover:scale-105 hover:font-bold transition-all duration-200 md:py-2"
          key="greeting"
          onClick={() => handleMobileMenuClick("Greeting")}
        >
          מסך הבית
        </button>

        {props.artistsData.map((artist) => (
          <button
            className="hidden md:flex px-5 py-2 border-2 border-amber-700 bg-amber-600 rounded-sm shadow p-2  hover:bg-amber-700 font-heebo text-base text-white hover:scale-105 hover:font-bold transition-all duration-200"
            key={artist.name}
            onClick={() => {
              props.setCurrentLecture(artist);
              props.setMainView("LecturePage");
            }}
          >
            {artist.name}
          </button>
        ))}
        <button
          className="hidden md:flex px-5 py-2 border-2 border-amber-700 bg-amber-600 rounded-sm shadow  p-2  hover:bg-amber-700 font-heebo text-base text-white  hover:scale-105 hover:font-bold transition-all duration-200"
          key="aboutMe"
          onClick={() => props.setMainView("AboutMe")}
        >
          {props.aboutMe.name}
        </button>
      </div>
    </header>
  );
}
