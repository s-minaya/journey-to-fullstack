import SlimeLoader from "../Slime/SlimeLoader";
import MapSlimeCompanion from "./MapSlimeCompanion";
import ExperienceBar from "./ExperienceBar";
import MapBackgroundMobile from "../../images/map-background-mobile.png";
import { usePageIntro } from "../hooks/usePageIntro";
import { Link } from "react-router";
import "../../styles/Map/MapPage.scss";

const MAP_SLIME_TEXTS = [
  "Este es el mapa del mundo 🌍",
  "Desde aquí puedes viajar.",
  "Elige tu destino.",
];

function MapPage() {
  const { loading, backgroundVisible, contentVisible } = usePageIntro();

  if (loading) return <SlimeLoader />;

  return (
    <section className={`map ${backgroundVisible ? "map--visible" : ""}`}>
      <ExperienceBar visible={contentVisible} currentXP={0} maxXP={100} />

      {/* Contenedor del mapa */}
      <div className="map__container">
        {/* Imagen de fondo */}
        <img
          src={MapBackgroundMobile}
          alt="World map"
          className="map__background"
        />

        {/* Ubicaciones */}
        <div
          className={`map__locations ${contentVisible ? "map__locations--visible" : ""}`}
        >
          {/* 1. Casa */}
          <Link to="/about-me" className="map__location map__location--casa">
            <span className="map__location-text">CASA</span>
          </Link>

          {/* 2. Bosque del Caos */}
          <Link to="#" className="map__location map__location--bosque">
            <span className="map__location-text">BOSQUE DEL CAOS</span>
          </Link>

          {/* 3. Academia de Magia */}
          <Link to="#" className="map__location map__location--academia">
            <span className="map__location-text">ACADEMIA DE MAGIA</span>
          </Link>

          {/* 4. Backend Dungeon */}
          <Link to="#" className="map__location map__location--dungeon">
            <span className="map__location-text">BACKEND DUNGEON</span>
          </Link>

          {/* 5. Castillo del Jefe Final */}
          <Link to="#" className="map__location map__location--castillo">
            <span className="map__location-text">CASTILLO DEL JEFE FINAL</span>
          </Link>

          {/* 6. Jardín de Criaturas */}
          <Link to="#" className="map__location map__location--jardin">
            <span className="map__location-text">JARDÍN DE CRIATURAS</span>
          </Link>

          {/* 7. Taberna */}
          <Link to="/contact" className="map__location map__location--taberna">
            <span className="map__location-text">TABERNA</span>
          </Link>
        </div>
      </div>

      <MapSlimeCompanion texts={MAP_SLIME_TEXTS} visible={contentVisible} />
    </section>
  );
}

export default MapPage;
