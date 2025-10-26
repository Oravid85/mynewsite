import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import { LecturePage } from "./components/LecturePage";
import { AboutMe } from "./components/aboutMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ContactForm from "./components/form.jsx";
import FontClass from "./components/FontClass";
import { FormspreeProvider } from "@formspree/react";
import { Greeting } from "./components/greeting.jsx";
import RecommendationCarousel from "./components/RecommendationCarousel";
import RecomCar from "./components/RecomCar";

import { artistsData } from "./artistdata";
import { aboutMe } from "./oravid.js";
import { lecturesCom } from "./lecturesrecom";

import NotFoundPage from "./pages/NotFoundPage.jsx";
import { TestPage } from "./pages/TestPage.jsx";

export function App() {
  const [currentLecture, setCurrentLecture] = useState(null);
  console.log("🐱", currentLecture);

  const [mainView, setMainView] = useState("Greeting");
  // console.log(mainView);
  console.log("currentLecture:", currentLecture);
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

            <div className="flex flex-col md:flex-row-reverse">
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
