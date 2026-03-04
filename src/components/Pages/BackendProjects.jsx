import ProjectPage from "./ProjectPage";

// ============================
// Datos de los proyectos
// ============================
const BACKEND_PROJECTS = [
  {
    id: "animal-crossing-api",
    title: "ANIMAL CROSSING API",
    description:
      "¡Mi primera API! (◕‿◕) Una API completa de Animal Crossing, con Node.js, Express y MySQL. Incluye endpoints CRUD, documentación y todo lo necesario para gestionar información.",
    url: "https://github.com/Adalab/modulo-4-evaluacion-final-bpw-s-minaya",
    image: "/images/projects/animal-crossing-api.jpg",
    tags: ["Node.js", "Express", "MySQL", "API"],
  },
    {
    id: "testing-con-javascript",
    title: "TESTING CON JAVASCRIPT",
    description:
      "Proyecto de aprendizaje de testing (▰˘◡˘▰) cubriendo desde análisis estático hasta pruebas E2E automatizadas con CI/CD en GitHub Actions",
    url: "https://github.com/s-minaya/testing-con-javascript",
    image: "/images/projects/testing-con-javascript.jpg",
    tags: ["MongoDB", "Testing", "Docker", "TDD/BDD"],
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
  return (
    <ProjectPage
      projects={BACKEND_PROJECTS}
      pageVariant="backend"
      title="BACKEND DUNGEON"
      subtitle="Las profundidades del código servidor (｡•́︿•̀｡)"
      initialSlimeTexts={INITIAL_SLIME_TEXTS}
    />
  );
}

export default BackendProjects;