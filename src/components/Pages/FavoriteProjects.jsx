import ProjectPage from "./ProjectPage";

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
  return (
    <ProjectPage
      projects={FAVORITE_PROJECTS}
      pageVariant="favorite"
      title="JARDÍN DE CRIATURAS"
      subtitle="Mis proyectos más queridos y creativos ✿◕ ‿ ◕✿"
      initialSlimeTexts={INITIAL_SLIME_TEXTS}
    />
  );
}

export default FavoriteProjects;