import { Route, Routes } from "react-router";
import "../styles/App.scss";
import Header from "./Layout/Header";
import LandingPage from "./Landing/LandingPage"
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills"
import Proyects from "./Pages/Proyects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/my-skills" element={<Skills/>} />
        <Route path="/proyects" element={<Proyects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
