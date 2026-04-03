import { personalInfo } from '../data/mockData';

export default function Footer() {
  const { name, links } = personalInfo;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          Designed and built by {name} &mdash; &copy; {year}
        </p>
        <div className="footer__links">
          <a href={links.github}   target="_blank" rel="noreferrer" className="footer__link">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="footer__link">LinkedIn</a>
          <a href={`mailto:${links.email}`}                         className="footer__link">Email</a>
          {links.cv && (
            <a href={links.cv} target="_blank" rel="noreferrer" className="footer__link">CV</a>
          )}
        </div>
      </div>
    </footer>
  );
}
