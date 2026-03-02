/**
 * Professional experience configuration
 * Add your work experience here
 */

import type {Experience} from '../types';

export const experience: readonly Experience[] = [
    {
        title: 'Développeur Web & Intelligence Artificielle | Freelance',
        company: 'Maxime Kets',
        location: 'Montpellier, Occitanie, France · Hybride',
        period: 'sept. 2025 - aujourd’hui',
        description: 'Ce que je fais :\n- Développement Web Full-Stack – création d’applications web sur mesure (Front : React/Blade/html, Back : Node.js, PHP, Python/Django)\n- Intégration de briques IA – modèles prédictifs, automatisation, assistants virtuels\n- Collecte & valorisation de données – mise en place de pipelines de données, scraping, enrichissement et visualisation\n- API & interconnexions – conception, refactorisation et sécurisation d’API internes\n- Déploiement & maintenance – hébergement, monitoring, CI/CD, amélioration continue\n\n🤝 Ce que je propose :\nJe collabore avec des entreprises, startups et écoles souhaitant développer des applications web intelligentes, des outils d’automatisation ou d’analyse de données, ou des assistants virtuels sur mesure.',
        technologies: ['Conception de logiciels', 'Intelligence artificielle (IA)', 'LLM', 'Embedding', 'React.js', 'Laravel', 'FastAPI', 'API REST', 'Ingénierie du web'],
        images: [
            {
                url: '/images/code.jpg',
                alt: 'Inmind',
            }
        ],
    },
    {
        title: 'Développeur en intelligence artificielle',
        company: 'Inmind',
        location: 'Ville de Paris, Île-de-France, France · À distance',
        period: 'sept. 2024 - sept. 2025',
        description: 'FoxJob : Conception et développement d’un assistant virtuel (speech-to-text, formulaires interactifs) pour aider les étudiants.\nAPI interne : Refonte et optimisation d’une API de partage de données. \nProjet de collecte et d’enrichissement de données : Développement d’un système automatisé d’extraction.\nCampusFlow : Module Prospection et Module Événements intégrés à l’écosystème CampusFlow.',
        technologies: ['Intelligence Artificielle', 'LLM', 'Embedding', 'React.js', 'base de données vectoriels', 'Laravel', 'FastAPI', 'API REST'],
        images: [
            {
                url: '/images/Inmind Logo.png',
                alt: 'Inmind',
            }
        ],
    },
    {
        title: 'Développeur web freelance',
        company: 'Freelance',
        location: 'Valence, Auvergne-Rhône-Alpes, France · À distance',
        period: 'juin 2023 - mai 2024',
        description: 'Projet GestImmo :\nCréation d\'un site web pour agence immobilière avec extranet. Conception d\'interface responsive (Wagtail).\nProjet d’Automatisation de Facturation :\nDéveloppement d\'un système de génération automatique de factures (normes internationales) avec l\'API Zoho Invoice.',
        technologies: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Bash', 'Django', 'Wagtail', 'GitHub', 'Node.js', 'Tailwind', 'PHP', 'WordPress'],
        images: [
            {
                url: '/images/code.jpg',
                alt: 'Code',
            }
        ],
    },
    {
        title: 'Développeur web & mobile',
        company: 'park4night',
        location: 'Saint-Péray, Auvergne-Rhône-Alpes, France · Sur site',
        period: 'juin 2022 - juin 2023',
        description: 'Développeur web fullstack contribuant à plusieurs projets clés : Plateforme Business partenaires, Plateforme Premium, Application Apple CarPlay (Bêta), et module W3crew (plateforme type Malt blockchainisée). Conception d\'un système de gestion de factures interne.',
        technologies: ['PHP', 'JavaScript', 'Python', 'Bash', 'Git', 'HTML5', 'CSS', 'Laravel', 'Swift'],
        images: [
            {
                url: '/images/park4night.png',
                alt: 'park4night',
            }
        ],
    },
    {
        title: 'Commercial Spécialisé en Pompes à Chaleur',
        company: 'RHONE AVENIR ENERGIE',
        location: 'Lyon, France',
        period: 'nov. 2020 - nov. 2021',
        description: 'Prospection BtoC, vente de solutions énergétiques (Pompes à chaleur), suivi client.',
        technologies: ['Vente', 'Prospection', 'Gestion de la relation client'],
        images: [
            {
                url: '/images/rhone-avenir-energie.png',
                alt: 'Rhone-avenir-energie',
            }
        ],
    }
] as const;
