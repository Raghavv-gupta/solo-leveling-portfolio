export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export interface TechItem {
  name: string;
  description: string;
  rarity: 'legendary' | 'epic' | 'rare' | 'uncommon' | 'common';
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}