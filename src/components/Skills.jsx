import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiRedux, SiMui, SiTailwindcss, SiBootstrap,
  SiNestjs, SiExpress, SiNodedotjs, SiSpring, SiDocker,
  SiPostgresql, SiMongodb, SiRedis,
  SiTensorflow, SiNumpy, SiOpencv, SiGithub,
} from 'react-icons/si';
import { techCategories } from '../data/mockData';
import SectionHeader from './SectionHeader';

const ICON_MAP = {
  // Languages
  "JavaScript":          { Icon: SiJavascript,  color: "#F7DF1E" },
  "TypeScript":          { Icon: SiTypescript,  color: "#3178C6" },
  "Python":              { Icon: SiPython,      color: "#3776AB" },
  "Java":                { Icon: null,          color: "#E76F00" },
  "C / C++":             { Icon: SiCplusplus,   color: "#00599C" },
  "Assembly":            { Icon: null,          color: "#6B7280" },
  // Frontend
  "React":               { Icon: SiReact,       color: "#61DAFB" },
  "Next.js":             { Icon: SiNextdotjs,   color: "#111111" },
  "Redux":               { Icon: SiRedux,       color: "#764ABC" },
  "Material UI":         { Icon: SiMui,         color: "#007FFF" },
  "Tailwind":            { Icon: SiTailwindcss, color: "#06B6D4" },
  "Bootstrap":           { Icon: SiBootstrap,   color: "#7952B3" },
  // Backend & Infra
  "NestJS":              { Icon: SiNestjs,      color: "#E0234E" },
  "ExpressJS":           { Icon: SiExpress,     color: "#444444" },
  "Node.js":             { Icon: SiNodedotjs,   color: "#339933" },
  "Java Spring":         { Icon: SiSpring,      color: "#6DB33F" },
  "AWS":                 { Icon: null,          color: "#FF9900" },
  "Docker":              { Icon: SiDocker,      color: "#2496ED" },
  // Databases
  "PostgreSQL":          { Icon: SiPostgresql,  color: "#4169E1" },
  "MongoDB":             { Icon: SiMongodb,     color: "#47A248" },
  "Redis":               { Icon: SiRedis,       color: "#DC382D" },
  // AI & Automation
  "TensorFlow":          { Icon: SiTensorflow,  color: "#FF6F00" },
  "NumPy":               { Icon: SiNumpy,       color: "#4DABCF" },
  "OpenCV":              { Icon: SiOpencv,      color: "#5C3EE8" },
  "Claude Code":         { Icon: null,          color: "#C97435" },
  "GitHub Copilot":      { Icon: SiGithub,      color: "#181717" },
  "Prompt Engineering":  { Icon: null,          color: "#7C3AED" },
  "Agent Orchestration": { Icon: null,          color: "#0EA5E9" },
  "MCP Server":          { Icon: null,          color: "#10B981" },
};

export default function Skills() {
  return (
    <section id="skills" className="section forge">
      <div className="container">
        <SectionHeader
          label="Stack"
          title="The Tech Forge"
        />

        <div className="forge__categories">
          {techCategories.map(({ label, items }) => (
            <div key={label} className="forge__category">
              <div className="forge__category-label">{label}</div>
              <div className="forge__cards">
                {items.map(name => {
                  const entry = ICON_MAP[name];
                  if (!entry) return null;
                  const { Icon, color } = entry;
                  return (
                    <div key={name} className="forge__card">
                      <div className="forge__icon" style={{ color }}>
                        {Icon
                          ? <Icon size={32} />
                          : <span className="forge__icon-text">{name}</span>
                        }
                      </div>
                      <span className="forge__name">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
