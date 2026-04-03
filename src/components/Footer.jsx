import { personalInfo } from '../data/mockData';

export default function Footer() {
  const { name } = personalInfo;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copy">
        Designed and built by {name} &mdash; &copy; {year}
      </p>
    </footer>
  );
}
