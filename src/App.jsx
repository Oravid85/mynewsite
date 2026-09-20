import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation, // <-- הוספנו את זה
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

import ContactForm from "./components/form.jsx";
import FontClass from "./components/FontClass";
import RecomCar from "./components/RecomCar";
import "./App.css";
import MyEmojies from "./components/Emojies";
import ScrollToTop from "./components/ScrollToTop.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";

export function App() {
  const location = useLocation(); // <-- מקבלים את המיקום הנוכחי

  return (
    <>
      <ScrollToTop />
      <Header artistsData={artistsData} aboutMe={aboutMe} />
      
    
      <div key={location.pathname} className="animate-fade-in">
        <Routes>
          {/* דף הבית */}
          <Route path="/" element={<Greeting />} />

          {/* דף About Me */}
          <Route path="/about" element={<AboutMe aboutMe={aboutMe} />} />

          {/* דף הרצאה */}
          <Route path="/lectures/:slug" element={<LecturePage />} />

          {/* דף Not Found */}
          <Route path="/404" element={<NotFoundPage />} />

          {/* דף Test */}
          <Route path="/test" element={<TestPage />} />

          {/* כל כתובת אחרת מפנה ל-404 */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>

      <BuisnessSection
        artistsData={artistsData}
        aboutMe={aboutMe}
        lecturesCom={lecturesCom}
      />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}