import styled from "styled-components";
import { motion } from "framer-motion";
export const ProjectContainer = styled.div`
  margin: 0;
  height: 100vh;
  background-color: #28282b;
  background-size: cover;
`;

export const ProjectCardContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  text-align: center;
`;

export const ProjectCard = styled.div`
  margin-top: 40px;
  border-radius: 15px;
  background-color: #fff;
`;

export const ProjectImg = styled.img`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const CardTitle = styled.h2`
  font-family: "Leckerli One", cursive;
  text-align: center;
`;
export const AnchorTag = styled.a`
  color: black;
  padding: 10px;
  &:hover {
    color: #005f73;
  }
`;

export const LanguagesContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Icons = styled(motion.h1)`
  font-size: 7rem;
  color: grey;
  transition: all 1s ease-out;

  &:hover {
    color: ${(props) => props.color};
   transform:scale(1.1) ;
  }
`;
