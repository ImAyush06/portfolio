# Ayush Kumar — Developer Portfolio

A production-quality personal engineering portfolio website for **Ayush Kumar**, Full Stack Web Developer and Computer Science Engineering student at Lovely Professional University.

Built with an editorial technical journal aesthetic: strong left-aligned typography, hairline rules, numbered sections, monospace metadata, alternating project plates, and zero template-like card walls.

---

## 1. Tech Stack

- **Framework**: React 19 + Vite 6
- **Typography**: `@fontsource/space-grotesk` (Display), `@fontsource/inter` (Body), `@fontsource/jetbrains-mono` (Code & Metadata)
- **Styling**: Vanilla CSS Design Tokens (`src/styles/tokens.css`, `typography.css`, `animations.css`, `globals.css`)
- **Animation**: Framer Motion (`motion`, `AnimatePresence`, spring transitions)
- **Icons**: Lucide React + custom inline SVG brand marks (`components/ui/BrandIcons.jsx`)
- **Accessibility & UX**: Keyboard navigation (`Cmd/Ctrl+K` Command Palette), ESC close support, focus trapping, body scroll locks, and `prefers-reduced-motion` compliance.

---

## 2. Running Locally

### Prerequisites
Node.js 18+ and npm installed.

### Commands
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 3. Project Architecture

```
public/
  favicon.svg                  # SVG AK monogram favicon
  og-image.png                 # Typographic OpenGraph preview image
  projects/                    # Project screenshots and gallery images
  certificates/                # Certificate scans and preview assets
  resume/                      # Resume PDF location (/resume/ayush-kumar-resume.pdf)
src/
  main.jsx                     # Application bootstrap
  App.jsx                      # Section registry orchestration & layout
  data/
    site.js                    # Identity, contact, availability, verified facts
    projects.js                # Curated GitHub project records (1-5)
    skills.js                  # Technical specification matrix
    experience.js              # Verified training and experience timeline
    education.js               # Degree, university, coursework
    certificates.js            # Certificate gallery records (empty state ready)
    index.js                   # Re-exports & dynamic section registry
  components/
    layout/                    # Navbar, MobileMenu, Footer, SectionShell, CommandPalette, ScrollProgress
    sections/                  # Hero, About, Skills, Projects, Experience, Certificates, Education, Contact
    projects/                  # ProjectShowcase, ProjectVisual, ProjectDrawer
    certificates/              # CertificateGallery, CertificateItem, CertificateEmptyState
    ui/                        # Lightbox, Button, BrowserFrame, BrandIcons, Placeholder
  hooks/                       # useActiveSection, useLockBodyScroll, usePrefersReducedMotion, useFocusTrap
  styles/                      # tokens.css, globals.css, typography.css, animations.css
  utils/                       # cn.js, validators.js (contact form & mailto adapter)
```

---

## 4. How to Update Content

### Adding / Editing Projects (`src/data/projects.js`)
Each project object supports full case-study metadata. Drop your screenshot inside `public/projects/` and add or edit an entry:

```js
{
  id: "project-slug",
  order: 6,
  title: "Project Title",
  subtitle: "Technical Subtitle",
  category: "Full Stack",
  year: "2026",
  status: "Completed",
  description: "One to two sentences summarizing the project.",
  image: "/projects/your-screenshot.webp",
  imageAlt: "Screenshot preview",
  imageRatio: "16/10",
  frame: true,
  gallery: [
    { src: "/projects/your-screenshot.webp", alt: "Overview", caption: "Console View" }
  ],
  technologies: ["React", "Java", "Spring Boot", "MongoDB"],
  features: ["Feature 1", "Feature 2"],
  dsa: ["Algorithm / Data Structure Used"],
  githubUrl: "https://github.com/ImAyush06/repo",
  liveUrl: "https://demo-url.com",
  story: "Why it was built...",
  problem: "The technical or operational problem...",
  solution: "The architecture designed to solve it...",
  architecture: "Three-tier microservice architecture...",
}
```

### Adding Certificates (`src/data/certificates.js`)
When you receive your certificate files, drop them in `public/certificates/` and add items to the array in `src/data/certificates.js`:

```js
{
  id: "cert-dsa-java",
  title: "Mastering Data Structures using Java",
  organization: "Lovely Professional University",
  date: "2025",
  certificateId: "LPU-DSA-2025",
  credentialUrl: "https://verification-link.com",
  description: "Advanced algorithmic complexity, recursion, heaps, and trees.",
  category: "Algorithms",
  image: "/certificates/dsa-java.webp",
}
```
*Note: When `certificates.js` is empty, the portfolio renders an architectural technical empty state without broken cards or placeholder images.*

### Adding Experience / Internships (`src/data/experience.js`)
Append verified professional experience or training items:

```js
{
  title: "Software Engineer Intern",
  organization: "Company Name",
  duration: "Jun 2026 – Aug 2026",
  type: "Internship",
  description: "Built scalable backend microservices and optimized database queries.",
  technologies: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
  link: "https://company.com",
}
```

### Updating Contact Mode & Social Links (`src/data/site.js`)
- **Email Client Mode (`mailto`)**: Opens the user's default email client with pre-filled subject and body (zero backend configuration required).
- **Formspree Mode (`formspree`)**: Create a free form at [formspree.io](https://formspree.io), set `site.contact.mode = "formspree"`, and add your endpoint to `site.contact.formspreeEndpoint`.

---

## 5. Image Guidelines

- **Project Screenshots**: `1600 × 1000` px (16:10 aspect ratio), saved as WebP or compressed JPG (≤ 300 KB).
- **Certificates**: Keep native aspect ratio (landscape or portrait), WebP format (≤ 400 KB). The built-in mat frame and Lightbox preserve document proportions without cropping.

---

## 6. Deployment

### Netlify
1. Connect repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import repository in Vercel.
2. Framework Preset: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`
