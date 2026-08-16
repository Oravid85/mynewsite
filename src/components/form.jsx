import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm({ lectureData, aboutMe, mainview }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telNum, setTelNum] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mdkwylbb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email: email,
          message: `טלפון: ${telNum}`,
          replyto: email, // עוזר ל-Formspree לזהות את שולח ההודעה
        }),
      });

      if (response.ok) {
        const scriptUrl = "https://script.google.com/macros/s/AKfycbyj20kN480ADPUbLOpbV4MCFvq-Bcnf8AUIsfXpjI5JHXroClcI-glYIAqfvcbDwQ/exec"; 
        
        await fetch(scriptUrl, {
          method: "POST",
          body: new URLSearchParams({
            name: name,
            email: email,
            phone: telNum,
            type: "פניה מהאתר"
          })
        });
        alert("הטופס נשלח בהצלחה!");
        setName("");
        setEmail("");
        setTelNum("");
      } else {
        navigate("/404");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      navigate("/404");
    }
  };

  return (
    <div className="w-full flex justify-center h-full">
      <form
        onSubmit={handleSubmit}
        className="justify-center h-full flex flex-col items-center space-y-4 w-[90%] max-w-sm bg-gradient-to-b from-amber-50/70 to-amber-100/40 border border-amber-200/60 px-6 py-8 rounded-3xl shadow-md md:mr-auto md:w-[400px]"
      >
        <h2 className="text-center text-xl font-noto font-bold text-amber-900 mb-2 leading-relaxed">
          השאירו פרטים ואחזור אליכם בהקדם!
        </h2>

        <input
          type="text"
          placeholder="שם מלא"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          className="w-full bg-white border border-amber-200/80 focus:border-amber-600 focus:outline-none p-3 rounded-2xl text-center shadow-xs text-gray-800 placeholder-gray-400 transition-all"
          required
        />
        <input
          type="email"
          placeholder='דוא"ל'
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className="w-full bg-white border border-amber-200/80 focus:border-amber-600 focus:outline-none p-3 rounded-2xl text-center shadow-xs text-gray-800 placeholder-gray-400 transition-all"
          required
        />
        <input
          type="tel"
          placeholder="מספר טלפון"
          value={telNum}
          onChange={(ev) => setTelNum(ev.target.value)}
          className="w-full bg-white border border-amber-200/80 focus:border-amber-600 focus:outline-none p-3 rounded-2xl text-center shadow-xs text-gray-800 placeholder-gray-400 transition-all"
        />

        <button
          type="submit"
          className="inline-flex items-center justify-center px-8 py-2.5 mt-2 border-2 border-amber-600 bg-white hover:bg-amber-50 text-amber-900 font-semibold rounded-2xl shadow-sm transition-all duration-300 active:scale-95 self-center text-base"
        >
          שלח
        </button>
      </form>
    </div>
  );
}