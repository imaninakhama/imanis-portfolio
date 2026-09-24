export const skillSets = {
  ohs: [
    { label: "Workplace Hazard Inspection", level: 95 },
    { label: "Risk Assessment", level: 90 },
    { label: "Occupational Toxicology", level: 80 },
    { label: "Environmental Microbiology", level: 75 },
    { label: "Biostatistics & Reporting", level: 70 },
    { label: "Compliance Auditing", level: 85 },
  ],
  dev: [
    { label: "React / JSX", level: 90 },
    { label: "Flask REST APIs", level: 85 },
    { label: "JWT Authentication", level: 75 },
    { label: "Tailwind CSS", level: 88 },
    { label: "SQL / SQLite", level: 78 },
    { label: "Git & Debugging", level: 82 },
  ],
};

export const projectFilters = ["All", "Full-Stack", "Frontend", "API"];

export const projects = [
  {
    name: "KDCCE Community Platform",
    tag: "FULL-STACK",
    category: "Full-Stack",
    description:
      "Community platform for elderly care services, built with a 5-person team. Led backend development — Flask REST API, PostgreSQL, Docker — against a documented API contract for parallel frontend/backend work.",
    url: "https://kdcce-community-platform-team-iota.vercel.app",
  },
  {
    name: "Workout Tracker API",
    tag: "API/DOCS",
    category: "API",
    description:
      "Backend API for logging workouts, with full README documentation for setup and endpoint usage.",
    url: null,
  },
  {
    name: "SifaDesigns",
    tag: "FRONTEND",
    category: "Frontend",
    description:
      "E-commerce storefront for handwoven African artisan products. Hero section rebuilt with glassmorphism and CSS animation.",
    url: "https://sifa-designs.vercel.app/",
  },
  {
    name: "Tasty Spices & Catering",
    tag: "FRONTEND",
    category: "Frontend",
    description:
      "Catering business site for a Nairobi caterer, built in React + Tailwind with hash-based routing.",
    url: "https://catering-site-ecru.vercel.app/",
  },
];

export const contactLines = [
  {
    label: "EMAIL",
    value: "nakhamaimani@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=nakhamaimani@gmail.com",
  },
  { label: "LOCATION", value: "Nairobi, Kenya", href: null },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/imani-lunjala-1b2057422",
    href: "https://www.linkedin.com/in/imani-lunjala-1b2057422",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
