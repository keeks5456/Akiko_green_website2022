import styled from "styled-components";
import { motion } from "framer-motion";
export const AboutContainer = styled.div`
  height: 100vh;
  background-color: #28282b;

  /* 
  save this for another time
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    opacity: 0.6;
  } */
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  padding: 20px 0 20px 0;
  justify-content: space-around;
`;

export const ProfileImage = styled(motion.div)`
  background-color: darkgray;
  width: 300px;
  height: 350px;
  border-radius: 20px;
  border: 2px solid #7df9ff;
`;

export const AboutInfoContainer = styled.div`
  max-width: 550px;
  padding: 3px;
  position: relative;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    linear-gradient(101deg, #78e4ff, #ff48fa);
  margin-top: 10px;
`;

export const AboutInfo = styled.p`
  background: #222;
  color: white;
  padding: 2rem;
`;
