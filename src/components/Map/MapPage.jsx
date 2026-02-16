import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import SlimeLoader from "../Slime/SlimeLoader";
import MapSlimeCompanion from "./MapSlimeCompanion";
import ExperienceBar from "./ExperienceBar";
import GardenSlimes from "./GardenSlimes";
import MapBackgroundDesktop from "../../images/map-background.png";
import { usePageIntro } from "../hooks/usePageIntro";
import { useMapProgress } from "../hooks/useMapProgress";
import "../../styles/Map/MapPage.scss";

// Importar las imágenes cortadas
import MapCasa from "../../images/row-1-column-1.png";
import MapBosque from "../../images/row-2-column-1.png";
import MapAcademia from "../../images/row-3-column-1.png";
import MapDungeon from "../../images/row-4-column-1.png";
import MapCastillo from "../../images/row-5-column-1.png";
import MapJardin from "../../images/row-6-column-1.png";
import MapTaberna from "../../images/row-7-column-1.png";

// ============================
// Datos de las ubicaciones
// ============================
const LOCATIONS = [
  {
    id: "casa",
    name: "CASA",
    route: "/map-about-me",
    description:
      "¡Mi casa! (づ｡◕‿‿◕｡)づ Aquí encontrarás información sobre mí, qué me motiva y por qué elegí este camino. ¡Pasa y ponte cómodo!",
    className: "map__location--casa",
    image: MapCasa,
  },
  {
    id: "bosque",
    name: "BOSQUE DEL CAOS",
    route: "/first-projects",
    description:
      "¡Oh, el Bosque del Caos! (⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄ Estos fueron mis primeros proyectos antes de saber nada. Son un desastre, pero no me avergüenza ya que marcan el momento en el que perdí el miedo.",
    className: "map__location--bosque",
    image: MapBosque,
  },
  {
    id: "academia",
    name: "ACADEMIA DE MAGIA",
    route: "/training-projects",
    description:
      "¡La academia donde aprendí a programar! ୧( , ＾ ＾ , )୨ Aquí verás proyectos realizados durante mi formación, individuales y en equipo.",
    className: "map__location--academia",
    image: MapAcademia,
  },
  {
    id: "dungeon",
    name: "BACKEND DUNGEON",
    route: "/backend-projects",
    description:
      "Las profundidades del backend... ●﹏● APIs, bases de datos y lógica oscura. Solo los valientes se aventuran aquí....",
    className: "map__location--dungeon",
    image: MapDungeon,
  },
  {
    id: "castillo",
    name: "CASTILLO DEL JEFE FINAL",
    route: "/fullstack-projects",
    description:
      "Mis proyectos más épicos: frontend y backend unidos en batalla. ψ(◣_◢)ψ ¿Te atreves a enfrentarlos?!",
    className: "map__location--castillo",
    image: MapCastillo,
  },
  {
    id: "jardin",
    name: "JARDÍN DE CRIATURAS",
    route: "/favorite-projects",
    description:
      "Aquí conviven mis proyectos favoritos. (｡♥‿♥｡) Cuida a tus propias criaturitas ♡",
    className: "map__location--jardin",
    image: MapJardin,
  },
  {
    id: "taberna",
    name: "TABERNA",
    route: "/map-contact",
    description:
      "¡La taberna! (^◇^；) El mejor lugar para conocernos. Encuentra mis redes sociales y contactemos. ¡La primera ronda va por mi cuenta!",
    className: "map__location--taberna",
    image: MapTaberna,
  },
];

// ============================
// Textos iniciales del slime
// ============================
const INITIAL_SLIME_TEXTS = [
  "Este es el mapa del mundo ◕‿◕",
  "¡Haz scroll para explorar las ubicaciones!",
];

// ============================
// Textos cuando se completa todo
// ============================
const COMPLETION_SLIME_TEXTS = [
  "¡WOW! ¡Has explorado todo mi portfolio! ✧･ﾟ: *✧･ﾟ:*",
  "Muchas gracias por tomarte el tiempo de visitarlo todo (｡♥‿♥｡)",
  "¿Te gustaría contactar conmigo? ¡Visita la TABERNA!",
];

