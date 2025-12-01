
import React from 'react';
import type { Skill, Project, Service } from './types';
import { CodeIcon, PencilAltIcon, DesktopComputerIcon } from './components/icons/FeatureIcons';

export const PERSONAL_INFO = {
  name: "Rohit P",
  title: "Code & Concept Developer",
  shortTitle: "Code & Concept Developer",
  tagline: "Django · Python · Data Science · Technical Storyteller",
  introduction: "A pragmatic developer who tells stories with code. I'm a 2nd-year BCA student passionate about building clear, usable web products and exploring new technologies. As a 'Code & Concept Developer', I blend curiosity and experimentation to deliver value.",
  email: "rohitp.720r@gmail.com",
  cvUrl: "/rohit-p-cv.pdf" // Placeholder URL
};

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/rohit-p-603170310",
  github: "https://github.com/Rohit-11r",
  email: `mailto:${PERSONAL_INFO.email}`,
};

export const EDUCATION = {
  institution: "Mar Thoma Institute of Technology",
  degree: "BCA (Bachelor of Computer Applications)",
  duration: "Jul 2024 — Jan 2027 (Expected)",
};

export const INTERNSHIP = {
  company: "Cognifyz Technologies",
  role: "Python Development Intern",
  duration: "Oct 2025 – Nov 2025",
  description: "Gained hands-on experience in Python development, contributing to live projects and learning industry best practices in a collaborative team environment."
};

export const TECHNICAL_SKILLS: Skill[] = [
  { name: 'Python', level: 90 },
  { name: 'Django', level: 85 },
  { name: 'Data Science', level: 75 },
  { name: 'HTML & CSS', level: 80 },
  { name: 'JavaScript', level: 70 },
];

export const CREATIVE_SKILLS: Skill[] = [
  { name: 'Technical Writing', level: 95 },
];

export const PROFESSIONAL_SKILLS: Skill[] = [
  { name: 'Problem-Solving', level: 88 },
  { name: 'Communication', level: 92 },
];

export const PROJECTS: Project[] = [
  {
    title: 'Learnify — Django Course Platform',
    description: 'A comprehensive course-selling platform built with Django. Features user authentication, course management, payment integration, and a responsive UI.',
    imageUrl: 'https://raw.githubusercontent.com/rohitp-dev11/Rohit_Profile/main/learnify.png',
    tags: ['Django', 'Python', 'PostgreSQL', 'Stripe API'],
    liveUrl: 'https://github.com/Rohit-11r',
    sourceUrl: 'https://github.com/Rohit-11r',
  },
  {
    title: 'Data Insights Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, built using Python with libraries like Pandas and Plotly.',
    imageUrl: 'https://raw.githubusercontent.com/rohitp-dev11/Rohit_Profile/main/data-insight-dashboard.png',
    tags: ['Python', 'Pandas', 'Plotly', 'Data Viz'],
    liveUrl: 'https://github.com/Rohit-11r',
    sourceUrl: 'https://github.com/Rohit-11r',
  },
  {
    title: 'Portfolio Website Template',
    description: 'A modern and customizable portfolio template for developers using HTML, CSS, and JS, with a focus on clean design.',
    imageUrl: 'https://raw.githubusercontent.com/rohitp-dev11/Rohit_Profile/main/portfolio-project.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    liveUrl: 'https://github.com/Rohit-11r',
    sourceUrl: 'https://github.com/Rohit-11r',
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description: 'Creating robust back-ends and dynamic web applications with Python & Django.',
    icon: <CodeIcon className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Portfolio Websites',
    description: 'Building beautiful, responsive, and professional portfolio websites to showcase your work.',
    icon: <DesktopComputerIcon className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Technical Writing',
    description: 'Crafting clear, concise, and effective technical documentation and content.',
    icon: <PencilAltIcon className="w-8 h-8 text-primary" />,
  },
];

export const STATS = [
    { value: '10+', label: 'Projects Completed' },
    { value: '1', label: 'Internship Experience' },
    { value: '2+', label: 'Years Learning' },
];
