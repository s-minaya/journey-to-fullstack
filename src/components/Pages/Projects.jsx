import { useState } from "react";
import Header from "../Layout/Header";
import ProjectCard from "../Projects/ProjectCard";
import "../../styles/Pages/Projects.scss";

// ============================
// TODOS LOS PROYECTOS AGRUPADOS
// ============================
const PROJECT_CATEGORIES = [
  {
    id: "chaos",
    title: "BOSQUE DEL CAOS",
    subtitle: "Mis primeros pasos (◡‿◡✿)",
    icon: "🌲",
    projects: [
      {
        id: "mefis",
        title: "MEFIS",
        description: "¡Mi primer código! Inspirada por mi gato.",
        url: "https://s-minaya.github.io/Mefis/",
        image: "/images/projects/mefis.jpg",
        tags: ["HTML", "Primer proyecto"],
      },
      {
        id: "jardin",
        title: "EL JARDÍN DE LAS DELICIAS",
        description: "Mi primer intento fallido con JavaScript.",
        url: "https://s-minaya.github.io/el-jardin-de-las-delicias/",
        image: "/images/projects/jardin.jpg",
        tags: ["HTML", "CSS"],
      },
      {
        id: "overwatch",
        title: "FORMULARIO OVERWATCH",
        description: "Un formulario temático de Overwatch.",
        url: "https://s-minaya.github.io/Formulario-OW.github.io/",
        image: "/images/projects/overwatch.jpg",
        tags: ["HTML", "CSS"],
      },
      {
        id: "login",
        title: "LOGIN RED SOCIAL",
        description: "¡Mi primer JavaScript exitoso!",
        url: "https://s-minaya.github.io/log-in-red-social/",
        image: "/images/projects/login.jpg",
        tags: ["JavaScript"],
      },
    ],
  },
  {
    id: "academy",
    title: "ACADEMIA DE MAGIA",
    subtitle: "Mi formación en programación ❀◕ ‿ ◕❀",
    icon: "✨",
    projects: [
      {
        id: "adatech",
        title: "ADATECH",
        description: "Primer proyecto en equipo.",
        url: "https://s-minaya.github.io/proyect-promo-58-module-1-team-1/",
        image: "/images/projects/adatech.jpg",
        tags: ["HTML", "CSS", "Equipo"],
      },
      {
        id: "modulo-1",
        title: "EXAMEN MÓDULO 1",
        description: "Primer examen de maquetación web.",
        url: "https://beta.adalab.es/modulo-1-evaluacion-final-s-minaya/",
        image: "/images/projects/modulo-1.jpg",
        tags: ["HTML", "Sass"],
      },
      {
        id: "piedra-papel",
        title: "PIEDRA, PAPEL O TIJERA",
        description: "Comienzos con JavaScript.",
        url: "https://beta.adalab.es/modulo-2-evaluacion-intermedia-s-minaya/",
        image: "/images/projects/piedra-papel-tijera.jpg",
        tags: ["JavaScript", "Juego"],
      },
      {
        id: "tienda",
        title: "TIENDA VIRTUAL",
        description: "Primera interacción con APIs.",
        url: "https://beta.adalab.es/modulo-2-evaluacion-final-s-minaya/",
        image: "/images/projects/tienda-virtual.jpg",
        tags: ["JavaScript", "API"],
      },
      {
        id: "paises",
        title: "LISTADO DE PAÍSES",
        description: "Primeros pasos con React.",
        url: "https://s-minaya.github.io/Listado-de-paises/",
        image: "/images/projects/paises.jpg",
        tags: ["React", "API"],
      },
      {
        id: "harry-potter",
        title: "PERSONAJES DE HARRY POTTER",
        description: "Página con filtros y routing.",
        url: "https://beta.adalab.es/modulo-3-evaluacion-final-s-minaya/",
        image: "/images/projects/harry-potter.jpg",
        tags: ["React", "Routing"],
      },
      {
        id: "memoria",
        title: "JUEGO DE MEMORIA",
        description: "Juego de parejas con React.",
        url: "https://s-minaya.github.io/juego-de-memoria/",
        image: "/images/projects/memoria.jpg",
        tags: ["React", "Juego"],
      },
      {
        id: "pokemon",
        title: "DISEÑA TU EQUIPO POKÉMON",
        description: "Carousel y animaciones avanzadas.",
        url: "https://s-minaya.github.io/dise-a-tu-equipo-pokemon/",
        image: "/images/projects/pokemon.jpg",
        tags: ["JavaScript", "Animaciones"],
      },
      {
        id: "matematicas",
        title: "TALLER DE MATEMÁTICAS",
        description: "Taller interactivo con JavaScript.",
        url: "https://s-minaya.github.io/Matematicas-con-JavaScript/",
        image: "/images/projects/matematicas.jpg",
        tags: ["JavaScript", "Educativo"],
      },
    ],
  },
  {
    id: "backend",
    title: "BACKEND DUNGEON",
    subtitle: "Las profundidades del código (｡•́︿•̀｡)",
    icon: "🗝️",
    projects: [
      {
        id: "animal-crossing-api",
        title: "API REST",
        description: "API completa con Node.js, Express y MySQL.",
        url: "https://github.com/Adalab/modulo-4-evaluacion-final-bpw-s-minaya",
        image: "/images/projects/animal-crossing-api.jpg",
        tags: ["Node.js", "Express", "MySQL"],
      },
    ],
  },
  {
    id: "fullstack",
    title: "CASTILLO DEL JEFE FINAL",
    subtitle: "Proyectos fullstack épicos ψ(｀∇´)ψ",
    icon: "🏰",
    projects: [
      {
        id: "profile-cards-demo",
        title: "AWESOME PROFILE CARDS (DEMO)",
        description: "Versión demo en vivo del proyecto.",
        url: "https://estherquiros.github.io/project-promo-58-modulo-3-team-2/",
        image: "/images/projects/profile-cards.jpg",
        tags: ["React", "Demo"],
      },
      {
        id: "profile-cards-repo",
        title: "AWESOME PROFILE CARDS (CÓDIGO)",
        description: "Repositorio completo fullstack.",
        url: "https://github.com/s-minaya/project-promo-58-modulo-4-team-2",
        image: "/images/projects/profile-cards.jpg",
        tags: ["React", "Node.js", "MySQL"],
      },
    ],
  },
  {
    id: "favorites",
    title: "JARDÍN DE CRIATURAS",
    subtitle: "Mis proyectos favoritos ✿◕ ‿ ◕✿",
    icon: "🌸",
    projects: [
      {
        id: "bat-magotchi",
        title: "BAT-MAGOTCHI",
        description: "Tamagotchi de murciélagos interactivo.",
        url: "https://s-minaya.github.io/bat-magotchi/",
        image: "/images/projects/bat-magotchi.jpg",
        tags: ["JavaScript", "Juego", "Tamagotchi"],
      },
    ],
  },
];

