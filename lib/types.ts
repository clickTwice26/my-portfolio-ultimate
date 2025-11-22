export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type Project = {
  name: string;
  summary: string;
  tech: string[];
  link?: string;
};

export type Skill = {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  group?: string;
};
