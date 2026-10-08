export { site } from './site.js';
export { projects } from './projects.js';
export { skills } from './skills.js';
export { certificates } from './certificates.js';
export { experience } from './experience.js';
export { education } from './education.js';

import { projects } from './projects.js';
import { skills } from './skills.js';
import { certificates } from './certificates.js';
import { experience } from './experience.js';
import { education } from './education.js';

export const sectionRegistry = [
  {
    id: "about",
    label: "ABOUT",
    title: "About",
    enabled: true,
    hasContent: true,
    showWhenEmpty: true,
  },
  {
    id: "skills",
    label: "SKILLS",
    title: "Skills",
    enabled: true,
    hasContent: skills && skills.length > 0,
    showWhenEmpty: false,
  },
  {
    id: "projects",
    label: "PROJECTS",
    title: "Projects",
    enabled: true,
    hasContent: projects && projects.length > 0,
    showWhenEmpty: false,
  },
  {
    id: "experience",
    label: "TRAINING",
    title: "Training",
    enabled: true,
    hasContent: experience && experience.length > 0,
    showWhenEmpty: false,
  },
  {
    id: "certificates",
    label: "CERTIFICATES",
    title: "Certificates",
    enabled: true,
    hasContent: certificates && certificates.length > 0,
    showWhenEmpty: true,
  },
  {
    id: "education",
    label: "EDUCATION",
    title: "Education",
    enabled: true,
    hasContent: Boolean(education?.degree),
    showWhenEmpty: true,
  },
  {
    id: "contact",
    label: "CONTACT",
    title: "Contact",
    enabled: true,
    hasContent: true,
    showWhenEmpty: true,
  },
];
