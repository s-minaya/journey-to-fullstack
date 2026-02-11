import { Route, Routes } from "react-router";
import "../styles/App.scss";
import LandingPage from "./Landing/LandingPage";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { useEffect, useState } from "react";

const LANDING_SLIME_TEXTS = [
  "¡Hola, aventurero! Soy tu compañero slime.",
  "Puedo ayudarte a explorar este portfolio.",
  "¡Haz clic en COMENZAR AVENTURA para empezar!",
];

function App() {
  const [loading, setLoading] = useState(true);
  const [backgroundVisible, setBackgroundVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setBackgroundVisible(true);
    }, 3000);

    setTimeout(() => {
      setContentVisible(true);
    }, 4500);
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              loading={loading}
              backgroundVisible={backgroundVisible}
              contentVisible={contentVisible}
              slimeTexts={LANDING_SLIME_TEXTS}
            />
          }
        />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/my-skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;