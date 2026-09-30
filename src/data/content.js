export const skillGroups = [
  {
    label: "Frontend",
    skills: ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Python", "Flask", "REST APIs"],
  },
  {
    label: "Database",
    skills: ["SQLite", "SQL"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    label: "Currently learning",
    skills: ["Cloud platforms", "Deployment & infrastructure"],
  },
];

export const projectFilters = ["All", "Full-Stack", "Frontend", "API"];

export const projects = [
  {
    name: "KDCCE Community Platform",
    category: "Full-Stack",
    description:
      "Community platform for elderly care services, built with a 5-person team against a documented API contract. I led backend development — the REST API, JWT auth, and the PostgreSQL data layer.",
    stack: ["React", "Flask", "PostgreSQL", "JWT", "Docker"],
    github: "https://github.com/imaninakhama/kdcce-community-platform-team",
    demo: "https://kdcce-community-platform-team-iota.vercel.app",
  },
  {
    name: "Productivity App API",
    category: "API",
    description:
      "Flask backend for a productivity app — JWT-based registration and login, protected per-user routes, and full CRUD for tasks and notes with pagination.",
    stack: ["Flask", "SQLite", "JWT", "pytest"],
    github: "https://github.com/imaninakhama/Flask-Backend-Productivity-App",
    demo: null,
  },
  {
    name: "Workout Tracker API",
    category: "API",
    description:
      "REST API for logging workouts and exercises, with a join table tracking sets, reps and duration per session, and documented endpoints.",
    stack: ["Flask", "SQLAlchemy", "SQLite", "Marshmallow"],
    github:
      "https://github.com/imaninakhama/Flask-SQLAlchemy-Workout-Application-backend",
    demo: null,
  },
  {
    name: "Tasty Spices & Catering",
    category: "Frontend",
    description: "Catering business site for a Nairobi caterer, with client-side routing between pages.",
    stack: ["React", "React Router", "Tailwind CSS"],
    github: "https://github.com/imaninakhama/catering-site",
    demo: "https://catering-site-ecru.vercel.app/",
  },
];

export const contactLines = [
  {
    label: "EMAIL",
    value: "nakhamaimani@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=nakhamaimani@gmail.com",
  },
  {
    label: "GITHUB",
    value: "github.com/imaninakhama",
    href: "https://github.com/imaninakhama",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/imani-lunjala-1b2057422",
    href: "https://www.linkedin.com/in/imani-lunjala-1b2057422",
  },
  {
    label: "WHATSAPP",
    value: "+254 796 755 846",
    href: "https://wa.me/254796755846",
  },
  { label: "LOCATION", value: "Nairobi, Kenya", href: null },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
