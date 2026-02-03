// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Srinidhi Susarla',
    title: 'Economics & Data Science Undergraduate',
    image: getAsset('images/profile.png'), // replace with your photo file
    description:
      'Economics undergraduate with a strong interest in behavioural economics, context architecture, and research-driven strategy.\n' +
      '\n' +
      'Trained in data analysis and visual communication, with experience in primary research, survey design, and structured documentation.\n' +
      '\n' +
      'Curious about how economics, resources, and human behaviour interact to shape decisions, products, and institutions.',
    tagline: 'Behavioural Economics • Data Analysis • Research',
    location: 'Bengaluru, Karnataka, India',
  },

  seo: {
    title: 'Srinidhi Susarla – Economics & Data Science',
    description:
      'Portfolio of Srinidhi Susarla showcasing education, research interests, projects, and academic experience in economics and data science.',
  },

  animatedText: [
    'Economics Undergraduate',
    'Behavioural Economics',
    'Data Analysis',
    'Research & Strategy',
  ],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  blogs: [
    {
      title: 'Project Management & Research Reflections',
      url: getAsset('static_page/project_management_blog.html'),
    },
  ],

  education: [
    {
      institution: 'CHRIST (Deemed to be University), Bannerghatta Road Campus',
      degree: 'B.Sc. Economics with Data Science',
      year: '2022 – 2025',
      image: getAsset('images/education/christ_university.png'),
      description: [
        'Focus on behavioural economics, data analysis, and applied research',
      ],
    },
    {
      institution: 'Hill Top School, Jamshedpur',
      degree: 'Class XII (Higher Secondary)',
      year: '2021 – 2022',
      image: getAsset('images/education/hilltop_school.png'),
      description: ['93.25% – 5th Rank in batch'],
    },
    {
      institution: 'Hill Top School, Jamshedpur',
      degree: 'Class X (Secondary)',
      year: '2019 – 2020',
      image: getAsset('images/education/hilltop_school.png'),
      description: ['90.8%'],
    },
  ],

  certifications: [
    {
      title: 'Data Analysis & Visual Communication',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Advanced Excel', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Python (Basic)', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Java (Basic)', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Canva for Visual Communication', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
  ],

  experience: [
    {
      title: 'Graphic Designer',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Equinomica – Department Newsletter',
      time: '(June 2025 – Present)',
      desp: [
        'Designed visual layouts to improve clarity, readability, and academic storytelling',
        'Converted written content into structured visual narratives to enhance engagement',
      ],
    },
    {
      title: 'Documentation Team Member',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Alumni Relations Cell',
      time: '(Feb 2021 – Dec 2022)',
      desp: [
        'Maintained structured records, reports, and institutional documentation',
        'Developed organisational precision and formal communication skills',
      ],
    },
  ],

  projects: [
    {
      title: 'Waste Collection Systems in India',
      cardImage: getAsset('images/project/placeholder.png'),
      description:
        'Data analysis project examining efficiency and behavioural patterns in waste collection systems across Indian cities.',
      Githublink: '',
    },
    {
      title: 'Education Outcomes & Access in India',
      cardImage: getAsset('images/project/placeholder.png'),
      description:
        'Analytical study exploring educational access, outcomes, and socio-economic factors using structured datasets.',
      Githublink: '',
    },
    {
      title: 'Menstrual Products Consumer Survey',
      cardImage: getAsset('images/project/placeholder.png'),
      description:
        'Primary survey analysing consumer choice, bounded rationality, and behavioural influences in menstrual product adoption.',
      Githublink: '',
    },
  ],

  research: [
    {
      title: 'Behavioural Drivers of Consumer Choice in Essential Products',
      authors: 'Srinidhi Susarla',
      conferences: 'Undergraduate Research Project',
      researchYr: 2024,
      image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Susarla S. Behavioural drivers of consumer choice in essential products. Undergraduate Research Project, 2024.',
      },
      abstract:
        'An exploratory study examining how bounded rationality and contextual factors influence consumer decisions in essential goods.',
      link: '',
    },
  ],

  books: [],

  contact: {
    email: 'srinidhisusarla2104@gmail.com',
    linkedin: 'https://www.linkedin.com/in/srinidhi-susarla-b82187212/',
    github: '',
    googleScholar: '',
    orcid: '',
  },
};

export default siteConfig;
