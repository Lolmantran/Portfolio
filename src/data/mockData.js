// =============================================================
//  MOCK DATA — edit this file to update your portfolio content
// =============================================================

// ─── Project images ──────────────────────────────────────────
import VietLearnMain      from '../assets/VietLearn/Main.png';
import cvFile             from '../assets/NamKhanhTranResume.pdf';
import transcriptFile     from '../assets/statement.pdf';
import VietLearnDash      from '../assets/VietLearn/Dashboard.png';
import VietLearnF1        from '../assets/VietLearn/Feature1.png';
import VietLearnF2        from '../assets/VietLearn/Feature2.png';
import VietLearnF3        from '../assets/VietLearn/Feature3.png';

import DoccatMain         from '../assets/Doccat/Main.png';
import DoccatDash         from '../assets/Doccat/Dashboard.png';
import DoccatF1           from '../assets/Doccat/Feature1.png';
import DoccatF2           from '../assets/Doccat/Feature2.png';
import DoccatF3           from '../assets/Doccat/Feature3.png';

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
    "Second-year Computer Science student at UNSW. Full-stack software engineer, AWS Certified Solutions Architect, and AI enthusiast. Actively seeking opportunities, so feel free to reach out!",
  location: "Sydney, Australia",

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
    cv:         cvFile,
    transcript: transcriptFile,
  },
};

// ─── Experience ───────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    title:       "Software Engineer (Research Scholarship)",
    company:     "UNSW Taste of Research",
    type:        "Research Scholarship",
    startDate:   "Jun 2026",
    endDate:     "Present",
    current:     true,
    description:
      "Engineered a **modular image-transmission pipeline** (**JPEG** → **bit-stream packing** → **BPSK modulation** → **AWGN channel** → **decode**) with **configurable quality and noise parameters** for fully reproducible runs.\nBuilt an **automated benchmarking harness** comparing four reconstruction methods (**JPEG baseline**, **SRCNN**, **Cycle-CNN**, **Deep JSCC**) across a full noise sweep, auto-generating **PSNR comparison charts** and metrics.\nRefactored an ad-hoc codebase into **reusable, well-structured modules** and a **self-contained pipeline**, cutting a full experiment re-run from many manual steps down to a **single command**.",
  },
  {
    id: 2,
    title:       "Software Engineer Intern",
    company:     "FPT Software - Global Healthcare Facility",
    type:        "Full-time/Internship",
    startDate:   "Nov 2025",
    endDate:     "Apr 2026",
    current:     false,
    description:
      "## Queue Management System (QMS)\nBuilt a **QMS module from scratch** within a **5-year-old legacy microservice architecture** with a **team of 5**, working directly with a **Solution Architect** to design the module end-to-end. Currently **deployed in 2 hospitals in Malaysia**.\nDesigned the full patient flow covering **hospital registration**, **personal details collection**, and **symptom intake**. Implemented **drag-and-drop queue management** for doctors to organise patients into appropriate rooms and **monitor real-time patient location** across service rooms.\nDeveloped **RESTful APIs**, designed the **database schema**, and implemented **WebSocket** for real-time queue updates. Also contributed to an **AI healthcare system** where **symptom input** assists doctors with diagnoses, plus **prescription templates** for respective diseases.\n## AI Clinical Documentation Platform\nCollaborated with a **team of 5** to build a **full-stack AI-powered clinical documentation platform** using **Next.js 15** and **TypeScript** with **HIPAA-aligned security** (**AES-256 encryption**, audit logging).\nImplemented **JWT** and **OAuth 2.0** (Google, Facebook, X/Twitter) with **role-based access control**. Engineered an end-to-end **AI ingestion pipeline**: clinical document upload → **AWS Textract OCR** → **RAG chunking/vectorization** → **LLM-generated answers** with citations.\nAutomated identity document processing with **AWS Textract** for field extraction (name, DOB, document number, expiration). Integrated **AI agents** for symptom-based diagnosis, **clinical note extraction**, and **prescription templates**. Added **multi-language support** via **next-intl (i18n)** for international deployment.",
  },
  {
    id: 3,
    title:       "Full Stack Software Engineer",
    company:     "Apus Web",
    type:        "Part-time",
    startDate:   "May 2024",
    endDate:     "Dec 2024",
    current:     false,
    description:
      "Built a **full-stack e-commerce application** in **React.js**, meeting company quality standards, covering **product listing**, **cart**, and **checkout flows**. Developed **RESTful APIs** with **Node.js** and **MongoDB**, handling **data modelling** and **CRUD operations** for the full product lifecycle. Enhanced **authentication security** on a live client project by implementing **JWT-based login**, receiving and incorporating direct client feedback. Gained hands-on experience with frontend fundamentals including **HTML**, **CSS**, and **Bootstrap** in a **production outsourcing environment**.",
  },
  {
    id: 4,
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
    description: "Developed a full-stack AI Vietnamese learning platform with a Next.js 16 (App Router) frontend and NestJS backend, featuring spaced-repetition flashcards, multiple-choice quizzes, OpenAI-powered AI tutor chat, real-time Recharts dashboard with XP/streak gamification, and Google OAuth authentication via NextAuth v5 with server-side protected routing middleware",
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
      "DocCat is a web platform built to help healthcare teams spend less time on paperwork and more time on patients. Instead of manually writing and organising clinical notes, doctors and staff can upload documents and let the AI automatically extract key information, answer questions based on the content, and generate summaries, all with source references so clinicians can trust the output.",
    tags: ["AWS", "Next.js", "Typescript", "FastAPI", "Python", "PostgreSQL", "OpenAI API", "Material UI"],
    link:  "https://doccat-portal.web.app/",
    images: [DoccatMain, DoccatDash, DoccatF1, DoccatF2, DoccatF3],
  },
  {
    id:          3,
    number:      "03",
    category:    "Frontend React",
    title:       "Gamehub",
    subtitle:    "Frontend React Game",
    year:        "2025",
    description:
      "GameHub is a collection of timeless games you grew up playing, reimagined in the browser with no downloads, no accounts, and no backend required. Every game runs entirely on the client side. A built-in score system tracks your wins across all games, so your progress persists between sessions.",
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
      "AirBrB is a simplified Airbnb-like property rental platform. It allows hosts to create, edit, publish, and manage property listings, and lets guests browse listings, make bookings, leave reviews, and filter by amenities, price, and ratings.",
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
