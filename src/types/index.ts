export interface Project {
  id: number;
  title: string;
  description: string;
  category: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}