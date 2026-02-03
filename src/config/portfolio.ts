// src/config/config.ts
export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Srinidhi Susarla',
    title: 'Economics & Data Science Undergraduate | Behavioral Economics Researcher',
    image: getAsset('images/photo.png'), // Replace with your profile image
    description:
      'Economics undergraduate with a strong interest in behavioral economics, context architecture, and research-driven strategy. Currently pursuing Bachelor of Science in Economics with Data Science at CHRIST University, Bengaluru.\n' +
      '\n' +
      'Curious about how economics, resources, and human behavior interact to shape decisions, products, and brands. Trained in data analysis and visual communication, with a consistent focus on identifying the real problem before proposing solutions.\n' +
      '\n' +
      'Completed data analysis projects on waste collection systems and education in India, and conducted primary surveys on consumer behavior and bounded rationality.',
    tagline: 'Understanding behavior, shaping strategy',
    location: 'Bengaluru, Karnataka, India',
  },

  seo: {
    title: 'Srinidhi Susarla – Economics & Data Science Undergraduate',
    description:
      'Portfolio website showcasing research in behavioral economics, data analysis projects, and academic experience in economics and data science.',
  },

  animatedText: [
    'Economics Researcher',
    'Data Analyst',
    'Behavioral Economics Enthusiast',
    'Visual Designer',
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

  // Static blog entries
  blogs: [
    {
      title: 'Understanding Behavioral Economics in Consumer Choice',
      url: getAsset('static_page/behavioral_economics_blog.html'),
    },
  ],

  education: [
    {
      institution: 'CHRIST (Deemed to be University)',
      degree: 'Bachelor of Science in Economics with Data Science',
      year: 'June 2025 – Present',
      image: getAsset('images/education/christ_university.png'),
      description: [
        'Specializing in behavioral economics, context architecture, and research-driven strategy',
        'Focus on data analysis, visual communication, and problem identification',
      ],
    },
    {
      institution: 'Hill Top School, Jamshedpur',
      degree: 'Class XII (Higher Secondary)',
      year: '2022–23',
      image: getAsset('images/education/hilltop_school.png'),
      description: [
        'Scored 93.25% – 5th Rank in Batch',
        'Class X (Secondary): 90.8%',
      ],
    },
  ],

  certifications: [
    {
      title: 'Data Analysis with Python',
      file: getAsset('images/education/Certifications/data_analysis.svg'),
    },
    {
      title: 'Advanced Excel for Data Analysis',
      file: getAsset('images/education/Certifications/excel_cert.svg'),
    },
  ],

  experience: [
    {
      title: 'Graphic Designer',
      cardImage: getAsset('images/experience/equinomica.png'),
      place: 'Equinomica Department Newsletter',
      time: '(June 2025 – Present)',
      desp: [
        'Designed visual layouts to support clarity, readability, and structured storytelling of academic content',
        'Translated written material into clear visual narratives to improve engagement and comprehension',
        'Enhanced communication of complex economic concepts through effective visual design',
      ],
    },
    {
      title: 'Documentation Team Member',
      cardImage: getAsset('images/experience/alumni_cell.png'),
      place: 'Alumni Relations Cell, CHRIST University',
      time: '(Feb 2024 – Dec 2025)',
      desp: [
        'Assisted in maintaining structured records, reports, and documentation',
        'Strengthened skills in organization, precision, and institutional communication',
        'Developed expertise relevant to research environments and academic documentation',
      ],
    },
  ],

  projects: [
    {
      title: 'Waste Collection Systems Analysis in India',
      cardImage: getAsset('images/project/waste_collection.png'),
      description:
        'Conducted comprehensive data analysis on waste collection systems across India, identifying inefficiencies and proposing data-driven solutions for improved waste management.',
      Githublink: 'https://github.com/srinidhisusarla/waste-collection-analysis',
    },
    {
      title: 'Education Data Analysis in India',
      cardImage: getAsset('images/project/education_analysis.png'),
      description:
        'Analyzed educational data across different regions in India to identify patterns, gaps, and opportunities for improvement in the education system using statistical methods.',
      Githublink: 'https://github.com/srinidhisusarla/education-analysis',
    },
    {
      title: 'Menstrual Products Consumer Choice Survey',
      cardImage: getAsset('images/project/consumer_survey.png'),
      description:
        'Conducted primary research survey analyzing consumer choice and bounded rationality in menstrual product selection, exploring behavioral economics principles in everyday decision-making.',
      Githublink: 'https://github.com/srinidhisusarla/menstrual-products-survey',
    },
  ],

  research: [
    {
      title: 'Consumer Choice and Bounded Rationality in Menstrual Product Selection',
      authors: 'Srinidhi Susarla',
      conferences: 'Undergraduate Research, CHRIST University',
      researchYr: 2025,
      image: getAsset('images/research/menstrual_products_research.png'),
      citation: {
        vancouver:
          'Susarla S. Consumer Choice and Bounded Rationality in Menstrual Product Selection. CHRIST University Undergraduate Research. 2025.',
      },
      abstract:
        'Primary survey research examining how bounded rationality influences consumer decision-making in menstrual product choices, exploring behavioral economics principles in everyday consumption patterns.',
      link: '#', // Add link when available
    },
    {
      title: 'Data-Driven Analysis of Waste Collection Systems in India',
      authors: 'Srinidhi Susarla',
      conferences: 'Academic Project, CHRIST University',
      researchYr: 2025,
      image: getAsset('images/research/waste_collection_research.png'),
      citation: {
        vancouver:
          'Susarla S. Data-Driven Analysis of Waste Collection Systems in India. CHRIST University. 2025.',
      },
      abstract:
        'Comprehensive data analysis examining inefficiencies in waste collection infrastructure across India, proposing evidence-based recommendations for system improvement.',
      link: '#', // Add link when available
    },
  ],

  books: [
    {
      title: 'Behavioral Economics Resources',
      description:
        'Curated collection of resources on behavioral economics, context architecture, and decision-making frameworks.',
      image: getAsset('images/book_placeholder.png'),
      link: '#', // Add link when available
    },
  ],

  contact: {
    email: 'srinidhisusarla2104@gmail.com',
    linkedin: 'https://www.linkedin.com/in/srinidhi-susarla-b82187212/',
    github: 'https://github.com/srinidhisusarla',
    googleScholar: '#', // Add when you create a Google Scholar profile
    orcid: '#', // Add when you get an ORCID ID
  },
};

export default siteConfig;
