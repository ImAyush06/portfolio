export const skillCategories = [
  {
    id: "frontend",
    number: "01",
    label: "FRONTEND",
    title: "Frontend Engineering",
    description: "Technologies used to build responsive, accessible, and dynamic user interfaces.",
    items: [
      { name: "React.js", category: "Frontend Framework", status: "CORE" },
      { name: "JavaScript", category: "Core Web Language (ES6+)", status: "CORE" },
      { name: "HTML5", category: "Semantic Markup", status: "CORE" },
      { name: "CSS3", category: "Responsive Styling", status: "CORE" },
      { name: "Next.js", category: "React Framework", status: "MODERN" },
      { name: "Bootstrap", category: "Component Framework", status: "FAMILIAR" },
      { name: "Tailwind CSS", category: "Utility-First CSS", status: "FAMILIAR" },
    ],
  },
  {
    id: "backend",
    number: "02",
    label: "BACKEND",
    title: "Backend Architecture",
    description: "Technologies used to build server-side applications, REST APIs, and business logic.",
    items: [
      { name: "Java", category: "Enterprise Programming", status: "CORE" },
      { name: "Spring Boot", category: "Backend Framework", status: "CORE" },
      { name: "Flask", category: "Lightweight Python Services", status: "FAMILIAR" },
      { name: "REST APIs", category: "API Design & Integration", status: "CORE" },
    ],
  },
  {
    id: "database",
    number: "03",
    label: "DATABASE",
    title: "Databases & Data Management",
    description: "Technologies used for structured storage, document schemas, and queries.",
    items: [
      { name: "MongoDB", category: "NoSQL Document Database", status: "CORE" },
      { name: "SQL", category: "Relational Query Language", status: "CORE" },
      { name: "DBMS", category: "Database Management Systems", status: "CORE" },
    ],
  },
  {
    id: "programming",
    number: "04",
    label: "PROGRAMMING",
    title: "Programming & Core CS",
    description: "Core programming languages, algorithmic problem solving, and computer science foundations.",
    items: [
      { name: "C++", category: "Systems & Algorithms", status: "CORE" },
      { name: "Java", category: "Object-Oriented Development", status: "CORE" },
      { name: "Python", category: "Scripting & Backend", status: "FAMILIAR" },
      { name: "C", category: "Low-Level Programming", status: "FAMILIAR" },
      { name: "PHP", category: "Server-Side Scripting", status: "FAMILIAR" },
      { name: "Data Structures & Algorithms", category: "Computational Problem Solving", status: "CORE" },
      { name: "Object-Oriented Programming", category: "Design Principles & Abstraction", status: "CORE" },
      { name: "Operating Systems", category: "Memory & Concurrency", status: "CORE" },
    ],
  },
  {
    id: "tools",
    number: "05",
    label: "TOOLS",
    title: "Tools & Workflow",
    description: "Development tools, version control, and collaboration software used in daily work.",
    items: [
      { name: "Git", category: "Distributed Version Control", status: "CORE" },
      { name: "GitHub", category: "Repositories & Collaboration", status: "CORE" },
      { name: "VS Code", category: "Development Environment", status: "CORE" },
      { name: "Postman", category: "API Testing & Debugging", status: "CORE" },
      { name: "Jira", category: "Project & Issue Tracking", status: "FAMILIAR" },
    ],
  },
];

// Flat export of all skills for compatibility
export const skills = skillCategories.flatMap((c) => c.items.map((i) => i.name));
