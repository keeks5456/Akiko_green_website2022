import React from "react";
import {
  AboutContainer,
  ParagraphContainer,
  Paragraph,
  AboutHeader,
} from "../Styles-Components/AboutStyles";
const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>Who is Akiko Green?</AboutHeader>
    <ParagraphContainer>
       <Paragraph>
          A San Francisco native. <br />
          From a kick ass Barista to a kick ass Software Engineer.
          <br />
          My journey began January 2020, right as the pandemic was underway.
          <br />
          With the world slowly shutting down, I knew I had to take the opportunity to give myself the life I wanted.<br/>
          Within that same year, Flatiron school accepted me into their bootcamp. There I learned how to be a Full-stack Software engineer. With a combination of building projects with Ruby and React & API's, I obtained the skills I needed to be on my own to become the Engineer I want to be.<br/>
          <br/>
          If I told my younger self that she would be a software engineer, she'd laugh in my face from disbelief. Being a woman in tech was not advice people motivated me to do. What I hope to gain from this continuous journey of becoming an amazing software engineer is to be able to give back to my community in the future.<br/>
          I want to motivated young POC that everything tech is for them.
          

        </Paragraph>
  </ParagraphContainer> 
    </AboutContainer>
  );
};

export default About;
