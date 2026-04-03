import { useState } from 'react';
import { projects } from '../data/mockData';
import SectionHeader from './SectionHeader';

function ProjectCard({ project }) {
  const images = project.images && project.images.length ? project.images : ['', '', ''];
  const total = images.length;
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide(i => (i - 1 + total) % total);
  const next = () => setSlide(i => (i + 1) % total);

  return (
    <article className="project-card glow-border">
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

      {/* Carousel */}
      <div className="project-card__carousel">
        <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Previous image">&#8249;</button>
        <div className="carousel__track">
          {images[slide]
            ? <img src={images[slide]} alt={`${project.title} screenshot ${slide + 1}`} className="carousel__img" />
            : <div className="carousel__placeholder">
                <span className="project-card__image-text">Preview {slide + 1} / {total}</span>
              </div>
          }
        </div>
        <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Next image">&#8250;</button>
        <div className="carousel__dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot${i === slide ? ' carousel__dot--active' : ''}`}
              onClick={() => setSlide(i)}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="project-card__desc">{project.description}</p>

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
  );
}

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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
