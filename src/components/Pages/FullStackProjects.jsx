import { useState } from "react";
import { useNavigate } from "react-router";
import MapSlimeCompanion from "../Map/MapSlimeCompanion";
import ProjectCarousel from "../Projects/ProjectCarousel";
import ExperienceBar from "../Map/ExperienceBar";
import { useMapProgress } from "../hooks/useMapProgress";
import "../../styles/Pages/FullStackProjects.scss";

// ============================
// Datos de los proyectos
// ============================
const FULLSTACK_PROJECTS = [
  {
    id: "profile-cards-demo",
    title: "AWESOME PROFILE CARDS (DEMO)",
    description:
      "¡Mi primer proyecto fullstack completo! ψ(◣_◢)ψ Una aplicación para crear tarjetas de perfil. Esta es la versión DEMO en vivo (sin backend). Frontend con React.",
    url: "https://estherquiros.github.io/project-promo-58-modulo-3-team-2/",
    image: "/images/projects/profile-cards.jpg",
    tags: ["React", "Demo en vivo", "Trabajo en equipo"],
  },
  {
    id: "profile-cards-repo",
    title: "AWESOME PROFILE CARDS (CÓDIGO)",
    description:
      "Repositorio completo del proyecto fullstack con frontend (React), backend (Node.js/Express), base de datos (MySQL) y API REST. Trabajo en equipo durante el bootcamp de Adalab.",
    url: "https://github.com/s-minaya/project-promo-58-modulo-4-team-2",
    image: "/images/projects/profile-cards.jpg",
    tags: ["React", "Node.js", "Express", "MySQL", "Código completo"],
  },
];

// ============================
// Textos del slime
// ============================
const INITIAL_SLIME_TEXTS = [
  "¡Bienvenido al Castillo del Jefe Final! ψ(◣_◢)ψ",
  "Aquí se encuentran mis proyectos más épicos.",
  "Frontend y backend unidos en batalla. ¿Te atreves?",
];

function FullStackProjects() {
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
      // Segundo click: abrir proyecto en nueva pestaña (demo)
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
  const getSlimeTexts = () => {
    if (!selectedProjectId) return INITIAL_SLIME_TEXTS;
    
    const project = FULLSTACK_PROJECTS.find((p) => p.id === selectedProjectId);
    return [
      `${project.description}`,
      "Haz click de nuevo para abrir →",
    ];
  };

  return (
    <section className="fullstack-projects">
      {/* Barra de experiencia */}
      <ExperienceBar visible={true} currentXP={currentXP} maxXP={maxXP} />

      {/* Botón de volver al mapa */}
      <button className="fullstack-projects__back-button" onClick={handleGoBack}>
        ← VOLVER AL MAPA
      </button>

      {/* Header */}
      <header className="fullstack-projects__header">
        <h1 className="fullstack-projects__title">CASTILLO DEL JEFE FINAL</h1>
        <p className="fullstack-projects__subtitle">
          Proyectos fullstack épicos ψ(｀∇´)ψ
        </p>
      </header>

      {/* Carousel de proyectos */}
      <div className="fullstack-projects__carousel-wrapper">
        <ProjectCarousel
          projects={FULLSTACK_PROJECTS}
          selectedProjectId={selectedProjectId}
          onProjectSelect={handleProjectSelect}
        />
      </div>

      {/* Slime companion */}
      <MapSlimeCompanion texts={getSlimeTexts()} visible={true} />
    </section>
  );
}

export default FullStackProjects;