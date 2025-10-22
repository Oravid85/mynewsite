import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "../public/vite.svg";
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
import { aboutMe } from "./aboutme";
import { lecturesCom } from "./lecturesrecom";

import NotFoundPage from "./pages/NotFoundPage.jsx";

export function App() {
  const [currentlecture, setcurrentlecture] = useState("אריס סאן");
  // console.log(currentlecture);

  const [mainview, setmainview] = useState("Greeting");
  // console.log(mainview);
  console.log("currentlecture:", currentlecture);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header
              artistsData={artistsData}
              aboutMe={aboutMe}
              setcurrentlecture={setcurrentlecture}
              setmainview={setmainview}
              currentlecture={currentlecture}
            />
            {/* <FontClass /> */}
            {mainview === "Greeting" && (
              <Greeting
                setcurrentlecture={setcurrentlecture}
                setmainview={setmainview}
              />
            )}
            {mainview === "AboutMe" && <AboutMe />}
            {mainview === "LecturePage" && (
              <LecturePage lectureData={currentlecture} />
            )}

            <div className="flex flex-col md:flex-row-reverse">
              <ContactForm
                lectureData={currentlecture}
                aboutMe={aboutMe}
                mainview={mainview}
              />

              {mainview === "LecturePage" && (
                <RecomCar
                  items={lecturesCom.filter(
                    (item) => item.artist === currentlecture.name
                  )}
                />
              )}
            </div>
            <Footer />
          </>
        }
      />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
