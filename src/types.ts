export interface Skill {
  name: string;
  level: number;
  category: string[];
  endorsements: number;
}

export const skillsData: Skill[] = [
  { name: 'React', level: 90, category: ['Frontend', 'JavaScript'], endorsements: 50 },
  { name: 'Node.js', level: 85, category: ['Backend', 'JavaScript'], endorsements: 40 },
  { name: 'TypeScript', level: 80, category: ['Frontend', 'Backend', 'JavaScript'], endorsements: 35 },
  { name: 'JavaScript', level: 95, category: ['Frontend', 'Backend'], endorsements: 55 },
  { name: 'Python', level: 75, category: ['Backend', 'Data Science'], endorsements: 30 },
  { name: 'SQL', level: 85, category: ['Database'], endorsements: 45 },
  { name: 'GraphQL', level: 70, category: ['API', 'Frontend', 'Backend'], endorsements: 25 },
  { name: 'Docker', level: 65, category: ['DevOps'], endorsements: 20 },
];
