import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  /* width: 100%; */
  height: 100vh;
  margin: 0;
  background: #28282b;
  @media (max-width: 600px) {

  }
`;

export const NameHeader = styled(motion.h1)`
  display: inline-block;
  font-family: 'Trispace', sans-serif;
  /* text-shadow: 5px -1px 2px #fca311; */
    color: black;
    font-size: 80px;
    letter-spacing: -3px;

  @media (max-width: 600px) {
    margin-top: 63px;
    margin-left: 3em;
    font-size: 35px;
  }
`;

export const WelcomeHeader = styled(NameHeader)`
  font-size: 50px;
`;
