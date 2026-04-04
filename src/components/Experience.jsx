import { experiences } from '../data/mockData';
import SectionHeader from './SectionHeader';

// Renders **bold** markers, \n paragraph breaks, and ## section headers
function renderDescription(raw) {
  return raw.split('\n').map((paragraph, pi) => {
    if (paragraph.startsWith('## ')) {
      return <div key={pi} className="timeline__section-label">{paragraph.slice(3)}</div>;
    }
    const parts = paragraph.split(/\*\*(.*?)\*\*/g);
    const nodes = parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
    return <p key={pi} className="timeline__description">{nodes}</p>;
  });
}

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeader
          label="Career"
          title="My Experience"
        />

        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline__item">

              {/* Left: title + company + description */}
              <div className="timeline__body">
                <div className="timeline__title">{exp.title}</div>
                <div className="timeline__company-row">
                  <span className="timeline__company">{exp.company}</span>
                  <span className="timeline__type">{exp.type}</span>
                  {exp.current && (
                    <span className="timeline__current">Present</span>
                  )}
                </div>
                {renderDescription(exp.description)}
              </div>

              {/* Center: dot + connecting line */}
              <div className="timeline__connector">
                <div className={`timeline__dot${exp.current ? ' timeline__dot--active' : ''}`} />
              </div>

              {/* Right: date range */}
              <div className="timeline__dates">
                {exp.startDate} &mdash; {exp.current ? 'Present' : exp.endDate}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
