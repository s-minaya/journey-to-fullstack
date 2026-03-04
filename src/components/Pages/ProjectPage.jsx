import { useState } from "react";
import { useNavigate } from "react-router";
import MapSlimeCompanion from "../Map/MapSlimeCompanion";
import ProjectCarousel from "../Projects/ProjectCarousel";
import ExperienceBar from "../Map/ExperienceBar";
import { useMapProgress } from "../hooks/useMapProgress";
import "../../styles/Pages/ProjectPage.scss";

function ProjectPage({
  projects,
  pageVariant,
  title,
  subtitle,
  initialSlimeTexts,
  clickToOpenText = "Haz click de nuevo para ver el proyecto →",
}) {
  const navigate = useNavigate();
  const { currentXP, maxXP } = useMapProgress();
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleProjectSelect = (project) => {
    if (selectedProjectId !== project.id) {
      setSelectedProjectId(project.id);
    } else {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleGoBack = () => {
    navigate("/map-page");
  };

  const slimeTexts = selectedProjectId
    ? [
        projects.find((p) => p.id === selectedProjectId).description,
        clickToOpenText,
      ]
    : initialSlimeTexts;

  return (
    <section className={`project-page project-page--${pageVariant}`}>
      {/* Barra de experiencia */}
      <ExperienceBar visible={true} currentXP={currentXP} maxXP={maxXP} />

      {/* Botón de volver al mapa */}
      <button className="project-page__back-button" onClick={handleGoBack}>
        ← VOLVER AL MAPA
      </button>

      {/* Header */}
      <header className="project-page__header">
        <h1 className="project-page__title">{title}</h1>
        <p className="project-page__subtitle">{subtitle}</p>
      </header>

      {/* Carousel de proyectos */}
      <div className="project-page__carousel-wrapper">
        <ProjectCarousel
          projects={projects}
          selectedProjectId={selectedProjectId}
          onProjectSelect={handleProjectSelect}
        />
      </div>

      {/* Slime companion */}
      <MapSlimeCompanion texts={slimeTexts} visible={true} />
    </section>
  );
}

export default ProjectPage;
