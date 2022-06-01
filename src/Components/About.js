import React from "react";
import Navbar from "./Navbar";
import {
  AboutContainer,
  ParagraphContainer,
  Paragraph,
  AboutHeader,
} from "../Styles-Components/AboutStyles";
const About = () => {
  return (
    <AboutContainer>
    <Navbar direction="column"/>
      <AboutHeader>Who is Akiko Green?</AboutHeader>

    </AboutContainer>
  );
};

export default About;
