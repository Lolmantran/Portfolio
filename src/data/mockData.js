// =============================================================
//  MOCK DATA — edit this file to update your portfolio content
// =============================================================

// ─── Personal / Hero ──────────────────────────────────────────
export const personalInfo = {
  name: "Kei Tran",
  tagline: "I build things that matter.",
  description:
    "Second-year Computer Science student at UNSW. Full-stack software engineer, AWS Certified Solutions Architect, and AI enthusiast. Actively seeking opportunities — feel free to reach out!",
  location: "Sydney, Austrlia",

  // Roles that cycle in the hero section
  roles: ["Software Engineer","AWS Certified Solution Architect", "Cloud Engineer", "AI Engineer", "Full-Stack Developer",],

  // Hero stats row
  stats: [
    { value: "1+",  label: "Years Experience" },
    { value: "5+", label: "Projects Built"   },
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
      "Built a Queue Management System (QMS) module from scratch within a 5-year-old legacy microservice architecture with a team of 5. Designed the full flow for hospital patient registration, personal details, and symptom intake. Implemented drag-and-drop queue management for doctors to organize patients into appropriate rooms and monitor real-time patient location across service rooms. Developed RESTful APIs, designed the database schema, and implemented WebSocket for real-time queue updates. Worked directly with a Solution Architect to architect the module from the ground up. Currently deployed in 2 hospitals in Malaysia. Also contributed to an AI healthcare system where symptom input assists doctors with diagnoses, plus prescription templates for respective diseases.\nCollaborated with a team of 5 to build a full-stack AI-powered clinical documentation platform using Next.js 15 and TypeScript with HIPAA-aligned security (AES-256 encryption, audit logging). Implemented JWT and OAuth 2.0 (Google, Facebook, X/Twitter) with role-based access control. Engineered an end-to-end AI ingestion pipeline: clinical document upload → AWS Textract OCR → RAG chunking/vectorization → LLM-generated answers with citations. Automated identity document processing with AWS Textract for field extraction (name, DOB, document number, expiration). Integrated AI agents for symptom-based diagnosis, clinical note extraction, and prescription templates. Added multi-language support via next-intl (i18n) for international deployment.",
  },
  {
    id: 2,
    title:       "Full Stack Software Engineer",
    company:     "Apus Web",
    type:        "Part-time",
    startDate:   "May 2024",
    endDate:     "Dec 2024",
    current:     false,
    description:
      "Gained hands-on experience in full-stack development within an outsourcing company. Developed frontend features for an e-commerce platform (100+ users), including login and JWT authentication, and optimized UX to enhance overall user experience. Collaborated on real client projects across frontend, backend, and database systems.",
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
