export const site = {
  name: "Ayush Kumar",
  firstName: "AYUSH",
  lastName: "KUMAR",
  role: "Full Stack Web Developer | Computer Science Engineering Student",
  shortRole: "Full Stack Web Developer",
  kicker: "FULL STACK WEB DEVELOPER & CSE STUDENT",
  availability: "AVAILABLE FOR OPPORTUNITIES",
  oneLiner: "Building full-stack web applications, technical systems, and interactive digital products with Java, Spring Boot, React, and C++.",
  location: "Punjab, India",
  
  // Portrait slot: when empty, no image is rendered and no placeholder frame shown
  heroImage: "", 

  // Social & Contact links
  email: "ayushsharma521978@gmail.com",
  github: "https://github.com/ImAyush06",
  linkedin: "https://linkedin.com/in/ayushkumar066",
  resume: "",   // Drop resume in /public/resume/ayush-kumar-resume.pdf if available

  contact: {
    mode: "mailto", // "mailto" | "formspree" | "none"
    formspreeEndpoint: "", // e.g. "https://formspree.io/f/xxxx"
    email: "ayushsharma521978@gmail.com",
  },

  // About statement and narrative
  about: {
    statement: "I build software systems where engineering, problem-solving, and interface design meet.",
    highlightWords: ["engineering", "problem-solving", "interface design"],
    body: "I am a Computer Science Engineering student at Lovely Professional University and a Full Stack Web Developer. My focus spans architecting resilient backend services in Java and Spring Boot, creating responsive, data-driven interfaces with React, and exploring systems-level engineering with C++ and WebAssembly. I care about algorithmic rigor, clean code structure, and pragmatic software that solves actual problems.",
    focusAreas: [
      { id: "01", label: "Full Stack Web Development", detail: "React, JavaScript, HTML5/CSS3, responsive UI systems" },
      { id: "02", label: "Backend & Systems", detail: "Java, Spring Boot, RESTful APIs, decoupled service architecture" },
      { id: "03", label: "Data Structures & Algorithms", detail: "Min-Heap queues, sorting pipelines, binary trees, stack evaluation" },
      { id: "04", label: "Database Modeling", detail: "MongoDB document stores, relational DBMS, ACID transaction integrity" },
      { id: "05", label: "Security & Systems Concepts", detail: "Authentication protocols, hashing, OS principles, C++ modules" },
    ],
    facts: [

      { label: "EDUCATION", value: "B.Tech CSE" },
      { label: "UNIVERSITY", value: "Lovely Professional University" },
      { label: "FOCUS", value: "Full Stack & Systems" },
      { label: "STACK", value: "Java, Spring, React, C++, Mongo" },
    ],
  },

  showEmptySections: false,
};
