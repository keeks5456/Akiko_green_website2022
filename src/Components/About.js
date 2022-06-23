import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  AboutContainer,
  ThoughtBox,
  AboutHeader,
} from "../Styles-Components/AboutStyles";

import { aboutData } from "../Utilities/AboutData";

const About = () => {
  const [aboutMe, setAboutMe] = useState({
    id: 0,
    intro: "",
    goodFeels: "",
    // badFeels: "",
  });

  useEffect(() => {
    aboutMeData();
  }, []);

  const aboutMeData = () => {

    aboutData.forEach((data) => {
      let id = data.id;
      let info = data.intro;
      let happyFeels = data.happy;

      setAboutMe({
        id: id,
        intro: info,
        goodFeels: happyFeels,
      });
    });
  };

  const handleClick = () => {
    aboutMeData();
  };

  console.log(aboutMe)
  return (
    <AboutContainer>
      <Navbar />
      <AboutHeader>Who is Akiko Green?</AboutHeader>
      {/*thought box here*/}
      <ThoughtBox>
        <div className="bubble">
          <div key={aboutMe.id}>
          <div>{aboutMe.intro}</div>
          <div>{aboutMe.goodFeels}</div>
          </div>
          <button onClick={() => handleClick()}>Next</button>
        </div>
        <div className="pointer"></div>
      </ThoughtBox>
    </AboutContainer>
  );
};

export default About;
