// =============================================================
//  MOCK DATA — edit this file to update your portfolio content
// =============================================================

// ─── Project images ──────────────────────────────────────────
import VietLearnMain      from '../assets/VietLearn/Main.png';
import VietLearnDash      from '../assets/VietLearn/Dashboard.png';
import VietLearnF1        from '../assets/VietLearn/Feature1.png';
import VietLearnF2        from '../assets/VietLearn/Feature2.png';
import VietLearnF3        from '../assets/VietLearn/Feature3.png';

import DoccatMain         from '../assets/Doccat/Main.png';
import DoccatDash         from '../assets/Doccat/Dashboard.png';

import GamehubMain        from '../assets/Gamehub/Main.png';
import GamehubDash        from '../assets/Gamehub/Dashboard.png';
import GamehubF1          from '../assets/Gamehub/Feature1.png';
import GamehubF2          from '../assets/Gamehub/Feature2.png';
import GamehubF3          from '../assets/Gamehub/Feature3.png';

import AirBrbMain         from '../assets/AirBrb/Main.png';
import AirBrbDash         from '../assets/AirBrb/Dashboard.png';
import AirBrbF1           from '../assets/AirBrb/Feature1.png';
import AirBrbF2           from '../assets/AirBrb/Feature2.png';
import AirBrbF3           from '../assets/AirBrb/Feature3.png';

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
    cv:       "/NamKhanhTranResume.pdf",
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
    "Completed a 6-month bootcamp covering programming fundamentals, data structures & algorithms using C++ language, and basic system design.",
  },
];

// ─── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id:          1,
    number:      "01",
    category:    "FULL STACK WEB APPLICATION - EDUCATION",
    title:       "VietLearn",
    subtitle:    "Learning Vietnamese with AI",
    year:        "2025-2026",
    description: "Developed a full-stack AI Vietnamese learning platform with a Next.js 16 (App Router) frontend and NestJS backend — featuring spaced-repetition flashcards, multiple-choice quizzes, OpenAI-powered AI tutor chat, real-time Recharts dashboard with XP/streak gamification, and Google OAuth authentication via NextAuth v5 with server-side protected routing middleware",
    tags: ["Next.js", "Nest.js","Typescript", "PostgreSQL", "Docker", "Tailwind", "Prisma", "Vercel", "Railway", "OpenAI API"],
    link:  "https://vietlearn-frontend.vercel.app/",
    images: [VietLearnMain, VietLearnDash, VietLearnF1, VietLearnF2, VietLearnF3],
  },
  {
    id:          2,
    number:      "02",
    category:    "FULL STACK WEB APPLICATION - HEALTHCARE",
    title:       "Doc Cat Portal",
    subtitle:    "Healthcare service support doctors",
    year:        "2025-2026",
    description:
      "Describe the second project. E.g. — an automated ETL pipeline that ingests 500K+ records daily from 5 external APIs into a Snowflake warehouse, powering live business dashboards.",
    tags: ["AWS", "Next.js", "Typescript", "FastAPI", "Python", "PostgreSQL", "OpenAI API", "Material UI"],
    link:  "https://doc-cat-agent.web.app/",
    images: [DoccatMain, DoccatDash, "", "", ""],  // Feature1-3 coming soon
  },
  {
    id:          3,
    number:      "03",
    category:    "Frontend React",
    title:       "Gamehub",
    subtitle:    "Frontend React Game",
    year:        "2025",
    description:
      "GameHub is a collection of timeless games you grew up playing — reimagined in the browser with no downloads, no accounts, and no backend required. Every game runs entirely on the client side. A built-in score system tracks your wins across all games, so your progress persists between sessions.",
    tags: ["React", "Redux", "Tailwind", "React Router", "Javascript"],
    link:  "https://lolmantran.github.io/Frontend-Game/",
    images: [GamehubMain, GamehubDash, GamehubF1, GamehubF2, GamehubF3],
  },
  {
    id:          4,
    number:      "04",
    category:    "FULL STACK WEB APPLICATION- ECOMMERCE",
    title:       "AirBrb",
    subtitle:    "ECOMMERCE website connect host and customer for AirBnB",
    year:        "2025",
    description:
      "AirBrB — a simplified Airbnb-like property rental platform. It allows hosts to create, edit, publish, and manage property listings, and lets guests browse listings, make bookings, leave reviews, and filter by amenities, price, and ratings.",
    tags: ["React.js", "TypeScript", "Express.js", "MongoDB"],
    link:  "https://github.com/Lolmantran/airbrb",
    images: [AirBrbMain, AirBrbDash, AirBrbF1, AirBrbF2, AirBrbF3],
  },
];

// ─── Tech Stack (Tech Forge) ──────────────────────────────────
export const techCategories = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C / C++", "Assembly"],
  },
  {
    label: "Frontend & Frameworks",
    items: ["React", "Next.js", "Redux", "Material UI", "Tailwind", "Bootstrap"],
  },
  {
    label: "Backend & Infrastructure",
    items: ["NestJS", "ExpressJS", "Node.js", "Java Spring", "AWS", "Docker"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "AI & Automation",
    items: ["TensorFlow", "NumPy", "OpenCV", "Claude Code", "GitHub Copilot"],
  },
];

// ─── Contact ──────────────────────────────────────────────────
export const contactInfo = {
  heading:    "Get in Touch",
  subheading: "Open to new opportunities, collaborations, and interesting conversations.",
  location:   "Sydney, Australia",
  availability: "Available for part-time roles, freelance projects and internship",
};
