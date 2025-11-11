import ContactForm from "./form.jsx";
import RecomCar from "./RecomCar";

export function BuisnessSection({
  mainView,
  currentLecture,
  aboutMe,
  lecturesCom,
  setMainView,
}) {
  const bgcolor =
    mainView === "Greeting"
      ? "bg-white"
      : mainView === "AboutMe"
      ? aboutMe?.bgColor || "bg-white"
      : currentLecture?.bgColor || "bg-white";

  return (
    <div className="w-full flex flex-col items-center">
      <div className={`${bgcolor} w-full `}>
        <div className="flex flex-col justify-center md:flex-row-reverse md:ml-9">
          <ContactForm
            lectureData={currentLecture}
            aboutMe={aboutMe}
            mainView={mainView}
          />

          {mainView === "LecturePage" && currentLecture && (
            <RecomCar
              lectureData={currentLecture}
              aboutMe={aboutMe}
              mainView={mainView}
              items={lecturesCom.filter(
                (item) => item.artist === currentLecture.name
              )}
            />
          )}
        </div>
      </div>
      <button
        onClick={() => {
          setMainView("Greeting");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="w-40 border-2 border-amber-700 bg-amber-600 rounded-2xl shadow p-2 m-2 font-heebo text-base text-white hover:bg-amber-700 hover:font-bold transition-all duration-200"
      >
        הרצאות נוספות
      </button>
    </div>
  );
}
