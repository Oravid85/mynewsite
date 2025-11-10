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
    <div className={` my-4 w-full flex justify-center`}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4 w-[90%] max-w-sm bg-amber-100 px-6 py-6 rounded-2xl shadow-lg mb-6 md:mr-auto md:w-[400px]"
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
          required
        />
        <input
          type="email"
          placeholder='דוא"ל'
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className="bg-gray-200 border-2 border-amber-700 p-2 rounded-2xl text-center"
          required
        />
        <input
          type="tel"
          placeholder="מספר טלפון"
          value={telNum}
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
