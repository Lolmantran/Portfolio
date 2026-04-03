import { experiences } from '../data/mockData';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeader
          label="Career"
          title="My Experience"
          subtitle="Roles I have held and the impact I made along the way."
        />

        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline__item">
              <div className={`timeline__dot${exp.current ? ' timeline__dot--active' : ''}`} />

              <div className="timeline__header">
                <div>
                  <div className="timeline__title">{exp.title}</div>
                  <div className="timeline__company-row">
                    <span className="timeline__company">{exp.company}</span>
                    <span className="timeline__type">{exp.type}</span>
                    {exp.current && (
                      <span className="timeline__current">Present</span>
                    )}
                  </div>
                </div>
                <div className="timeline__dates">
                  {exp.startDate} &mdash; {exp.current ? 'Present' : exp.endDate}
                </div>
              </div>

              <p className="timeline__description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