function Projects() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="projects-page">
      <Header visible={true} />

      <section className="projects-page__content">
        {/* Header principal */}
        <header className="projects-page__header">
          <h1 className="projects-page__title">TODOS MIS PROYECTOS</h1>
          <p className="projects-page__subtitle">
            Explora mi viaje de aprendizaje (◕‿◕)
          </p>
        </header>

        {/* Categorías de proyectos */}
        <div className="projects-page__categories">
          {PROJECT_CATEGORIES.map((category) => (
            <article
              key={category.id}
              className={`project-category ${
                expandedCategory === category.id
                  ? "project-category--expanded"
                  : ""
              }`}
            >
              {/* Header de la categoría (clickable) */}
              <button
                className="project-category__header"
                onClick={() => toggleCategory(category.id)}
              >
                <span className="project-category__icon">{category.icon}</span>
                <div className="project-category__info">
                  <h2 className="project-category__title">{category.title}</h2>
                  <p className="project-category__subtitle">
                    {category.subtitle}
                  </p>
                </div>
                <span className="project-category__toggle">
                  {expandedCategory === category.id ? "−" : "+"}
                </span>
              </button>

              {/* Contenido expandible */}
              {expandedCategory === category.id && (
                <div className="project-category__content">
                  <div className="project-category__grid">
                    {category.projects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;