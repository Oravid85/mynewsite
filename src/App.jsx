import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import { TestPage } from "./pages/TestPage";

import { LecturePage } from "./components/LecturePage";
import { AboutMe } from "./components/AboutMe.jsx";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Greeting } from "./components/Greeting.jsx";
import { BuisnessSection } from "./components/BuisnessSection.jsx";

import { artistsData } from "./artistdata";
import { aboutMe } from "./oravid.js";
import { lecturesCom } from "./lecturesrecom.js";

// ===== IMPORTS שלא נוגעים להם =====
import ContactForm from "./components/form.jsx";
import FontClass from "./components/FontClass";
import RecomCar from "./components/RecomCar";
import "./App.css";
import MyEmojies from "./components/Emojies";
import ScrollToTop from "./components/ScrollToTop.jsx";

export function App() {
  return (
    <>
      <ScrollToTop /> {/* ===== 2️⃣ HEADER ===== */}
      {/* השינוי: אין צורך ב-state של mainView/currentLecture */}
      <Header artistsData={artistsData} aboutMe={aboutMe} />
      {/* ===== 3️⃣ ROUTES ===== */}
      <Routes>
        {/* דף הבית */}
        <Route path="/" element={<Greeting />} />

        {/* דף About Me */}
        <Route path="/about" element={<AboutMe aboutMe={aboutMe} />} />

        {/* דף הרצאה - LecturePage מזהה את הרצאה לפי slug */}
        <Route path="/lectures/:slug" element={<LecturePage />} />

        {/* דף Not Found */}
        <Route path="/404" element={<NotFoundPage />} />

        {/* דף Test */}
        <Route path="/test" element={<TestPage />} />

        {/* כל כתובת אחרת מפנה ל-404 */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      {/* ===== 4️⃣ BuisnessSection ו-Footer ===== */}
      {/* השינוי: אין צורך לשלוח state מה-App.jsx */}
      <BuisnessSection
        artistsData={artistsData}
        aboutMe={aboutMe}
        lecturesCom={lecturesCom}
      />
      <Footer />
    </>
  );
}
