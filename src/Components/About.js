import React from "react";
import {
  AboutContainer,
  ImageContainer,
  ProfileImage,
} from "../Styles-Components/AboutStyles";

const About = () => {
  return (
    <AboutContainer id="about">
      <ImageContainer>
        <ProfileImage></ProfileImage>
        <ProfileImage></ProfileImage>
        <ProfileImage></ProfileImage>
      </ImageContainer>
    </AboutContainer>
  );
};

export default About;
