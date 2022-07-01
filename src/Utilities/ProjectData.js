import React from "react"; 
import IMG1 from "../Images/qpq.gif";
import IMG2 from "../Images/interactive-app.jpg";
import IMG3 from "../Images/doggyDatesImg.png";
import IMG4 from "../Images/heidie-skin.png";

//Icons
import { FaReact } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";



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
    id: 4,
    image: IMG4,
    title: "Heidie-Skin16",
    github: "https://github.com/mgdeveloper45/Heidi-Skin16",
    demo: "",
  },
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
