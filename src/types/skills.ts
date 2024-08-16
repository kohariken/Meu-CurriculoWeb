import { IconType } from 'react-icons';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress } from 'react-icons/si';

export interface Skill {
  name: string;
  icon: IconType;
  description: string;
  level: number;
  endorsements: number;
}

export const skillsData: Skill[] = [
  {
    name: 'MongoDB',
    icon: SiMongodb,
    description: 'Banco de dados NoSQL flexível e escalável',
    level: 80,
    endorsements: 50
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    description: 'Ambiente de execução JavaScript do lado do servidor',
    level: 85,
    endorsements: 60
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    description: 'Linguagem de programação versátil para web',
    level: 90,
    endorsements: 70
  },
  {
    name: 'Express',
    icon: SiExpress,
    description: 'Framework web rápido e minimalista para Node.js',
    level: 75,
    endorsements: 45
  },
  {
    name: 'React',
    icon: FaReact,
    description: 'Biblioteca JavaScript para construir interfaces de usuário',
    level: 85,
    endorsements: 55
  }
];
