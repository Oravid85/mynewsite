import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LecturePage } from "./components/LecturePage";
import { aristsData } from "./artistdata";

export function App() {
  const [currentlecture, setcurrentlecture] = useState("aris-san");
  console.log(currentlecture);
  return (
    <div>
      {aristsData.map((artist) => {
        return (
          <button
            className="p-4 bg-amber-200 rounded-2xl mx-4"
            key={artist.name}
            onClick={() => {
              setcurrentlecture(artist);
            }}
          >
            {artist.name}
          </button>
        );
      })}

      <br />
      <br />
      <LecturePage lectureData={currentlecture} />
    </div>
  );
}
