import React from "react";
import { projectData } from "../Utilities/ProjectData";
import { motion } from "framer-motion";

//styles
import {
  ProjectContainer,
  ProjectCardContainer,
  ProjectCard,
  ProjectImg,
  CardTitle,
  AnchorTagContainer,
  AnchorTag,
  Icons,
} from "../Styles-Components/Project2Styles";

const Projects2 = () => {
  const allProjects = () => {
    if (projectData) {
      return projectData.map((project) => (
        <ProjectCard className="project-card">
          <ProjectImg className="card-image" src={project.image} alt={project.title}></ProjectImg>
          <CardTitle className="title">{project.title}</CardTitle>
          <AnchorTagContainer className="focus-point anchor-container">
            <AnchorTag className="anchor-tag" href={project.github} rel="noreferrer" target="_blank">
              Github
            </AnchorTag>
            <AnchorTag className="anchor-tag" href={project.demo} rel="noreferrer" target="_blank">
              Demo
            </AnchorTag>
          </AnchorTagContainer>
        </ProjectCard>
      ));
    }
  };

  allProjects();

  return (
    <ProjectContainer as={motion.div}>
      <ProjectCardContainer>{allProjects()}</ProjectCardContainer>
    </ProjectContainer>
  );
};

export default Projects2;
