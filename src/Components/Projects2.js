import React from "react";
import { projectData } from "../Utilities/ProjectData";
import { iconArray } from "../Utilities/ProjectData";
import { motion } from "framer-motion";

//styles
import {
  ProjectContainer,
  ProjectCardContainer,
  ProjectCard,
  ProjectImg,
  CardTitle,
  AnchorTag,
  LanguagesContainer,
  Icons,
} from "../Styles-Components/Project2Styles";
const Projects2 = () => {
  const allProjects = () => {
    if (projectData) {
      return projectData.map((project) => (
        <ProjectCard>
          <ProjectImg src={project.image} alt={project.title}></ProjectImg>

          {/* <CardTitle>{project.title}</CardTitle>
            <a href={project.github} rel="noreferrer" target="_blank">
              Github
            </a>
            <AnchorTag href={project.demo} rel="noreferrer" target="_blank">
              Demo
      </AnchorTag> */}
        </ProjectCard>
      ));
    }
  };

  allProjects();

  const displayLanguages = () => {
    return iconArray.map((icon) => (
      <>
        <Icons className="icon" key={icon.id} color={icon.color}>
          {icon.lang}
        </Icons>
      </>
    ));
  };

  return (
    <ProjectContainer as={motion.div}>
    <LanguagesContainer  id="projects">{displayLanguages()}</LanguagesContainer>
    <ProjectCardContainer>{allProjects()}</ProjectCardContainer>
    </ProjectContainer>
  );
};

export default Projects2;
