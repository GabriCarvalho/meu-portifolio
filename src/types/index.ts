export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  technologies: string[];
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
