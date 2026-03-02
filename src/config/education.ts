/**
 * Education and courses configuration
 * Add your educational background and courses here
 */

import type {Education, Course} from '../types';

export const education: readonly Education[] = [
    {
        degree: 'Bachelor\'s degree',
        major: 'Développeur en intelligence artificielle',
        institution: 'EPSI - L\'école d\'ingénierie informatique',
        location: 'France',
        year: '2024 - 2025',
        description: 'Développement IA & Data (Bac +3)\n' +
            'Conception et déploiement de modèles Machine Learning, Manipulation de données (Big Data), Développement Fullstack (Front/Back) et intégration IA sous architecture DevOps. Certification RNCP Niveau 6.',
        images: [
            {
                url: '/images/epsi.webp',
                alt: 'EPSI',
                description: 'EPSI',
            },
        ],
    },
    {
        degree: 'Titre Professionnel',
        major: 'Développeur Web et Mobile',
        institution: 'Campus Numérique in the Alps',
        location: 'France',
        year: '2021 - 2023',
        description: 'Développement Logiciel Fullstack & Systèmes\n' +
            'Programmation (Java, Python, PHP, Js), Algorithmique, Bases de données, Architecture réseaux, Méthodes Agiles (analyse/tests/UI) et Auto-formation continue.',
        images: [
            {
                url: '/images/logo_campusnum.webp',
                alt: 'Campus Numérique in the Alps',
                description: 'Campus Numérique',
            },
        ],
    },
    {
        degree: 'DUT Techniques de Commercialisation',
        major: 'Commerce International',
        institution: 'IUT Amiens',
        location: 'Amiens, France',
        year: '2013 - 2015',
        description: 'Niveau : Diplôme validé',
        images: [
            {
                url: '/images/IUT.png',
                alt: 'IUT d\'Amiens',
                description: 'IUT d\'Amiens',
            },
        ],
    },
    {
        degree: 'Baccalauréat',
        major: 'Marketing',
        institution: 'Lycée Pierre d\'Ailly',
        location: 'Compiègne, France',
        year: '2011 - 2013',
        description: 'Niveau : Mention Bien',
        images: [
            {
                url: '/images/PierreDailly.png',
                alt: 'Lycée Pierre d\'Ailly',
                description: 'Campus Numérique',
            },
        ],
    }
] as const;

export const courses: readonly Course[] = [] as const;
