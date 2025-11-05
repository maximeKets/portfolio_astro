/**
 * Extracurricular activities configuration
 * Add your leadership roles and activities here
 */

import type { ExtraCurricularRole, ExtraCurricularActivity } from '../types';

export const extraCurricularRoles: readonly ExtraCurricularRole[] = [
  {
    role: 'Vice President',
    institution: 'NUICPC',
    location: 'Nile University',
    year: '2023-2024',
    images: [
      { url: 'https://i.ibb.co/FbSmTsBw/486635391-1079182187577545-400541279663759578-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/1fLrcywC/487093779-1079182100910887-5326561587880729477-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/mVJBpngp/486181151-1075334944628936-2845216629795518112-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/yn7ccHM1/486507182-1075334774628953-7774379668898780058-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/35xMtCDV/486104871-1075333997962364-6362307301859416001-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/fzL5qvvS/486248194-1074582274704203-6554786202979315108-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/VYxSXZF5/483525641-1070070571822040-3631060112169135578-n.jpg', alt: 'NUICPC' },
    ],
  },
  {
    role: 'Head of SWE Committee',
    institution: 'GDG Nile University',
    location: 'Nile University',
    year: '2024-2025',
    images: [
      {
        url: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487392755_1081523057343458_8188220183188100569_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FLS-aCW1uJUQ7kNvwGbXwyf&_nc_oc=AdlFYb4-vwoTMNuaHrlFgSR161QWwnQ7VtWfb-8Y_JyoVI37WuwF6Qwu3I3tjawZM10&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=l69wa6Aj6hbCl-b5xEZigg&oh=00_AfHAACCAl3WKApFTelz0kJWcQbEIeAxPXnHV1WHsRoCEJA&oe=6806DA4B',
        alt: 'Nile University',
        description: 'Nile University Campus',
      },
    ],
  },
  {
    role: 'Member and Mentor',
    institution: 'NUICPC',
    location: 'Nile University',
    year: '2021-2024',
    images: [
      { url: 'https://i.ibb.co/Y43vdxrV/484501388-1069637098532054-11435862832739630-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/WWBPM6GG/484804363-1069556495206781-5476304623000762204-n.jpg', alt: 'Nile University' },
      { url: 'https://i.ibb.co/wNFg7VkR/484643522-1069479561881141-6397451359649224021-n.jpg', alt: 'Nile University' },
      { url: 'https://i.ibb.co/ZR4dJLyv/482238905-1065269192302178-4747858326277637907-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/ymJN2v00/482246774-1065269122302185-3150232388297078773-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/vxYBzH64/482027750-1063466179149146-4344066305683793822-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/j9K3Smq8/481466571-1061263352702762-7633575959379424468-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/S7R12bRy/484136881-1069556391873458-1395371296655723435-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/zWVHwSPH/484516365-1070411428454621-8390835945290794938-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/27L4bpQY/484381461-1069479998547764-3349306911678016045-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/MyFj8V6s/484140894-1069479545214476-3560564697839847145-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/Sw9psfwX/484640131-1069484585213972-5052989750649951025-n.jpg', alt: 'NUICPC' },
      { url: 'https://i.ibb.co/v6QLXpqg/486627143-1081260057369758-4195012303656403802-n.jpg', alt: 'NUICPC' },
    ],
  },
  {
    role: 'Member',
    institution: 'TEDxNU',
    location: 'Nile University',
    year: '2021-2022',
    images: [
      {
        url: 'https://www.nu.edu.eg/sites/default/files/2024-06/whatsapp_image_2024-06-25_at_1.33.17_pm.jpeg',
        alt: 'Nile University',
        description: 'Nile University Campus',
      },
    ],
  },
] as const;

export const extraCurricularActivities: readonly ExtraCurricularActivity[] = [
  {
    title: 'Head of IT & Cheating Control Committee',
    description: 'NUCPA',
    institution: 'NUCPA',
    location: 'Nile University',
    year: '2025',
    images: [
      { url: 'https://i.ibb.co/N6FsYfLW/NP100582-2.jpg', alt: 'Nile University', description: 'Nile University Campus' },
      { url: 'https://i.ibb.co/355vdbMJ/NP109982-1.jpg', alt: 'Nile University', description: 'Nile University Campus' },
      { url: 'https://i.ibb.co/Frhbfyq/NP100626-2-1.jpg', alt: 'Nile University', description: 'Nile University Campus' },
    ],
  },
  {
    title: 'SWE Sessions',
    description: '',
    institution: 'GDG Nile University',
    location: 'Nile University',
    year: '2025',
    images: [
      {
        url: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487509808_1082047970624300_6971553578124341594_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aHeR-Y9xLCoQ7kNvwEt75GT&_nc_oc=AdmO0ISS5S83f5_spVUXrCY5OhawFzqurVuym-4vhEnrUw3H4-jlAWwwPr51_y97zEE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=yluqC4DSHyLfMjmLwL8hWA&oh=00_AfHf2HeyPANMbQPqIrHx24nzfxeuQkMaeMbP9SlpaTW-gg&oe=6806D086',
        alt: 'Nile University',
        description: 'Nile University Campus',
      },
    ],
  },
  {
    title: 'NUICPC Problem Solving Sessions',
    description: 'Mentored students in problem solving and competitive programming, started as a member and became a mentor, from level 0 to level 2, and helped them to qualify for the ECPC Finals',
    institution: 'NUICPC',
    location: 'Nile University',
    year: '2022-2025',
    images: [
      {
        url: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/486652074_1077701407725623_8749819316280105843_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=925gSLld9YIQ7kNvwH1Tnis&_nc_oc=AdkNGFJJzloJMZ7UyMqzyxpop7LgOAS4wDf37phzksSB9zyg6YYoJn9DvQBkTRCPe3c&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=2jkQxIt1NA2bEK9hDA_sLw&oh=00_AfEFWMQ8TXpm7J7GNg31NTQtj51-xBK0gA96v3e3FXFOXw&oe=6806D41D',
        alt: 'Nile University',
        description: 'Nile University Campus',
      },
      {
        url: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487509808_1082047970624300_6971553578124341594_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aHeR-Y9xLCoQ7kNvwEt75GT&_nc_oc=AdmO0ISS5S83f5_spVUXrCY5OhawFzqurVuym-4vhEnrUw3H4-jlAWwwPr51_y97zEE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=yluqC4DSHyLfMjmLwL8hWA&oh=00_AfHf2HeyPANMbQPqIrHx24nzfxeuQkMaeMbP9SlpaTW-gg&oe=6806D086',
        alt: 'Nile University',
        description: 'Nile University Campus',
      },
      {
        url: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/484516365_1070411428454621_8390835945290794938_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eGV6obo35CwQ7kNvwEna_H_&_nc_oc=AdkJaDZSOxHorBC4LMHappVliFJtwF5f7D8dyRSgS9Dn6aLdg1YEnE6taP2Ig3sbyQs&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=mEX3OZGsZeCySB76oTVkRQ&oh=00_AfEuFzuaNHYsYm3DLGnEWPCQYRyyQfVNh64r__8G_DKNaA&oe=6806E9D5',
        alt: 'Nile University',
        description: 'Nile University Campus',
      },
    ],
  },
] as const;
