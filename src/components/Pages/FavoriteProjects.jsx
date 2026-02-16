import { useState } from "react";
import { useNavigate } from "react-router";
import MapSlimeCompanion from "../Map/MapSlimeCompanion";
import ProjectCarousel from "../Projects/ProjectCarousel";
import ExperienceBar from "../Map/ExperienceBar";
import { useMapProgress } from "../hooks/useMapProgress";
import "../../styles/Pages/FavoriteProjects.scss";

// ============================
// Datos de los proyectos
// ============================
const FAVORITE_PROJECTS = [
  {
    id: "bat-magotchi",
    title: "BAT-MAGOTCHI",
    description:
      "¡Cuida a tu propia criaturita! (｡♥‿♥｡) Un tamagotchi interactivo en el que cuidas a tu propio murciélago. ¡No dejes que se muera!",
    url: "https://s-minaya.github.io/bat-magotchi/",
    image: "/images/projects/bat-magotchi.jpg",
    tags: ["JavaScript", "Juego", "Interactivo", "Tamagotchi"],
  },
];

// ============================
// Textos del slime
// ============================
const INITIAL_SLIME_TEXTS = [
  "¡Bienvenido al Jardín de Criaturas! (｡♥‿♥｡)",
  "Aquí viven mis proyectos más queridos.",
  "¡Selecciona uno para conocer a sus habitantes!",
];

function FavoriteProjects() {
  const navigate = useNavigate();
  const { currentXP, maxXP } = useMapProgress();
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // ============================
  // Maneja la selección de proyectos
  // ============================
  const handleProjectSelect = (project) => {
    if (selectedProjectId !== project.id) {
      // Primer click: mostrar descripción
      setSelectedProjectId(project.id);
    } else {
      // Segundo click: abrir proyecto en nueva pestaña
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  // ============================
  // Maneja el botón de volver
  // ============================
  const handleGoBack = () => {
    navigate("/map-page");
  };

  // ============================
  // Textos dinámicos para el slime
  // ============================
  const slimeTexts = selectedProjectId
    ? [
        `${FAVORITE_PROJECTS.find((p) => p.id === selectedProjectId).description}`,
        "Haz click de nuevo para ver el proyecto →",
      ]
    : INITIAL_SLIME_TEXTS;

  return (
    <section className="favorite-projects">
      {/* Barra de experiencia */}
      <ExperienceBar visible={true} currentXP={currentXP} maxXP={maxXP} />

      {/* Botón de volver al mapa */}
      <button className="favorite-projects__back-button" onClick={handleGoBack}>
        ← VOLVER AL MAPA
      </button>

      {/* Header */}
      <header className="favorite-projects__header">
        <h1 className="favorite-projects__title">JARDÍN DE CRIATURAS</h1>
        <p className="favorite-projects__subtitle">
          Mis proyectos más queridos y creativos ✿◕ ‿ ◕✿
        </p>
      </header>

      {/* Carousel de proyectos */}
      <div className="favorite-projects__carousel-wrapper">
        <ProjectCarousel
          projects={FAVORITE_PROJECTS}
          selectedProjectId={selectedProjectId}
          onProjectSelect={handleProjectSelect}
        />
      </div>

      {/* Slime companion */}
      <MapSlimeCompanion texts={slimeTexts} visible={true} />
    </section>
  );
}

export default FavoriteProjects;