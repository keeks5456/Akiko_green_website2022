import React from "react";
import Navbar from "./Navbar";
import {
  AboutContainer,
  ThoughtBox,
  Paragraph,
  AboutHeader,
  
} from "../Styles-Components/AboutStyles";
const About = () => {
  return (
    <AboutContainer>
      <Navbar />
      <AboutHeader>Who is Akiko Green?</AboutHeader>
      {/*thought box here*/}
      <ThoughtBox>
        <div className="bubble">!</div>
        <div className="pointer"></div>
      </ThoughtBox>
  
    </AboutContainer>
  );
};

export default About;
