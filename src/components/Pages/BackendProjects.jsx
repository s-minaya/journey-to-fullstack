import { useState } from "react";
import { useNavigate } from "react-router";
import MapSlimeCompanion from "../Map/MapSlimeCompanion";
import ProjectCarousel from "../Projects/ProjectCarousel";
import ExperienceBar from "../Map/ExperienceBar";
import { useMapProgress } from "../hooks/useMapProgress";
import "../../styles/Pages/BackendProjects.scss";

// ============================
// Datos de los proyectos
// ============================
const BACKEND_PROJECTS = [
  {
    id: "harry-potter-api",
    title: "HARRY POTTER API",
    description:
      "¡Mi primera API REST! (◕‿◕) Una API completa de Animal Crossing, con Node.js, Express y MySQL. Incluye endpoints CRUD, documentación y todo lo necesario para gestionar información.",
    url: "https://github.com/Adalab/modulo-4-evaluacion-final-bpw-s-minaya",
    image: "/images/projects/animal-crossing-api.jpg",
    tags: ["Node.js", "Express", "MySQL", "REST API"],
  },
];

// ============================
// Textos del slime
// ============================
const INITIAL_SLIME_TEXTS = [
  "Bienvenido al Backend Dungeon... ●﹏●",
  "Aquí yacen mis proyectos de backend.",
  "APIs, bases de datos y lógica oscura...",
];

function BackendProjects() {
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
        `${BACKEND_PROJECTS.find((p) => p.id === selectedProjectId).description}`,
        "Haz click de nuevo para ver el proyecto →",
      ]
    : INITIAL_SLIME_TEXTS;

  return (
    <section className="backend-projects">
      {/* Barra de experiencia */}
      <ExperienceBar visible={true} currentXP={currentXP} maxXP={maxXP} />

      {/* Botón de volver al mapa */}
      <button className="backend-projects__back-button" onClick={handleGoBack}>
        ← VOLVER AL MAPA
      </button>

      {/* Header */}
      <header className="backend-projects__header">
        <h1 className="backend-projects__title">BACKEND DUNGEON</h1>
        <p className="backend-projects__subtitle">
          Las profundidades del código servidor (｡•́︿•̀｡)
        </p>
      </header>

      {/* Carousel de proyectos */}
      <div className="backend-projects__carousel-wrapper">
        <ProjectCarousel
          projects={BACKEND_PROJECTS}
          selectedProjectId={selectedProjectId}
          onProjectSelect={handleProjectSelect}
        />
      </div>

      {/* Slime companion */}
      <MapSlimeCompanion texts={slimeTexts} visible={true} />
    </section>
  );
}

export default BackendProjects;