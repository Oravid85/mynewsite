import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function Header(props) {
  return (
    <header className="bg-amber-100 px-8 py-4 border-b-4 border-amber-600 flex flex-col space-y-1">
      <div className="flex justify-between items-start w-full ">
        <h1 className="font-heebo text-4xl text-amber-900 ml-auto">שם האתר</h1>

        <div className="flex flex-col space-y-2 mr-auto">
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

      <div className="flex items-start space-x-2">
        <button
          className="px-5 py-2 border-2 border-amber-700 bg-amber-600 rounded-sm shadow  p-2  hover:bg-amber-700 font-heebo text-base text-white  hover:scale-105 hover:font-bold transition-all duration-200"
          key="greeting"
          onClick={() => props.setmainview("Greeting")}
        >
          מסך הבית
        </button>

        {props.artistsData.map((artist) => (
          <button
            className="px-5 py-2 border-2 border-amber-700 bg-amber-600 rounded-sm shadow  p-2  hover:bg-amber-700 font-heebo text-base text-white  hover:scale-105 hover:font-bold transition-all duration-200"
            key={artist.name}
            onClick={() => {
              props.setcurrentlecture(artist);
              props.setmainview("LecturePage");
            }}
          >
            {artist.name}
          </button>
        ))}

        <button
          className="px-5 py-2 border-2 border-amber-700 bg-amber-600 rounded-sm shadow  p-2  hover:bg-amber-700 font-heebo text-base text-white  hover:scale-105 hover:font-bold transition-all duration-200"
          key="aboutMe"
          onClick={() => props.setmainview("AboutMe")}
        >
          {props.aboutMe.name}
        </button>
      </div>
    </header>
  );
}
