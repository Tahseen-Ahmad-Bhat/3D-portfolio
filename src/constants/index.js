import {
  mobile,
  webdeveloper,
  backend,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  mern,
  movieRater,
  fashionClothing,
  recipeApp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: webdeveloper,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Intern",
    company_name: "Binary Systems",
    icon: mern,
    iconBg: "#383E56",
    date: "Jan 2022 - Jun 2022",
    points: [
      "Assisted in the development of React components for the frontend",
      "Learned and implemented basic CRUD operations with MongoDB",
      "Supported the team in debugging and testing tasks",
      "Participated in team meetings and contributed ideas for project improvement",
    ],
  },
  {
    title: "Technical Trainer",
    company_name: "Roboiotics Services LLP",
    icon: mern,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Jun 2023",
    points: [
      "Conducted training sessions on MERN stack development for beginners",
      "Prepared and delivered engaging and informative technical lectures",
      "Provided guidance and support to trainees during practical sessions",
      "Designed training materials and resources for the MERN stack curriculum",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tahseen proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tahseen does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Tahseen optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Rater",
    description:
      "Web-based platform that allows users to see and rate different movies, web series and TV series based on their experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movieRater,
    source_code_link:
      "https://github.com/Tahseen-Ahmad-Bhat/MovieReviewApp-Frontend.git",
    live_demo: "https://five-star-movie-review-app.netlify.app/",
  },
  {
    name: "Fashion Clothing",
    description:
      "A single page web application designed and developed for a Cloth House, using which people can buy different wearables online at the comfort of their home. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: fashionClothing,
    source_code_link:
      "https://github.com/Tahseen-Ahmad-Bhat/Elite-cothing-using-react-.git",
    live_demo: "https://fashion-clothing.netlify.app/",
  },
  {
    name: "Forkify",
    description:
      "A comprehensive website that allows users, especially cooking lovers to discover and prepare a wide variety of recipes.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: recipeApp,
    source_code_link: "https://github.com/Tahseen-Ahmad-Bhat",
    live_demo: "https://tahseens-frokify.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
