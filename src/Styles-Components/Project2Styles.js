import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectContainer = styled.div`
padding-bottom: 5em;
  height: 100%;
  background-color: #28282b;
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const ProjectCard = styled.div`
    transition: all 1s ease-out;

  &:hover{

    transform: scale(0.95);
  }
`;

export const ProjectImg = styled.img`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 10rem;
  width: 15rem;
`;

export const CardTitle = styled.h2`
  font-family: "Leckerli One", cursive;
  text-align: center;
`;
export const AnchorTag = styled.a`
  color: black;
`;

export const LanguagesContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Icons = styled(motion.h1)`
  font-size: 3rem;
  color: grey;
  transition: all 1s ease-out;

  &:hover {
    color: ${(props) => props.color};
    transform: scale(1.1);
  }
`;