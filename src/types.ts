export interface Project {
  id: string;
  title: string;
  period?: string;
  description: string;
  longDescription: string;
  features: string[];
  tags: string[];
  link?: string;
  github?: string;
  image: string;
  timeline?: {
    label: string;
    status: 'COMPLETED' | 'IN PROGRESS' | 'LIVE' | 'PENDING';
  }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string;
}
