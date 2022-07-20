import styled from "styled-components";
import { motion } from "framer-motion";
export const AboutContainer = styled.div`
  height: 100%;
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
  width: 296px;
  height: 357px;
  border-radius: 20px;
  border: 2px solid #7df9ff;
  margin-bottom:20px;
`;

export const AboutInfoContainer = styled.div`
  /* max-width: 550px; */
  max-width: auto;
  padding: 3px;
  position: relative;

`;

export const AboutInfo = styled.p`

  color: white;
  padding: 2rem;
  text-align:center ;
`;
