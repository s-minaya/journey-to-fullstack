import PropTypes from "prop-types";
import "../../styles/Projects/ProjectCard.scss";

function ProjectCard({ project }) {
  const handleClick = () => {
    window.open(project.url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="project-card" onClick={handleClick}>
      <div className="project-card__image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
        />
        <div className="project-card__overlay">
          <span className="project-card__cta">VER PROYECTO →</span>
        </div>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectCard;