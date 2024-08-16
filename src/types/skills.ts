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
    level: 60,
    endorsements: 30
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    description: 'Ambiente de execução JavaScript do lado do servidor',
    level: 70,
    endorsements: 30
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    description: 'Linguagem de programação versátil para web',
    level: 90,
    endorsements: 50
  },
  {
    name: 'Express',
    icon: SiExpress,
    description: 'Framework web rápido e minimalista para Node.js',
    level: 50,
    endorsements: 20
  },
  {
    name: 'React',
    icon: FaReact,
    description: 'Biblioteca JavaScript para construir interfaces de usuário',
    level: 40,
    endorsements: 10
  }
];
