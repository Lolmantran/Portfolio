import {
  SiPython, SiR, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress,
  SiPostgresql, SiMysql, SiMongodb, SiSnowflake,
  SiPandas, SiNumpy, SiPytorch, SiTensorflow,
  SiApacheairflow, SiDbt,
  SiDocker, SiGit, SiGithub, SiVite,
} from 'react-icons/si';
import { techStack } from '../data/mockData';
import SectionHeader from './SectionHeader';

// Map tool names → { icon component, brand colour }
const ICON_MAP = {
  "Python":       { Icon: SiPython,           color: "#3776AB" },
  "R":            { Icon: SiR,                color: "#276DC3" },
  "JavaScript":   { Icon: SiJavascript,       color: "#F7DF1E" },
  "TypeScript":   { Icon: SiTypescript,       color: "#3178C6" },
  "React":        { Icon: SiReact,            color: "#61DAFB" },
  "Next.js":      { Icon: SiNextdotjs,        color: "#000000" },
  "Tailwind CSS": { Icon: SiTailwindcss,      color: "#06B6D4" },
  "Node.js":      { Icon: SiNodedotjs,        color: "#339933" },
  "Express":      { Icon: SiExpress,          color: "#444444" },
  "PostgreSQL":   { Icon: SiPostgresql,       color: "#4169E1" },
  "MySQL":        { Icon: SiMysql,            color: "#4479A1" },
  "MongoDB":      { Icon: SiMongodb,          color: "#47A248" },
  "Snowflake":    { Icon: SiSnowflake,        color: "#29B5E8" },
  "Pandas":       { Icon: SiPandas,           color: "#150458" },
  "NumPy":        { Icon: SiNumpy,            color: "#013243" },
  "PyTorch":      { Icon: SiPytorch,          color: "#EE4C2C" },
  "TensorFlow":   { Icon: SiTensorflow,       color: "#FF6F00" },
  "Airflow":      { Icon: SiApacheairflow,    color: "#017CEE" },
  "dbt":          { Icon: SiDbt,              color: "#FF694B" },
  "Docker":       { Icon: SiDocker,           color: "#2496ED" },
  "Git":          { Icon: SiGit,              color: "#F05032" },
  "GitHub":       { Icon: SiGithub,           color: "#181717" },
  "VS Code":      { Icon: null,               color: "#007ACC" },
  "Vite":         { Icon: SiVite,             color: "#646CFF" },
};

// SQL has no Simple Icon — rendered as a plain card
const SQL_CARD = { Icon: null, color: "#5A6E8C" };

function getEntry(name) {
  if (name === "SQL") return SQL_CARD;
  return ICON_MAP[name] || null;
}

export default function Skills() {
  return (
    <section id="skills" className="section forge">
      <div className="container">
        <SectionHeader
          label="Stack"
          title="The Tech Forge"
          subtitle="The stack behind the work. The tools I learned along the journey."
        />

        <div className="forge__cards">
          {techStack.map(name => {
            const entry = getEntry(name);
            if (!entry) return null;
            const { Icon, color } = entry;
            return (
              <div key={name} className="forge__card">
                <div className="forge__icon" style={{ color }}>
                  {Icon
                    ? <Icon size={36} />
                    : <span className="forge__icon-text">{name}</span>
                  }
                </div>
                <span className="forge__name">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
