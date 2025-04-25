import { SkillCategory, Project, TechItem, Achievement } from '../types';

export const profileData = {
  name: 'Raghav',
  title: 'Full-Stack Developer',
  level: 45,
  abilities: ['Bug Fixer', 'UI Summoner', 'API Tamer'],
  domain: 'raghavcode.me',
  bio: 'A skilled developer with the ability to summon powerful user interfaces and tame wild APIs. Specializes in hunting and fixing bugs to level up projects and deliver exceptional digital experiences.',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90, color: 'sl-blue' },
      { name: 'TypeScript', level: 85, color: 'sl-purple' },
      { name: 'Tailwind CSS', level: 85, color: 'sl-teal' },
      { name: 'HTML/CSS', level: 95, color: 'sl-blue' },
      { name: 'JavaScript', level: 90, color: 'sl-purple' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 80, color: 'sl-teal' },
      { name: 'Express', level: 75, color: 'sl-blue' },
      { name: 'MongoDB', level: 70, color: 'sl-purple' },
      { name: 'SQL', level: 65, color: 'sl-teal' },
      { name: 'REST API', level: 85, color: 'sl-blue' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 85, color: 'sl-purple' },
      { name: 'GitHub', level: 80, color: 'sl-blue' },
      { name: 'VS Code', level: 90, color: 'sl-teal' },
      { name: 'Docker', level: 60, color: 'sl-purple' },
      { name: 'CI/CD', level: 70, color: 'sl-blue' },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A fully functional e-commerce platform with user authentication, product catalog, cart functionality, and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    link: '#',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard that provides real-time weather information, forecasts, and historical data.',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    link: '#',
    image: 'https://images.pexels.com/photos/1163572/pexels-photo-1163572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Portfolio Website',
    description: 'A Solo Leveling inspired interactive portfolio website showcasing projects and skills in a unique RPG style.',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    link: '#',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const techStack: TechItem[] = [
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces with reusable components',
    rarity: 'legendary',
    icon: 'Binary',
  },
  {
    name: 'TypeScript',
    description: 'Superpowered JavaScript with static type definitions',
    rarity: 'epic',
    icon: 'FileCode',
  },
  {
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    rarity: 'epic',
    icon: 'Server',
  },
  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapid UI development',
    rarity: 'rare',
    icon: 'Palette',
  },
  {
    name: 'MongoDB',
    description: 'NoSQL database for modern applications',
    rarity: 'rare',
    icon: 'Database',
  },
  {
    name: 'Git',
    description: 'Distributed version control system',
    rarity: 'uncommon',
    icon: 'GitBranch',
  },
  {
    name: 'Docker',
    description: 'Platform for developing, shipping, and running applications',
    rarity: 'rare',
    icon: 'Box',
  },
  {
    name: 'Express',
    description: 'Fast, unopinionated, minimalist web framework for Node.js',
    rarity: 'uncommon',
    icon: 'ServerCog',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Full Stack Developer Certification',
    description: 'Completed an intensive program covering frontend and backend technologies',
    date: 'May 2023',
  },
  {
    title: 'Hackathon Winner',
    description: 'First place at the Regional Code Challenge for developing an innovative solution',
    date: 'October 2022',
  },
  {
    title: 'Open Source Contributor',
    description: 'Active contributor to several popular open source projects with over 50 PRs merged',
    date: 'Ongoing',
  },
  {
    title: 'Tech Speaker',
    description: 'Presented at multiple developer conferences on modern web development practices',
    date: 'Various',
  },
];