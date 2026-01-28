
import React from 'react';
import { 
  Code2, 
  Database, 
  Cpu, 
  Wrench, 
  Layout, 
  Globe, 
  BrainCircuit, 
  Settings,
  Terminal,
  Layers,
  Sparkles,
  GitBranch
} from 'lucide-react';
import { Skill, Project } from './types';

export const SKILLS: Skill[] = [
  { name: 'JavaScript (ES6+)', category: 'frontend', icon: <Code2 className="w-6 h-6" /> },
  { name: 'React.js', category: 'frontend', icon: <Layout className="w-6 h-6" /> },
  { name: 'Tailwind CSS', category: 'frontend', icon: <Globe className="w-6 h-6" /> },
  { name: 'HTML5/CSS3', category: 'frontend', icon: <Layers className="w-6 h-6" /> },
  { name: 'Python (Flask)', category: 'backend', icon: <Terminal className="w-6 h-6" /> },
  { name: 'C++', category: 'backend', icon: <Cpu className="w-6 h-6" /> },
  { name: 'REST APIs', category: 'backend', icon: <Database className="w-6 h-6" /> },
  { name: 'n8n Automation', category: 'ai', icon: <Settings className="w-6 h-6" /> },
  { name: 'Prompt Engineering', category: 'ai', icon: <BrainCircuit className="w-6 h-6" /> },
  { name: 'AI Workflows', category: 'ai', icon: <Sparkles className="w-6 h-6" /> },
  { name: 'Git & GitHub', category: 'tools', icon: <GitBranch className="w-6 h-6" /> },
  { name: 'Problem Solving', category: 'tools', icon: <Wrench className="w-6 h-6" /> },
];

export const PROJECTS: Project[] = [

 {
    title: 'Online Maze Game for Learning (OMGL)',
    description:
      'A web-based educational maze game that helps learners practice programming concepts through interactive challenges.',
    tech: ['JavaScript', 'HTML5 Canvas', 'Flask', 'SQLite', 'CSS'],
    github: 'https://github.com/vu-BBA',
    image:
      'images/9e64045a-cb44-455b-aa3d-8bb1ce3caec2.jpg',
    features: [
      'Random Maze Generation',
      'Programming Challenges',
      'Keys & Gates System',
      'Timer-Based Gameplay'
    ]
  },

  {
    title: 'AI Automation Workflows',
    description:
      'Automated productivity workflows connecting multiple platforms using n8n and large language models.',
    tech: ['n8n', 'OpenAI', 'Google AI Studio', 'Webhooks'],
    github: 'https://github.com/vu-BBA',
    image:
      'https://tse3.mm.bing.net/th/id/OIP.xGzPXJWarKYk9gHmmH-JBAHaFk?rs=1&pid=ImgDetMain&o=7&rm=3',
    features: [
      'AI Chatbots',
      'Workflow Automation',
      'Prompt Engineering',
      'API Integrations'
    ]
  },

  {
    title: 'Animated Portfolio Website',
    description:
      'A modern personal portfolio website built with React and smooth animations to showcase projects and skills.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/vu-BBA',
    image:
      'images/Resume A3 Landscape.png',
    features: [
      'Responsive Design',
      'Animated UI Sections',
      'Navbar with Smooth Scroll',
      'Project Showcase'
    ]
  },

  {
    title: 'C++ Programming Challenges',
    description:
      'A collection of C++ programming challenges focusing on logic building, debugging, and problem-solving.',
    tech: ['C++', 'Algorithms', 'Problem Solving'],
    github: 'https://github.com/vu-BBA',
    image:
      'https://th.bing.com/th/id/R.0656c9422d3f2fb361646d0c62b9fab7?rik=8GyexjbMoQNoaw&pid=ImgRaw&r=0',
    features: [
      'Quiz-Based Questions',
      'Debugging Tasks',
      'Timed Challenges',
      'Algorithm Practice'
    ]
  }
];



export const PERSONAL_DETAILS = {
  name: 'Bushra Basharat',
  profession: 'Full Stack Developer & AI Automation Specialist',
  email: 'bushrach147hnd@gmail.com',
  github: 'https://github.com/vu-BBA',
  linkedin: 'https://www.linkedin.com/in/bushra-ch-a028b639a',
  // Using a professional representation that honors the niqab aesthetic provided in the prompt
  avatar: 'https://images.unsplash.com/photo-1643123239633-b999440a0c71?auto=format&fit=crop&q=80&w=800', 
  bio: 'I am a Software Engineering student passionate about crafting seamless digital experiences and intelligent automation. With a focus on JavaScript ecosystems and AI workflows, I strive to build technology that is efficient, accessible, and purpose-driven.'
};
