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
import { FormspreeProvider } from "@formspree/react";

import { artistsData } from "./artistdata";
import { aboutMe } from "./aboutme";
import MyEmojies from "./components/Emojies";
import { Greeting } from "./components/greeting.jsx";
import RecommendationCarousel from "./components/RecommendationCarousel";

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

      <section className="p-1 my-8 w-[500px]  flex  bg-amber-800 ">
        <div className={`${aboutMe.bgColor} `}>
          {/* <h1 className="justify-start flex font-semibold text-3xl mt-6 mb-2 font-assistant  text-amber-800 mr-2">
            {aboutMe.header}
          </h1>
          <div className="flex-col ">
            <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
              עלי
            </h2> */}

          {/* <p className="text-justify leading-relaxed whitespace-pre-wrap m-4 mb-10 font-alef text-base text-gray-800">
              {aboutMe.onartist}
            </p>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <h2 className="text-right font-bold text-2xl m-4 font-noto text-amber-700">
                ממליצים
              </h2> */}
          <div className="w-[500px] flex justify-center">
            <RecommendationCarousel recommendations={aboutMe.recommendations} />
          </div>
        </div>
        {/* </div>
        </div> */}
        {/* <div className="w-fit flex items-center bg-gray-200">
          <img
            className="w-[80%] h-[80%] md:w-120 md:h-auto m-4 mr-10 mb-10"
            src={aboutMe.picture}
          />
        </div> */}
      </section>

      <Footer />
    </>
  );
}
