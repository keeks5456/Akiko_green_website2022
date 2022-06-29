import React from "react";
import { motion } from "framer-motion";
import { iconArray } from "../Utilities/ProjectData";
import {
  ProjectContainer,
  ProjectCard,
  ProjectImg,
  ProjectCardContainer,
  CardTitle,
  AnchorTag,
  LanguagesContainer,
  Icons,
} from "../Styles-Components/ProjectStyles";
import { projectData } from "../Utilities/ProjectData";
const Projects = () => {
  const allProjects = () => {
    if (projectData) {
      return projectData?.map((project) => (
        <ProjectCard
          as={motion.div}
          key={project.id}
          initial={{ x: "-100", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            delay: 1,
            default: { duration: 2 },
          }}
        >
          <ProjectImg src={project.image} alt={project.title} />
          <CardTitle>{project.title}</CardTitle>
          <AnchorTag href={project.github} rel="noreferrer" target="_blank">
            Github
          </AnchorTag>
          <AnchorTag href={project.demo} rel="noreferrer" target="_blank">
            Demo
          </AnchorTag>
        </ProjectCard>
      ));
    }
  };

  allProjects();

  const displayLanguages = () => {
    return iconArray.map((icon) => (
      <>
        <Icons key={icon.id} color={icon.color}>
          {icon.lang}
        </Icons>
      </>
    ));
  };

  return (
    <ProjectContainer as={motion.div}>
      <LanguagesContainer>{displayLanguages()}</LanguagesContainer>
      <ProjectCardContainer>{allProjects()}</ProjectCardContainer>
    </ProjectContainer>
  );
};

export default Projects;
