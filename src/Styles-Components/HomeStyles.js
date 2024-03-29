import styled from "styled-components";
import { motion } from "framer-motion";
import akikoFace from "../Images/akikoFace.jpg";
import { socialIcons } from "../Utilities/ProjectData";

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 100%;
  /* height: 100vh; */
  margin: 0;
  background-color: #28282b;
  
  @media (max-width: 600px) {
  }
`;

export const NameHeader = styled(motion.h1)`
  width: max-content;
  display: inline-block;
  font-family: "Trispace", sans-serif;
  /* text-shadow: 5px -1px 2px #fca311; */
  color: black;
  font-size: 80px;
  letter-spacing: -3px;

  /* @media (max-width: 600px) {
    margin-top: 63px;
    margin-left: 3em;
    font-size: 35px;
  } */
`;

export const WelcomeHeader = styled(NameHeader)`
  font-size: 50px;
`;

export const ProfileFaceImg = styled(motion.img)`
  height: 30rem;
  width: 19rem;
  background-image: url(${akikoFace});
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  top: 6%;
  left: 8%;
  border-radius: 10px;
  border: transparent;
  background-color: black;
  box-shadow: 10px 10px 10px black;
  opacity: 0.55;
`;

export const AboutInfoContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  padding-right: 20px;
  max-width: auto;
  padding: 3px;


`;

export const AboutInfo = styled.p`
  color: white;
  padding: 2rem;
  text-align:center ;
`;


export const SocialsContainer = styled(motion.div)`
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  padding-right: 20px;
  position: absolute;
  top: 68%;
  left: 54%;
`;


export const SocialIcons = styled(motion.div)`
  font-size: 1rem;
  color: grey;
  display: flex;

  &:hover {
    color: ${(props) => props.color};
  }
`;
