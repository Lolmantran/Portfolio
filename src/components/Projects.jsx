import { projects } from '../data/mockData';
import SectionHeader from './SectionHeader';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          label="Work"
          title="Projects"
          subtitle="Things I have built. Problems I chose to solve."
        />

        <div className="projects__grid">
          {projects.map(project => (
            <article key={project.id} className="project-card glow-border">
              {/* Top row: number + category | year */}
              <div className="project-card__top">
                <div className="project-card__meta">
                  <span className="project-card__number">{project.number}</span>
                  <div className="project-card__sep" />
                  <span className="project-card__category">{project.category}</span>
                </div>
                <span className="project-card__year">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__subtitle">{project.subtitle}</p>

              {/* Image */}
              <div className="project-card__image">
                {project.image
                  ? <img src={project.image} alt={project.title} />
                  : <div className="project-card__image-placeholder">
                      <span className="project-card__image-text">Preview</span>
                    </div>
                }
              </div>

              {/* Description */}
              <p className="project-card__desc">{project.description}</p>

              {/* Stats */}
              {project.stats && project.stats.length > 0 && (
                <div className="project-card__stats">
                  {project.stats.map(s => (
                    <div key={s.label} className="project-stat">
                      <div className="project-stat__value">{s.value}</div>
                      <div className="project-stat__label">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Footer: tags + link */}
              <div className="project-card__footer">
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link"
                  >
                    View project →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
