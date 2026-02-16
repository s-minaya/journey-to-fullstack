import { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/Projects/ProjectCarousel.scss";

function ProjectCarousel({ projects, onProjectSelect, selectedProjectId }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calcular cuántos proyectos mostrar según el tamaño de pantalla
  const getProjectsPerPage = () => {
    if (window.innerWidth >= 1024) return 2; // Desktop: 2 tarjetas
    return 1; // Móvil/Tablet: 1 tarjeta
  };

  const [projectsPerPage, setProjectsPerPage] = useState(getProjectsPerPage());

  // Actualizar projectsPerPage al cambiar el tamaño de ventana
  useState(() => {
    const handleResize = () => {
      setProjectsPerPage(getProjectsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < totalPages - 1;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Obtener los proyectos visibles en la página actual
  const startIdx = currentIndex * projectsPerPage;
  const visibleProjects = projects.slice(startIdx, startIdx + projectsPerPage);

  return (
    <div className="project-carousel">
      {/* Botón anterior */}
      <button
        className={`project-carousel__nav-button project-carousel__nav-button--prev ${!canGoPrev ? "project-carousel__nav-button--disabled" : ""}`}
        onClick={handlePrev}
        disabled={!canGoPrev}
        aria-label="Proyecto anterior"
      >
        ‹
      </button>

      <div className="project-carousel__viewport">
        <div className="project-carousel__track">
          {visibleProjects.map((project, index) => (
            <article
              key={project.id}
              className={`project-carousel__card ${selectedProjectId === project.id ? "project-carousel__card--selected" : ""}`}
              onClick={() => onProjectSelect(project)}
              role="button"
              tabIndex={0}
              style={{ animationDelay: `${index * 0.1}s` }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onProjectSelect(project);
                }
              }}
              aria-label={
                selectedProjectId === project.id
                  ? `${project.title} - Click de nuevo para abrir`
                  : `${project.title} - Click para ver descripción`
              }
            >
              {/* Imagen del proyecto */}
              <div className="project-carousel__image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-carousel__image"
                />
                <div className="project-carousel__overlay">
                  <span className="project-carousel__cta">
                    {selectedProjectId === project.id
                      ? "ABRIR PROYECTO →"
                      : "VER MÁS"}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="project-carousel__content">
                <h3 className="project-carousel__title">{project.title}</h3>
                {/* Tags */}
                <div className="project-carousel__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-carousel__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Botón siguiente */}
      <button
        className={`project-carousel__nav-button project-carousel__nav-button--next ${!canGoNext ? "project-carousel__nav-button--disabled" : ""}`}
        onClick={handleNext}
        disabled={!canGoNext}
        aria-label="Proyecto siguiente"
      >
        ›
      </button>

      {/* Indicadores de página */}
      <div className="project-carousel__indicators">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`project-carousel__indicator ${idx === currentIndex ? "project-carousel__indicator--active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir a página ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

ProjectCarousel.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  onProjectSelect: PropTypes.func.isRequired,
  selectedProjectId: PropTypes.string,
};

export default ProjectCarousel;