import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaInstagram,
  FaLinkedinIn,
  FaRenren,
  FaUser,
} from "react-icons/fa6";

import {
  ChatApp,
  CodePenClone,
  ImageSharing,
  OpenAI,
  RestaurantClone,
} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uri: "https://www.facebook.com/okuw99/",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/orkhan-karimov-bb676226b/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/Orkhan647",
    color: "#fff",
  },
  {
    id: `instagram-${Date.now()}`,
    Icon: FaInstagram,
    uri: "https://www.instagram.com/orxan_keriimov/",
    color: "#ff0000",
  },
];

export const Menus = [
  
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "Transit Flow",
    imgSrc: RestaurantClone,
    gitURL: "https://loges.netlify.app",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "Nexcent",
    imgSrc: CodePenClone,
    gitURL: "https://github.com/Orkhan647/Nextcent-site",
  },
  {
    id: `openai-${Date.now()}`,
    name: "Movie App (with next.js)",
    imgSrc: OpenAI,
    gitURL: "https://github.com/Orkhan647/MovieApp",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Portfolio",
    imgSrc: ChatApp,
    gitURL: "https://github.com/Orkhan647/Portfolio",
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "MegaTechnique (html-css)",
    imgSrc: ImageSharing,
    gitURL: "https://github.com/Vetrivel-VP",
  },
];
