import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "../public/vite.svg";
import "./App.css";
import { LecturePage } from "./components/LecturePage";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ContactForm from "./components/form.jsx";
import FontClass from "./components/FontClass";

import { artistsData } from "./artistdata";
import { aboutMe } from "./aboutme";
import MyEmojies from "./components/Emojies";

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

      {/* <FontClass /> */}

      {currentlecture === aboutMe ? (
        <AboutMe />
      ) : (
        <LecturePage lectureData={currentlecture} />
      )}

      <ContactForm />

      <Footer />
    </>
  );
}

//<div className="bg-amber-700 opacity-25" ></div>
