import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  git,
  docker,
  aws,
  portfolio,
  LinkSafe,
  Amazon_Clone,
  Bookmart,
  Clat
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
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: mobile,
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
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
];





const projects = [
  {
    name: "Mansoor Patan",
    description:
    "A dynamic 3D portfolio built with Three.js and React Three Fiber, showcasing my skills, projects, and creative expertise through interactive web experiences.",
        tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React Three Fiber ",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/iammansoor15/LinkSafe--AI-Powered-URL-Safety-Checker",
  },
  {
    name: "LinkSafe",
    description:
      "Link Safe is a URL analysis tool that detects whether a link is safe or malicious using a machine learning algorithm. It features a Flask backend and a React frontend, offering users a quick and reliable way to test suspicious URLs.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: LinkSafe,
    source_code_link: "https://github.com/iammansoor15/LinkSafe--AI-Powered-URL-Safety-Checker",
  },
  {
    name: "Amazon Clone",
    description:
    "A full-featured Amazon-like eCommerce platform built using the MERN stack (MongoDB, Express, React, Node.js). Users can register, log in, search, filter by product type, add items to cart, and place orders. The app also includes an order tracking system to view order and delivery statu",    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: Amazon_Clone,
    source_code_link: "https://amaazonn.onrender.com/",
  },
  {
    name: "BookMart",
    description:
    "Bookmart is a simple and efficient platform for managing book rentals, purchases, and exchanges. Seekers can browse, rent, or buy books by genre, while owners can list books to rent, sell, or exchange and handle seeker requests with ease.",
    tags: [{
      name: "NextJS",
      color: "blue-text-gradient",
    },
    {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: Bookmart,
    source_code_link: "https://github.com/iammansoor15/BookMart",
  },
  {
    name: "ChatBot for CLAT",
    description:"A chatbot for CLAT aspirants that answers exam-related FAQs using NLP (spaCy) and fuzzy matching (RapidFuzz). Handles typos, paraphrased queries, and offers quick, relevant responses.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Clat,
    source_code_link: "https://github.com/iammansoor15/Chatbot_for_CLAT",
  },
];

export { services, technologies, projects };
