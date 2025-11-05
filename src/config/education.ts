/**
 * Education and courses configuration
 * Add your educational background and courses here
 */

import type { Education, Course } from '../types';

export const education: readonly Education[] = [
  {
    degree: 'Bachelor of Computer Science',
    major: 'Biomedical Informatics',
    institution: 'Nile University',
    location: 'Giza, Egypt',
    year: '2021-2025',
    description: 'Relevant coursework: Data Structures, Algorithms, Database Management, Software Engineering, Biomedical Informatics, Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems, Computer Networks, Operating Systems, Computer Architecture, Computer Organization, Computer Security, Computer Graphics, Computer Systems',
    images: [
      {
        url: 'https://www.nu.edu.eg/sites/default/files/2024-06/whatsapp_image_2024-06-25_at_1.33.17_pm.jpeg',
        alt: 'Nile University',
        description: 'Nile University Campus',
      },
    ],
  },
] as const;

export const courses: readonly Course[] = [
  {
    title: 'IOT',
    description: 'IOT course',
    institution: 'ITI',
    location: 'Cairo, Egypt',
    year: '2023-2024',
    images: [
      {
        url: 'https://iti.gov.eg/assets/images/ColoredLogo.svg',
        alt: 'ITI',
      },
    ],
  },
  {
    title: '.NET full stack course',
    description: '.NET full stack course',
    institution: 'Digital Egypt Pioneers Initiative - DEPI',
    location: 'Cairo, Egypt',
    year: '2024',
    images: [
      {
        url: 'https://depi.gov.eg/assets/images/proAr.png',
        alt: 'DEPI',
      },
    ],
  },
] as const;
