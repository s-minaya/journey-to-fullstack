import ProjectPage from "./ProjectPage";

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
  return (
    <ProjectPage
      projects={FULLSTACK_PROJECTS}
      pageVariant="fullstack"
      title="CASTILLO DEL JEFE FINAL"
      subtitle="Proyectos fullstack épicos ψ(｀∇´)ψ"
      initialSlimeTexts={INITIAL_SLIME_TEXTS}
      clickToOpenText="Haz click de nuevo para abrir →"
    />
  );
}

export default FullStackProjects;