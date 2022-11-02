import styled from "styled-components";
import { motion } from "framer-motion";
import akikoFace from "../Images/akikoFace.jpg";
import { socialIcons } from "../Utilities/ProjectData";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* height: 100vh; */
  margin: 0;
  background-color: #28282b;

  @media (max-width: 600px) {
  }
`;

export const NameHeader = styled(motion.h1)`
  font-family: "Trispace", sans-serif;
  /* text-shadow: 5px -1px 2px #fca311; */
  color: black;
  text-align: end;
  position: absolute;
  top: 3em;
  left: 19em;
  width: fit-content;

  /* @media (max-width: 600px) {
    margin-top: 63px;
    margin-left: 3em;
    font-size: 35px;
  } */
`;

export const WelcomeHeader = styled(NameHeader)`
  top: 6em;
  left: 17em;
`;

export const ProfileFaceImg = styled(motion.img)`
margin: 10px 0 0 10px ;
  height: 30rem;
  width: 19rem;
  background-image: url(${akikoFace});
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  border: transparent;
  background-color: black;
  box-shadow: 10px 10px 10px black;
  opacity: 0.55;
`;

export const AboutInfoContainer = styled.div`
  /* max-width: 550px; */
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  padding-right: 20px;
  position: absolute;
  top: 17em;
  max-width: auto;
  padding: 3px;
`;

export const AboutInfo = styled.p`
  display: flex;
  width: 32rem;
  position: absolute;
  left: 28rem;

  color: white;
  padding: 2rem;
  text-align: center;
`;


