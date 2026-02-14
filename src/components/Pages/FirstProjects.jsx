import { useState } from "react";
import { useNavigate } from "react-router";
import MapSlimeCompanion from "../Map/MapSlimeCompanion";
import ProjectCarousel from "../Projects/ProjectCarousel";
import ExperienceBar from "../Map/ExperienceBar";
import { useMapProgress } from "../hooks/useMapProgress";
import "../../styles/Pages/FirstProjects.scss";

// ============================
// Datos de los proyectos
// ============================
const CHAOS_PROJECTS = [
  {
    id: "mefis",
    title: "MEFIS",
    description:
      "¡Mi primer código! (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄) Inspirada por mi gato, hice el código en el README sin saber cómo publicar trabajos...",
    url: "https://s-minaya.github.io/Mefis/",
    image: "/images/projects/mefis.jpg",
    tags: ["HTML", "Primer proyecto", "README code"],
  },
  {
    id: "jardin",
    title: "EL JARDÍN DE LAS DELICIAS",
    description:
      "Inspirada por mi cuadro favorito ♡ Mi primer intento fallido con JavaScript. (ᗒᗣᗕ)՞ No funcionó, ¡pero aprendí mucho!",
    url: "https://s-minaya.github.io/el-jardin-de-las-delicias/",
    image: "/images/projects/jardin.jpg",
    tags: ["HTML", "CSS", "JS fallido"],
  },
  {
    id: "overwatch",
    title: "FORMULARIO OVERWATCH",
    description:
      "Inspirada por un juego al que he dedicado demasiadas horas... (ꈍ꒙ꈍ) Un formulario temático de Overwatch. Aquí empecé a entender CSS, HTML y las buenas prácticas",
    url: "https://s-minaya.github.io/Formulario-OW.github.io/",
    image: "/images/projects/overwatch.jpg",
    tags: ["HTML", "CSS", "Formulario"],
  },
  {
    id: "login",
    title: "LOGIN RED SOCIAL",
    description:
      "¡Mi primer JavaScript EXITOSO! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Un login de una red social ficticia. Si quieres probarlo, puedes utilizar el usuario guest y la contraseña 1234",
    url: "https://s-minaya.github.io/log-in-red-social/",
    image: "/images/projects/login.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

// ============================
// Textos del slime
// ============================
const INITIAL_SLIME_TEXTS = [
  "Bienvenido al Bosque del Caos (⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄",
  "Estos son mis primeros proyectos antes de saber programar.",
  "¡Selecciona cualquier proyecto para saber más!",
];

function FirstProjects() {
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
        `${CHAOS_PROJECTS.find((p) => p.id === selectedProjectId).description}`,
        "Haz click de nuevo para ver el proyecto →",
      ]
    : INITIAL_SLIME_TEXTS;

  return (
    <section className="first-projects">
      {/* Barra de experiencia */}
      <ExperienceBar visible={true} currentXP={currentXP} maxXP={maxXP} />

      {/* Botón de volver al mapa */}
      <button className="first-projects__back-button" onClick={handleGoBack}>
        ← VOLVER AL MAPA
      </button>

      {/* Header */}
      <header className="first-projects__header">
        <h1 className="first-projects__title">BOSQUE DEL CAOS</h1>
        <p className="first-projects__subtitle">
          Mis primeros pasos en la programación (◡‿◡✿)
        </p>
      </header>

      {/* Carousel de proyectos */}
      <div className="first-projects__carousel-wrapper">
        <ProjectCarousel
          projects={CHAOS_PROJECTS}
          selectedProjectId={selectedProjectId}
          onProjectSelect={handleProjectSelect}
        />
      </div>

      {/* Slime companion */}
      <MapSlimeCompanion texts={slimeTexts} visible={true} />
    </section>
  );
}

export default FirstProjects;