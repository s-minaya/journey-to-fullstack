import { useNavigate } from "react-router";
import MapSlimeCompanion from "../Map/MapSlimeCompanion";
import ExperienceBar from "../Map/ExperienceBar";
import { useMapProgress } from "../hooks/useMapProgress";
import "../../styles/Pages/MapContact.scss";

const SLIME_TEXTS = [
  "¡Bienvenido a la Taberna! (^◇^；)",
  "Aquí puedes encontrar mis redes sociales.",
  "¡La primera ronda va por mi cuenta! ✌.ʕʘ‿ʘʔ.✌",
  "No dudes en escribirme, siempre respondo.",
];

function MapContact() {
  const navigate = useNavigate();
  const { currentXP, maxXP } = useMapProgress();

  return (
    <section className="taberna">
      {/* Barra de experiencia */}
      <ExperienceBar visible={true} currentXP={currentXP} maxXP={maxXP} />

      {/* Botón de volver */}
      <button className="taberna__back-button" onClick={() => navigate("/map-page")}>
        ← VOLVER AL MAPA
      </button>

      {/* Header */}
      <header className="taberna__header">
        <h1 className="taberna__title">TABERNA DEL AVENTURERO</h1>
        <p className="taberna__subtitle">¿Hablamos? Siempre hay sitio en la barra ( ˘ ³˘)♥</p>
      </header>

      {/* Tarjetas de contacto */}
      <div className="taberna__cards">
        {/* GitHub */}
        <a
          className="taberna__card"
          href="https://github.com/s-minaya"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Sofía Minaya"
        >
          <span className="taberna__card-icon" aria-hidden="true">
            {/* Pixel art GitHub icon via SVG */}
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
                2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
                0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
                0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27
                .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82
                .44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15
                0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
                0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </span>
          <span className="taberna__card-label">GITHUB</span>
          <span className="taberna__card-handle">s-minaya</span>
        </a>

        {/* LinkedIn */}
        <a
          className="taberna__card"
          href="https://linkedin.com/in/sofia-minaya"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Sofía Minaya"
        >
          <span className="taberna__card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
                -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
                c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z
                M5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065z
                m1.782 13.019H3.555V9h3.564v11.452z
                M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451
                C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </span>
          <span className="taberna__card-label">LINKEDIN</span>
          <span className="taberna__card-handle">sofia-minaya</span>
        </a>

        {/* Email */}
        <a
          className="taberna__card"
          href="mailto:minaya.sofia@gmail.com"
          aria-label="Enviar email a Sofía Minaya"
        >
          <span className="taberna__card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z
                m0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </span>
          <span className="taberna__card-label">EMAIL</span>
          <span className="taberna__card-handle">minaya.sofia@gmail.com</span>
        </a>
      </div>

      {/* Slime companion */}
      <MapSlimeCompanion texts={SLIME_TEXTS} visible={true} />
    </section>
  );
}

export default MapContact;