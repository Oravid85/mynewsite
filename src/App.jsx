import { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import NotFoundPage from "./pages/NotFoundPage";
import { TestPage } from "./pages/TestPage";

import { LecturePage } from "./components/LecturePage";
import { AboutMe } from "./components/AboutMe.jsx";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ContactForm from "./components/form.jsx";
import FontClass from "./components/FontClass";
import RecomCar from "./components/RecomCar";

import { lecturesCom } from "./lecturesrecom.js";
import { artistsData } from "./artistdata";
import { aboutMe } from "./oravid.js";
import MyEmojies from "./components/Emojies";
import { Greeting } from "./components/Greeting.jsx";
import { BuisnessSection } from "./components/BuisnessSection.jsx";

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
    <Router>
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

              <BuisnessSection
                mainView={mainView}
                currentLecture={currentLecture}
                aboutMe={aboutMe}
                lecturesCom={lecturesCom}
                setMainView={setMainView}
              />

              <Footer />
            </>
          }
        />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}
