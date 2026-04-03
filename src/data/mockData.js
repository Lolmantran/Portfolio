// =============================================================
//  MOCK DATA — edit this file to update your portfolio content
// =============================================================

// ─── Personal / Hero ──────────────────────────────────────────
export const personalInfo = {
  name: "Nam Khanh Tran",
  tagline: "I build things that matter.",
  description:
    "Second-year Computer Science student at UNSW. Full-stack software engineer, AWS Certified Solutions Architect, and AI enthusiast. Actively seeking opportunities — feel free to reach out!",
  location: "Sydney, Austrlia",

  // Roles that cycle in the hero section
  roles: ["Software Engineer","AWS Certified Solution Architect", "Cloud Engineer", "AI Engineer", "Full-Stack Developer",],

  // Hero stats row
  stats: [
    { value: "3+",  label: "Years Experience" },
    { value: "20+", label: "Projects Built"   },
    { value: "10+", label: "Technologies"     },
  ],

  // CTA links
  links: {
    github:   "https://github.com/Lolmantran",
    linkedin: "https://www.linkedin.com/in/nam-khanh-tran-26b543326/",
    email:    "Namkhanh.tran2310@gmail.com",
    cv:       "/your-cv.pdf",
  },
};

// ─── Experience ───────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    title:       "Software Engineer Intern",
    company:     "FPT Software - Global Healthcare Facility",
    type:        "Full-time/Internship",
    startDate:   "Dec 2025",
    endDate:     "Present",
    current:     true,
    description:
      "Describe your most impactful role here. Focus on quantified outcomes: what you built, what improved, and by how much. E.g. — architected a new microservices platform that reduced deployment time by 60% and supported 2× traffic growth.",
  },
  {
    id: 2,
    title:       "Full Stack Software Engineer",
    company:     "Apus Web",
    type:        "Part-time",
    startDate:   "Mar 2022",
    endDate:     "Dec 2023",
    current:     false,
    description:
      "Describe your contributions here. E.g. — led a team of 4 to deliver a real-time analytics dashboard used by 500+ internal users, cutting manual reporting effort by 70%.",
  },
  {
    id: 3,
    title:       "Software Engineering Bootcamp Trainee",
    company:     "Samsung Innovation Campus",
    type:        "Bootcamp",
    startDate:   "Dec 2023",
    endDate:     "May 2024",
    current:     false,
    description:
    "Completed a 6-month bootcamp covering programming fundamentals, data structures & algorithms, and basic system design.",
  },
];

// ─── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id:          1,
    number:      "01",
    category:    "WEB APPLICATION",
    title:       "Project One Title",
    subtitle:    "A short project subtitle or tech summary",
    year:        "2024",
    description:
      "Describe what the project does, the problem it solves, and the technical choices you made. Keep it to 2-3 sentences focused on impact. E.g. — a full-stack SaaS platform that automates invoice processing for SMBs, reducing manual data entry by 80%.",
    stats: [
      { value: "10K+", label: "Users"     },
      { value: "99.9%", label: "Uptime"   },
      { value: "80%",  label: "Time Saved" },
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    link:  "https://github.com/yourusername/project-one",
    image: "",  // Optional: path to screenshot, e.g. '/images/project1.png'
  },
  {
    id:          2,
    number:      "02",
    category:    "DATA ENGINEERING",
    title:       "Project Two Title",
    subtitle:    "Another subtitle here",
    year:        "2024",
    description:
      "Describe the second project. E.g. — an automated ETL pipeline that ingests 500K+ records daily from 5 external APIs into a Snowflake warehouse, powering live business dashboards.",
    stats: [
      { value: "500K+", label: "Records/day" },
      { value: "5",    label: "Data Sources" },
      { value: "3×",   label: "Faster Reports" },
    ],
    tags: ["Python", "Airflow", "Snowflake", "dbt", "SQL"],
    link:  "https://github.com/yourusername/project-two",
    image: "",  // Optional: path to screenshot, e.g. '/images/project2.png'
  },
  {
    id:          3,
    number:      "03",
    category:    "AI / MACHINE LEARNING",
    title:       "Project Three Title",
    subtitle:    "ML system or AI project",
    year:        "2025",
    description:
      "Describe your ML/AI project here. E.g. — a local RAG system for semantic Q&A over internal documents — fully private, no API calls, built with LangChain, FAISS, and Llama 3.",
    stats: [
      { value: "100%", label: "Local / Private" },
      { value: "1.5K+", label: "Indexed Chunks" },
      { value: "E2E",  label: "Pipeline"        },
    ],
    tags: ["Python", "LangChain", "FAISS", "Ollama", "Docker"],
    link:  "https://github.com/yourusername/project-three",
    image: "",  // Optional: path to screenshot, e.g. '/images/project3.png'
  },
];

// ─── Tech Stack (Tech Forge) ──────────────────────────────────
// Edit this list to add / remove tools. Order matters — left to right, top to bottom.
export const techStack = [
  "Python", "R", "JavaScript", "TypeScript", "SQL",
  "React", "Next.js", "Tailwind CSS", "Node.js", "Express",
  "PostgreSQL", "MySQL", "MongoDB", "Snowflake",
  "Pandas", "NumPy", "PyTorch", "TensorFlow", "Airflow", "dbt",
  "Docker", "Git", "GitHub", "VS Code", "Vite",
];

// ─── Contact ──────────────────────────────────────────────────
export const contactInfo = {
  heading:    "Get in Touch",
  subheading: "Open to new opportunities, collaborations, and interesting conversations.",
  location:   "Sydney, Australia",
  availability: "Available for part-time roles, freelance projects and internship",
};
