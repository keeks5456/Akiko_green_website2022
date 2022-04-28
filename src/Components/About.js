import React from "react";
import { AboutContainer , ParagraphContainer, Paragraph} from "../Styles-Components/AboutStyles";
const About = () => {
  return (
    <AboutContainer>
      <h1>Who is Akiko Green?</h1>
      <ParagraphContainer>
        <Paragraph>A San Francisco native.</Paragraph>
      </ParagraphContainer>
    </AboutContainer>
  );
};

export default About;
