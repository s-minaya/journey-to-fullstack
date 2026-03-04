import { useNavigate } from "react-router";
import MapSlimeCompanion from "../Map/MapSlimeCompanion";
import ExperienceBar from "../Map/ExperienceBar";
import ContactLinks from "../Contact/ContactLinks";
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
      <ContactLinks />

      {/* Slime companion */}
      <MapSlimeCompanion texts={SLIME_TEXTS} visible={true} />
    </section>
  );
}

export default MapContact;