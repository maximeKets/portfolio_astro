import type { SkillCategory } from '../types';
import {
  SiPython, SiLaravel, SiReact,
  SiSwift, SiDocker, SiGrafana, SiVercel,
  SiPandas, SiAdobe
} from 'react-icons/si';
import { FaEye, FaChartBar, FaHandshake, FaProjectDiagram } from 'react-icons/fa';
import { BsRobot } from 'react-icons/bs';

/**
 * Skills configuration
 * List all your technical and business skills grouped by category
 */
export const skills: readonly SkillCategory[] = [
  {
    title: 'Intelligence Artificielle & Computer Vision',
    skills: [
      {
        name: 'Computer Vision',
        description: "Maîtrise de l'architecture YOLO et pratique du Transfer Learning (entraînement des couches finales pour optimiser la précision).",
        icon: FaEye
      },
      {
        name: 'IA Générative & RAG',
        description: "Utilisation de LLM, techniques d'Embedding et gestion de bases de données vectorielles avec Pinecone.",
        icon: BsRobot
      },
      {
        name: 'Data Science',
        description: "Manipulation et analyse de données avec Pandas, NumPy et Scikit-Learn.",
        icon: SiPandas
      },
      {
        name: 'Visualisation',
        description: "Création de Heatmaps et analyses graphiques avec Matplotlib.",
        icon: FaChartBar
      }
    ]
  },
  {
    title: 'Développement Web Full-Stack',
    skills: [
      {
        name: 'Languages de prédilection',
        description: "Python (FastAPI, Django) et JavaScript (Node.js, React).",
        icon: SiPython
      },
      {
        name: 'Back-end',
        description: "Très forte aisance en PHP (Laravel).",
        icon: SiLaravel
      },
      {
        name: 'Front-end',
        description: "React.js, Tailwind CSS, Blade, HTML5/CSS3.",
        icon: SiReact
      },
      {
        name: 'Mobile',
        description: "Développement Web & Mobile, contribution à des projets Swift (Apple CarPlay).",
        icon: SiSwift
      }
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    skills: [
      {
        name: 'Conteneurisation',
        description: "Maîtrise de Docker et Docker Compose pour l'orchestration de services (Base de données, Nginx, App).",
        icon: SiDocker
      },
      {
        name: 'Observabilité',
        description: "Mise en place de monitoring avec Grafana.",
        icon: SiGrafana
      },
      {
        name: 'Déploiement',
        description: "Gestion des mises en ligne via Vercel et workflows CI/CD.",
        icon: SiVercel
      }
    ]
  },
  {
    title: '💼 Compétences Business',
    skills: [
      {
        name: 'Vente & Négociation',
        description: "Expertise acquise en B2C et en tant qu'auto-entrepreneur (My Mug, Rhône Avenir Énergie).",
        icon: FaHandshake
      },
      {
        name: 'Gestion de Projet',
        description: "Pilotage de roadmaps complexes, de la conception à la maintenance (Inmind, Park4night).",
        icon: FaProjectDiagram
      },
      {
        name: 'Design',
        description: "Maîtrise de la suite Adobe (Photoshop, Illustrator, InDesign) pour le prototypage et l'UI.",
        icon: SiAdobe
      }
    ]
  }
] as const;
