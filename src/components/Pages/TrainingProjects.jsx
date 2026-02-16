import { useState } from "react";
import { useNavigate } from "react-router";
import MapSlimeCompanion from "../Map/MapSlimeCompanion";
import ProjectCarousel from "../Projects/ProjectCarousel";
import ExperienceBar from "../Map/ExperienceBar";
import { useMapProgress } from "../hooks/useMapProgress";
import "../../styles/Pages/TrainingProjects.scss";

// ============================
// Datos de los proyectos
// ============================
const TRAINING_PROJECTS = [
  {
    id: "adatech",
    title: "ADATECH - PRIMER PROYECTO EN EQUIPO",
    description:
      "¡Mi primer proyecto en equipo! (｡♥‿♥｡) Maquetación de una página web ficticia utilizando metodologías Scrum y Agile. Primer contacto con el trabajo colaborativo en desarrollo.",
    url: "https://s-minaya.github.io/proyect-promo-58-module-1-team-1/",
    image: "/images/projects/adatech.jpg",
    tags: ["HTML", "CSS", "Scrum", "Trabajo en equipo"],
  },
  {
    id: "modulo-1-final",
    title: "EXAMEN MÓDULO 1",
    description:
      "Mi primer examen de maquetación web. (⁄ ⁄•⁄ω⁄•⁄ ⁄) Primeras experiencias con animaciones, Vite, Sass, keyframes... ¡El inicio de todo!",
    url: "https://beta.adalab.es/modulo-1-evaluacion-final-s-minaya/",
    image: "/images/projects/modulo-1.jpg",
    tags: ["HTML", "Sass", "Animaciones", "Vite"],
  },
  {
    id: "piedra-papel-tijera",
    title: "PIEDRA, PAPEL O TIJERA",
    description:
      "¡Mis comienzos con JavaScript! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ El clásico juego de piedra, papel o tijera. Primeros pasos con lógica de programación e interactividad.",
    url: "https://beta.adalab.es/modulo-2-evaluacion-intermedia-s-minaya/",
    image: "/images/projects/piedra-papel-tijera.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Juego"],
  },
  {
    id: "tienda-virtual",
    title: "TIENDA VIRTUAL",
    description:
      "Una tienda virtual con JavaScript donde se pueden agregar productos al carrito. ୧(＾ 〰 ＾)୨ Los datos vienen de una API. ¡Mi primera interacción con APIs!",
    url: "https://beta.adalab.es/modulo-2-evaluacion-final-s-minaya/",
    image: "/images/projects/tienda-virtual.jpg",
    tags: ["JavaScript", "API", "Carrito de compra"],
  },
  {
    id: "listado-paises",
    title: "LISTADO DE PAÍSES",
    description:
      "¡Primeros pasos con React! (◕‿◕) Trabajando con filtros y consumiendo datos de una API. Aprendiendo componentes y estado.",
    url: "https://s-minaya.github.io/Listado-de-paises/",
    image: "/images/projects/paises.jpg",
    tags: ["React", "API", "Filtros"],
  },
  {
    id: "harry-potter-characters",
    title: "PERSONAJES DE HARRY POTTER",
    description:
      "Una página donde se muestran personajes de Harry Potter a través de una API. ⚡ Se pueden aplicar distintos filtros e incluye página de detalle. ¡Accio información!",
    url: "https://beta.adalab.es/modulo-3-evaluacion-final-s-minaya/",
    image: "/images/projects/harry-potter.jpg",
    tags: ["React", "API", "Filtros", "Routing"],
  },
  {
    id: "juego-memoria",
    title: "JUEGO DE MEMORIA",
    description:
      "Un juego de hacer parejas desarrollado con React. (◠‿◠)",
    url: "https://s-minaya.github.io/juego-de-memoria/",
    image: "/images/projects/memoria.jpg",
    tags: ["React", "Juego", "Estado"],
  },
  {
    id: "pokemon-team",
    title: "DISEÑA TU EQUIPO POKÉMON",
    description:
      "Maquetación más profesional con mi primer carousel, animaciones avanzadas y JavaScript.",
    url: "https://s-minaya.github.io/dise-a-tu-equipo-pokemon/",
    image: "/images/projects/pokemon.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Carousel", "Animaciones"],
  },
  {
    id: "matematicas",
    title: "TALLER DE MATEMÁTICAS",
    description:
      "Un taller interactivo de matemáticas con JavaScript. (◕‿◕)",
    url: "https://s-minaya.github.io/Matematicas-con-JavaScript/",
    image: "/images/projects/matematicas.jpg",
    tags: ["JavaScript", "Educativo", "Interactivo"],
  },
];

// ============================
// Textos del slime
// ============================
const INITIAL_SLIME_TEXTS = [
  "¡Bienvenido a la Academia de Magia! ୧( , ＾ ＾ , )୨",
  "Aquí están los proyectos de mi formación.",
  "Desde HTML hasta React. ¡Un viaje de aprendizaje!",
];

function TrainingProjects() {
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
        `${TRAINING_PROJECTS.find((p) => p.id === selectedProjectId).description}`,
        "Haz click de nuevo para ver el proyecto →",
      ]
    : INITIAL_SLIME_TEXTS;

  return (
    <section className="training-projects">
      {/* Barra de experiencia */}
      <ExperienceBar visible={true} currentXP={currentXP} maxXP={maxXP} />

      {/* Botón de volver al mapa */}
      <button className="training-projects__back-button" onClick={handleGoBack}>
        ← VOLVER AL MAPA
      </button>

      {/* Header */}
      <header className="training-projects__header">
        <h1 className="training-projects__title">ACADEMIA DE MAGIA</h1>
        <p className="training-projects__subtitle">
          Mi viaje de aprendizaje en programación ❀◕ ‿ ◕❀
        </p>
      </header>

      {/* Carousel de proyectos */}
      <div className="training-projects__carousel-wrapper">
        <ProjectCarousel
          projects={TRAINING_PROJECTS}
          selectedProjectId={selectedProjectId}
          onProjectSelect={handleProjectSelect}
        />
      </div>

      {/* Slime companion */}
      <MapSlimeCompanion texts={slimeTexts} visible={true} />
    </section>
  );
}

export default TrainingProjects;