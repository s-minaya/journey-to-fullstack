import { useNavigate } from "react-router";
import MapSlimeCompanion from "../Map/MapSlimeCompanion";
import ExperienceBar from "../Map/ExperienceBar";
import AboutContent from "../About/AboutContent";
import { useMapProgress } from "../hooks/useMapProgress";
import "../../styles/Pages/MapAboutMe.scss";

const SLIME_TEXTS = [
  "¡Bienvenido a mi Casa! ＼(^-^ ))",
  "¡Haz clic en el vinilo para escuchar mi playlist! ♫",
  "Encuéntrame en LinkedIn si quieres hablar ╰(´︶`)╯",
];

function MapAboutMe() {
  const navigate = useNavigate();
  const { currentXP, maxXP } = useMapProgress();

  return (
    <section className="map-about">
      {/* Barra de experiencia */}
      <ExperienceBar visible={true} currentXP={currentXP} maxXP={maxXP} />

      {/* Botón de volver */}
      <button
        className="map-about__back-button"
        onClick={() => navigate("/map-page")}
      >
        ← VOLVER AL MAPA
      </button>

      {/* Header */}
      <header className="map-about__header">
        <h1 className="map-about__title"> CASA</h1>
        <p className="map-about__subtitle">
          Bienvenido a mi rincón del mundo ＼(^-^ )
        </p>
      </header>

      {/* Bento grid */}
      <AboutContent />

      {/* Slime companion */}
      <MapSlimeCompanion texts={SLIME_TEXTS} visible={true} />
    </section>
  );
}

export default MapAboutMe;