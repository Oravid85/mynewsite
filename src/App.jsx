import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import NotFoundPage from "./pages/NotFoundPage";
import { TestPage } from "./pages/TestPage";

import { LecturePage } from "./components/LecturePage";
import { AboutMe } from "./components/aboutMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ContactForm from "./components/form.jsx";
import FontClass from "./components/FontClass";
import RecomCar from "./components/RecomCar";

import { lecturesCom } from "./lecturesrecom.js";
import { artistsData } from "./artistdata";
import { aboutMe } from "./oravid.js";
import MyEmojies from "./components/Emojies";
import { Greeting } from "./components/greeting.jsx";

export function App() {
  const [currentLecture, setCurrentLecture] = useState(null);
  console.log("🐱", currentLecture);

  const [mainView, setMainView] = useState("Greeting");
  // console.log(mainView);
  console.log("currentLecture:", currentLecture);

  const bgcolor =
    mainView === "Greeting"
      ? "bg-white"
      : mainView === "AboutMe"
      ? aboutMe.bgColor
      : currentLecture.bgColor;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header
              artistsData={artistsData}
              aboutMe={aboutMe}
              setCurrentLecture={setCurrentLecture}
              setMainView={setMainView}
              currentLecture={currentLecture}
            />
            {/* <FontClass /> */}
            {mainView === "Greeting" && (
              <Greeting
                setMainView={setMainView}
                setCurrentLecture={setCurrentLecture}
              />
            )}
            {mainView === "AboutMe" && <AboutMe aboutMe={aboutMe} />}
            {mainView === "LecturePage" && (
              <LecturePage lectureData={currentLecture} />
            )}
            <div className="w-full flex flex-col items-center">
              <div className={`${bgcolor}   flex flex-col md:flex-row-reverse`}>
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
              <button
                onClick={() => {
                  setMainView("Greeting");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="  w-40 border-2 border-amber-700 bg-amber-600 rounded-2xl shadow  p-2 m-2  font-heebo text-base text-white  hover:bg-amber-700 hover:font-bold transition-all duration-200"
              >
                הרצאות נוספות
              </button>
            </div>
            <Footer />
          </>
        }
      />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
