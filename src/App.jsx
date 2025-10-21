import { useState } from "react";
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

import { artistsData } from "./artistdata";
import { aboutMe } from "./aboutme";
import MyEmojies from "./components/Emojies";
import { Greeting } from "./components/greeting.jsx";
import RecommendationCarousel from "./components/RecommendationCarousel";
import RecomCar from "./components/RecomCar";

export function App() {
  const [currentlecture, setcurrentlecture] = useState("aris-san");
  // console.log(currentlecture);

  const [mainview, setmainview] = useState("Greeting");
  console.log(mainview);

  return (
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

      <ContactForm
        lectureData={currentlecture}
        aboutMe={aboutMe}
        mainview={mainview}
      />
      <RecomCar items={aboutMe.recommendations} />

      <Footer />
    </>
  );
}
