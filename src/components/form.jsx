import { useState } from "react";
import { aboutMe } from "../aboutme";
import { AboutMe } from "./AboutMe";

export default function ContactForm({ lectureData, aboutMe, mainview }) {
  const bgcolor =
    mainview === "Greeting"
      ? "bg-white"
      : mainview === "AboutMe"
      ? aboutMe.bgColor
      : lectureData.bgColor;

  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [TelNum, setTelNum] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log({ name, Email, TelNum });
    alert("הטופס נשלח!");
  };

  return (
    <div className={`${bgcolor} w-full flex justify-center`}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4 w-[90%] max-w-sm bg-amber-100 px-6 py-6 rounded-2xl shadow-lg mb-6 md:mr-auto md:w-[400px] "
      >
        <h2 className="text-center text-2xl font-noto font-semibold text-amber-700">
          השאירו פרטים ואחזור אליכם בהקדם!
        </h2>

        <input
          type="text"
          placeholder="שם מלא"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          className="bg-gray-200 border-2 border-amber-700 p-2 rounded-2xl text-center"
        />
        <input
          type="email"
          placeholder='דוא"ל'
          value={Email}
          onChange={(ev) => setEmail(ev.target.value)}
          className="bg-gray-200 border-2 border-amber-700 p-2 rounded-2xl text-center"
        />
        <input
          type="tel"
          placeholder="מספר טלפון"
          value={TelNum}
          onChange={(ev) => setTelNum(ev.target.value)}
          className="bg-gray-200 border-2 border-amber-700 p-2 rounded-2xl text-center"
        />

        <button
          type="submit"
          className="w-24 bg-amber-600 text-white font-heebo text-base py-2 px-4 rounded-2xl border-2 border-amber-700 hover:bg-amber-700 self-center"
        >
          שלח
        </button>
      </form>
    </div>
  );
}
