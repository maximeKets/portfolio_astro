/**
 * Professional experience configuration
 * Add your work experience here
 */

import type { Experience } from '../types';

export const experience: readonly Experience[] = [
    {
        title: 'Software Engineer',
        company: 'Proteinea',
        location: 'Cairo, Egypt',
        period: 'August 2025 - Present',
        description: 'Working on a full stack web application for a client using Angular, React, .NET, Entity Framework, SQL Server, Bootstrap, and jQuery.',
        technologies: ['Django', 'Flask', 'FastAPI', 'PostgreSQL', 'React', 'Docker', 'AWS', 'Cloud Computing'],
        images: [
            {
                url: 'https://indiebio.co/wp-content/uploads/2025/04/proteinea-logo.png',
                alt: 'Proteinea',
            },
        ],
    },
    {
        title: 'Academy Full Stack Developer',
        company: 'Luftborn',
        location: 'Cairo, Egypt',
        period: 'July 2024 - October 2024',
        description: 'Working on a full stack web application for a client using Angular, React, .NET, Entity Framework, SQL Server, Bootstrap, and jQuery.',
        technologies: ['.NET', 'Entity Framework', 'SQL Server', 'Angular', 'React', 'Bootstrap', 'jQuery'],
        images: [
            {
                url: 'https://www.luftborn.com/_nuxt/NavLogo.DsLRihGN.svg',
                alt: 'Luftborn',
            },
        ],
    },
    {
        title: 'Junior Research Assistant',
        company: 'Nile University',
        location: 'Cairo, Egypt',
        period: 'Summer 2023',
        description: 'Assisted in the development of internal software tools using ASP.NET Core. Implemented new features and fixed bugs in existing applications.',
        technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'Bootstrap'],
        images: [
            {
                url: 'https://top50women.com/wp-content/uploads/2023/08/Nile-university-1.jpg',
                alt: 'NU Research',
            },
        ],
    },
    {
        title: 'Junior Teaching Assistant',
        company: 'Nile University',
        location: 'Cairo, Egypt',
        period: 'Spring 2022, Fall 2022, Spring 2023, Fall 2023, Spring 2024',
        description: 'Assisted in teaching courses to students, helped them with their assignments and projects, and graded their exams and assignments.',
        technologies: ['C++', 'C#', 'Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React', 'MongoDB', 'MySQL', 'Docker'],
        images: [
            {
                url: 'https://top50women.com/wp-content/uploads/2023/08/Nile-university-1.jpg',
                alt: 'Nile University',
            },
        ],
    },
] as const;
