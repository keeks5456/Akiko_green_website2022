import React from "react"; 
import IMG1 from "../Images/qpq.gif";
import IMG2 from "../Images/interactive-app.jpg";
import IMG3 from "../Images/doggyDatesImg.png";
import IMG4 from "../Images/heidie-skin.png";
import IMG5 from "../Images/front-page-food.png"

//Icons
import { FaReact } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

//Social Media Icons
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaGithubAlt} from 'react-icons/fa'
import {FaMediumM} from 'react-icons/fa'

export const projectData = [
  {
    //qpq
    id: 1,
    image: IMG1,
    title: "QPQ",
    github: "https://github.com/bdb2381/qpq-frontend",
    demo: "",
  },
  {
    //interactive rating
    id: 2,
    image: IMG2,
    title: "Interactive Rating App",
    github: "https://github.com/keeks5456/Interactive-rating-app",
    demo: "https://akiko-interactive-rate-app.netlify.app/",
  },
  {
    //doggy dates
    id: 3,
    image: IMG3,
    title: "Doggy Dates",
    github: "https://github.com/carcarvroom/doggy-dates",
    demo: "https://youtu.be/egtJ2lOPFkM",
  },
  {
    //heidie
    id: 4,
    image: IMG4,
    title: "Heidie-Skin16",
    github: "https://github.com/mgdeveloper45/Heidi-Skin16",
    demo: "",
  },
  {
    //recipes
    id:5,
    image:IMG5,
    title: "Recipes With Frank",
    github: "https://github.com/alphaworks-react-team/RecipesWithFrank",
    demo: "https://recipes-22.herokuapp.com/"
  }
];

export const iconArray = [
  {
    id:'React',
    lang: <FaReact />,
    color: "blue",
    
  },
  {
    id:'Redux',
    lang: <SiRedux />,
    color: "purple"
  },
  {
    id:'Node',
    lang: <FaNodeJs />,
    color: "green"
  },
  {
    id:'Ruby',
    lang: <DiRuby />,
    color: "red"
  },
  {
    id:'Rails',
    lang: <SiRubyonrails />,
    color: "red"
  },
];

export const socialIcons = [
  {
    id:'twitter',
    social:<AiFillTwitterCircle />,
    color: "lightblue",
    link:"https://twitter.com/akikoDotJS"
  },
  {
    id:'github',
    social: <FaGithubAlt />,
    color: "black",
    link:"https://github.com/keeks5456"
  },
  {
    id:'medium',
    social: <FaMediumM />,
    color: "gold",
    link:"https://medium.com/@agreen17"
  },

]