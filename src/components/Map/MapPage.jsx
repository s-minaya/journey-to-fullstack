import { useState } from "react";
import { useNavigate } from "react-router";
import SlimeLoader from "../Slime/SlimeLoader";
import MapSlimeCompanion from "./MapSlimeCompanion";
import ExperienceBar from "./ExperienceBar";
import MapBackgroundMobile from "../../images/map-background-mobile.png";
import { usePageIntro } from "../hooks/usePageIntro";
import "../../styles/Map/MapPage.scss";

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
  },
  {
    id: "bosque",
    name: "BOSQUE DEL CAOS",
    route: "/first-projects",
    description:
      "¡Oh, el Bosque del Caos! (⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄ Estos fueron mis primeros proyectos antes de saber nada. Son un desastre, pero no me avergüenza ya que marcan el momento en el que perdí el miedo.",
    className: "map__location--bosque",
  },
  {
    id: "academia",
    name: "ACADEMIA DE MAGIA",
    route: "/training-projects",
    description:
      "¡La academia donde aprendí a programar! ୧( , ＾ ＾ , )୨ Aquí verás proyectos realizados durante mi formación, individuales y en equipo.",
    className: "map__location--academia",
  },
  {
    id: "dungeon",
    name: "BACKEND DUNGEON",
    route: "/backend-projects",
    description:
      "Las profundidades del backend... ●﹏● APIs, bases de datos y lógica oscura. Solo los valientes se aventuran aquí....",
    className: "map__location--dungeon",
  },
  {
    id: "castillo",
    name: "CASTILLO DEL JEFE FINAL",
    route: "/fullstack-projects",
    description:
      "Mis proyectos más épicos: frontend y backend unidos en batalla. ψ(◣_◢)ψ ¿Te atreves a enfrentarlos?!",
    className: "map__location--castillo",
  },
  {
    id: "jardin",
    name: "JARDÍN DE CRIATURAS",
    route: "/favorite-projects",
    description:
      "Aquí conviven mis proyectos favoritos. (｡♥‿♥｡) Cuida a tus propias criaturitas ♡",
    className: "map__location--jardin",
  },
  {
    id: "taberna",
    name: "TABERNA",
    route: "/map-contact",
    description:
      "¡La taberna! (^◇^；) El mejor lugar para conocernos. Encuentra mis redes sociales y contactemos. ¡La primera ronda va por mi cuenta!",
    className: "map__location--taberna",
  },
];

// ============================
// Textos iniciales del slime
// ============================
const INITIAL_SLIME_TEXTS = [
  "Este es el mapa del mundo ◕‿◕",
  "¡Selecciona cualquier ubicación para saber más!",
];

function MapPage() {
  const navigate = useNavigate();
  const { loading, backgroundVisible, contentVisible } = usePageIntro();

  // ============================
  // Estado que guarda la ubicación seleccionada
  // ============================
  const [selectedLocationId, setSelectedLocationId] = useState(null);

  // ============================
  // Maneja el click en cada ubicación
  // ============================
  const handleLocationClick = (location) => {
    if (selectedLocationId !== location.id) {
      // Primer toque: mostrar descripción de esta ubicación
      setSelectedLocationId(location.id);
    } else {
      // Segundo toque: navegar a la página
      navigate(location.route);
    }
  };

  // ============================
  // Textos para el slime companion
  // ============================
  const slimeTexts = selectedLocationId
    ? [
        // Mostramos la descripción + instrucción
        `${LOCATIONS.find((loc) => loc.id === selectedLocationId).description} Toca de nuevo para entrar →`,
      ]
    : INITIAL_SLIME_TEXTS;

  if (loading) return <SlimeLoader />;

  return (
    <section className={`map ${backgroundVisible ? "map--visible" : ""}`}>
      {/* Barra de experiencia */}
      <ExperienceBar visible={contentVisible} currentXP={0} maxXP={100} />

      {/* Contenedor del mapa */}
      <div className="map__container">
        {/* Imagen de fondo */}
        <img
          src={MapBackgroundMobile}
          alt="World map"
          className="map__background"
        />

        {/* Ubicaciones del mapa */}
        <div
          className={`map__locations ${
            contentVisible ? "map__locations--visible" : ""
          }`}
        >
          {LOCATIONS.map((location) => (
            <div
              key={location.id}
              className={`map__location ${
                location.className
              } ${selectedLocationId === location.id ? "map__location--selected" : ""}`}
              onClick={() => handleLocationClick(location)}
              role="button"
              tabIndex={0}
              aria-label={
                selectedLocationId === location.id
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
            </div>
          ))}
        </div>
      </div>

      {/* Slime companion con textos dinámicos */}
      <MapSlimeCompanion texts={slimeTexts} visible={contentVisible} />
    </section>
  );
}

export default MapPage;