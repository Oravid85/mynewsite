import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LecturePage } from "../components/LecturePage";
import { artistsData } from "./artistdata";
import { aboutMe } from "./aboutme";
import { AboutMe } from "../components/AboutMe";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
export function App() {
  const [currentlecture, setcurrentlecture] = useState("aris-san");
  console.log(currentlecture);
  return (
    <>
      <Header
        artistsData={artistsData}
        aboutMe={aboutMe}
        setcurrentlecture={setcurrentlecture}
        currentlecture={currentlecture}
      />

      {currentlecture === aboutMe ? (
        <AboutMe aboutMe={currentlecture} />
      ) : (
        <LecturePage lectureData={currentlecture} />
      )}

      <Footer />
    </>
  );
}

//<div className="bg-amber-700 opacity-25" ></div>
