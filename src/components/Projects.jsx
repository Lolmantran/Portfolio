import { useState, useEffect, useCallback } from 'react';
import { projects } from '../data/mockData';
import SectionHeader from './SectionHeader';

function Carousel({ images, slide, setSlide, size = 'card' }) {
  const total = images.length;
  const prev = (e) => { e?.stopPropagation(); setSlide(i => (i - 1 + total) % total); };
  const next = (e) => { e?.stopPropagation(); setSlide(i => (i + 1) % total); };

  return (
    <div className={`project-card__carousel${size === 'modal' ? ' project-card__carousel--modal' : ''}`}>
      <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Previous image">&#8249;</button>
      <div className="carousel__track">
        {images[slide]
          ? <img src={images[slide]} alt={`screenshot ${slide + 1}`} className="carousel__img" />
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
            onClick={(e) => { e.stopPropagation(); setSlide(i); }}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const images = project.images && project.images.length ? project.images : [''];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="pmodal__backdrop" onClick={onClose}>
      <div className="pmodal" onClick={e => e.stopPropagation()}>
        <button className="pmodal__close" onClick={onClose} aria-label="Close">&#x2715;</button>

        <Carousel images={images} slide={slide} setSlide={setSlide} size="modal" />

        <div className="pmodal__body">
          <div className="pmodal__meta">
            <span className="project-card__number">{project.number}</span>
            <div className="project-card__sep" />
            <span className="project-card__category">{project.category}</span>
            <span className="pmodal__year">{project.year}</span>
          </div>
          <h2 className="pmodal__title">{project.title}</h2>
          <p className="pmodal__subtitle">{project.subtitle}</p>
          <p className="pmodal__desc">{project.description}</p>
          <div className="pmodal__footer">
            <div className="project-card__tags">
              {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="project-card__link">
                View project →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  const images = project.images && project.images.length ? project.images : [''];
  const [slide, setSlide] = useState(0);

  return (
    <article className="project-card glow-border" onClick={onOpen} style={{ cursor: 'pointer' }}>
      <div className="project-card__top">
        <div className="project-card__meta">
          <span className="project-card__number">{project.number}</span>
          <div className="project-card__sep" />
          <span className="project-card__category">{project.category}</span>
        </div>
        <span className="project-card__year">{project.year}</span>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__subtitle">{project.subtitle}</p>

      <Carousel images={images} slide={slide} setSlide={setSlide} size="card" />

      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__footer">
        <div className="project-card__tags">
          {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card__link"
            onClick={e => e.stopPropagation()}
          >
            View project →
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

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
            <ProjectCard key={project.id} project={project} onOpen={() => setActive(project)} />
          ))}
        </div>
      </div>
      {active && <ProjectModal project={active} onClose={close} />}
    </section>
  );
}
