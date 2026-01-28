
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'tools';
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
  features: string[];
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}
