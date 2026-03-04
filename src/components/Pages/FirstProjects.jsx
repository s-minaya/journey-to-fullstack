import ProjectPage from "./ProjectPage";

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
  return (
    <ProjectPage
      projects={CHAOS_PROJECTS}
      pageVariant="first"
      title="BOSQUE DEL CAOS"
      subtitle="Mis primeros pasos en la programación (◡‿◡✿)"
      initialSlimeTexts={INITIAL_SLIME_TEXTS}
    />
  );
}

export default FirstProjects;