export interface Project {
  id: number;
  num: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  codeUrl: string;
  image: string;
}

export interface TechItem {
  name: string;
  category: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: string;
}
