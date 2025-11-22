import type { Experience, Project, Skill } from './types';

export const experiences: Experience[] = [
  {
    company: 'LocalBy',
    role: 'VP of Engineering',
    period: 'Aug 2026 — Present',
    bullets: [
      'Engineered LocalBy\'s entire backend as a resilient AWS microservices ecosystem, building core services (Auth, Admin) and implementing event-driven architectures to maximize scalability and deployment flexibility.',
    ],
  },
  {
    company: 'DSAT School',
    role: 'Lead Developer',
    period: 'Feb 2025 — Present',
    bullets: [
      'Built the entire SAT learning ecosystem, including a standalone Practice platform and landing website.',
      'Developed a dedicated Payment Server powering subscriptions and transactions across all DSATSchool services.',
      'Architected an AI-powered chatbot that assists students with step-by-step problem solving.',
      'Engineered a scalable, modular backend architecture supporting multiple services under a unified load.',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'TypoTrek',
    summary:
      'Real-Time Competitive Typing Platform - Developed TypoTrek, a competitive typing platform with real-time leaderboards and analytics serving 500+ users.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    link: '#',
  },
  {
    name: 'Content Management System',
    summary:
      'Engineered content management system with adaptive difficulty, automated scoring, and responsive UI using Flask, SQLAlchemy, PostgreSQL, Alpine.js, and Tailwind CSS.',
    tech: ['Flask', 'SQLAlchemy', 'PostgreSQL', 'Alpine.js', 'Tailwind CSS'],
    link: '#',
  },
  {
    name: 'RESTful API',
    summary:
      'Built RESTful API and responsive UI for efficient content management with role-based access control.',
    tech: ['Node.js', 'Express', 'MongoDB', 'REST'],
    link: '#',
  },
];

export const skills: Skill[] = [
  { name: 'Python', level: 'expert', group: 'Backend' },
  { name: 'FastAPI', level: 'expert', group: 'Backend' },
  { name: 'Django', level: 'advanced', group: 'Backend' },
  { name: 'Flask', level: 'advanced', group: 'Backend' },
  { name: 'PostgreSQL', level: 'expert', group: 'Databases' },
  { name: 'MongoDB', level: 'advanced', group: 'Databases' },
  { name: 'Redis', level: 'advanced', group: 'Databases' },
  { name: 'Caching', level: 'advanced', group: 'Databases' },
  { name: 'AWS Cloud Services', level: 'advanced', group: 'Cloud' },
  { name: 'Google Cloud (GCP)', level: 'intermediate', group: 'Cloud' },
  { name: 'Docker', level: 'advanced', group: 'DevOps' },
  { name: 'Containerization', level: 'advanced', group: 'DevOps' },
  { name: 'CI/CD', level: 'advanced', group: 'DevOps' },
  { name: 'Git', level: 'expert', group: 'DevOps' },
  { name: 'Jenkins', level: 'intermediate', group: 'DevOps' },
  { name: 'GitHub', level: 'expert', group: 'DevOps' },
  { name: 'Arduino', level: 'intermediate', group: 'Other' },
];
