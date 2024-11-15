import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaSass,
} from 'react-icons/fa'; // Icônes colorées
 import { SiMongodb, SiMysql } from 'react-icons/si'; // MongoDB et SQL

export const technologies = [
  { name: 'HTML', icon: <FaHtml5 style={{ color: '#E44D26' }} />, level: 100 }, // Orange
  { name: 'CSS', icon: <FaCss3Alt style={{ color: '#1572B6' }} />, level: 100 }, // Bleu
  { name: 'Sass', icon: <FaSass style={{ color: '#CC6699' }} />, level: 100 }, // Sass ajouté
  {
    name: 'MongoDB',
    icon: <SiMongodb style={{ color: '#47A248' }} />,
    level: 65,
  },
  { name: 'SQL', icon: <SiMysql style={{ color: '#4479A1' }} />, level: 70 },

  {
    name: 'JavaScript',
    icon: <FaJsSquare style={{ color: '#F7DF1E' }} />,
    level: 75,
  }, // Jaune
  { name: 'React', icon: <FaReact style={{ color: '#61DBFB' }} />, level: 50 }, // Bleu clair
  // Ajoute d'autres technologies ici avec leurs couleurs
];
