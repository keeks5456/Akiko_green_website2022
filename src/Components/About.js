import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  AboutContainer,
  ThoughtBox,
  AboutHeader,
  Intro,
  Happy,
} from "../Styles-Components/AboutStyles";

import { aboutData } from "../Utilities/AboutData";

const About = () => {
  

  const aboutMeData = () => {
    aboutData.map((data, index) => {
      return (
        <div key={index}>
          <Intro>{data.intro}</Intro>
          <Happy>{data.happy}</Happy>
        </div>
      );
    });
  };

  const handleClick = () => {
     aboutMeData();
    console.log("click")
  };

  return (
    <AboutContainer>
      <Navbar />
      <AboutHeader>Who is Akiko Green?</AboutHeader>
      {/*thought box here*/}
      <ThoughtBox>
        <div className="bubble">
        {/**/}
         <button onClick={() => handleClick()}>Next Info</button>
        </div>
        <div className="pointer"></div>
      </ThoughtBox>
    </AboutContainer>
  );
};

export default About;