const MAP_VISITED_KEY = "portfolio_map_visited";

function MapPage() {
  const navigate = useNavigate();
  
  // Verificar si ya se visitó el mapa antes
  const [hasVisitedBefore] = useState(() => {
    return localStorage.getItem(MAP_VISITED_KEY) === "true";
  });

  // Usar el hook con skipLoader si ya se visitó
  const { loading, backgroundVisible, contentVisible } = usePageIntro({
    skipLoader: hasVisitedBefore,
  });

  const {
    currentXP,
    maxXP,
    isMaxLevel,
    markLocationAsVisited,
    visitedLocations,
  } = useMapProgress();

  const [selectedLocationId, setSelectedLocationId] = useState(null);

  // Marcar como visitado en el primer render
  useEffect(() => {
    if (!hasVisitedBefore) {
      localStorage.setItem(MAP_VISITED_KEY, "true");
    }
  }, [hasVisitedBefore]);

  const isLocationVisited = (locationId) => {
    return visitedLocations.includes(locationId);
  };

  const handleLocationClick = (location) => {
    if (selectedLocationId !== location.id) {
      setSelectedLocationId(location.id);
    } else {
      markLocationAsVisited(location.id);
      navigate(location.route);
    }
  };

  const handleGoToContact = () => {
    navigate("/map-contact");
  };

  const slimeTexts = isMaxLevel
    ? COMPLETION_SLIME_TEXTS
    : selectedLocationId
      ? [
          `${LOCATIONS.find((loc) => loc.id === selectedLocationId).description} Toca de nuevo para entrar →`,
        ]
      : INITIAL_SLIME_TEXTS;

  if (loading) return <SlimeLoader />;

  return (
    <section className={`map ${backgroundVisible ? "map--visible" : ""}`}>
      <ExperienceBar
        visible={contentVisible}
        currentXP={currentXP}
        maxXP={maxXP}
      />

      <div className="map__container">
        <div className="map__wrapper">
          {/* Desktop background */}
          <img
            src={MapBackgroundDesktop}
            alt="World map"
            className="map__background map__background--desktop"
          />

          {/* MÓVIL: Grid de imágenes */}
          <div
            className={`map__images-grid ${
              contentVisible ? "map__images-grid--visible" : ""
            }`}
          >
            {LOCATIONS.map((location) => (
              <div key={location.id} className="map__image-container">
                <img
                  src={location.image}
                  alt={location.name}
                  className="map__section-image"
                />
              </div>
            ))}
          </div>

          {/* Botones de ubicaciones (posicionados absolutamente encima) */}
          <div
            className={`map__locations ${
              contentVisible ? "map__locations--visible" : ""
            }`}
          >
            {LOCATIONS.map((location, index) => (
              <div
                key={location.id}
                className={`map__location ${location.className} ${
                  selectedLocationId === location.id
                    ? "map__location--selected"
                    : ""
                } ${isLocationVisited(location.id) ? "map__location--visited" : ""}`}
                style={{ '--index': index }}
                onClick={() => handleLocationClick(location)}
                role="button"
                tabIndex={0}
                aria-label={
                  isLocationVisited(location.id)
                    ? `${location.name} - Ya visitada`
                    : selectedLocationId === location.id
                      ? `${location.name} - Selecciona de nuevo para entrar`
                      : `${location.name} - Selecciona para ver información`
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleLocationClick(location);
                  }
                }}
              >
                <span className="map__location-text">{location.name}</span>
                {isLocationVisited(location.id) && (
                  <span className="map__location-badge">✓</span>
                )}
              </div>
            ))}
          </div>

          <GardenSlimes visible={contentVisible} />
        </div>
      </div>

      <MapSlimeCompanion
        texts={slimeTexts}
        visible={contentVisible}
        showContactButton={isMaxLevel}
        onContactClick={handleGoToContact}
      />
    </section>
  );
}

export default MapPage;