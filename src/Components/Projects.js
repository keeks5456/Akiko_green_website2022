import React from "react";
import { motion } from "framer-motion";
import {
  ProjectContainer,
  ProjectCard,
  ProjectImg,
  ProjectCardContainer,
  CardTitle,
  AnchorTag,
} from "../Styles-Components/ProjectStyles";
import { projectData } from "../Utilities/ProjectData";
import Navbar from "./Navbar";
const Projects = () => {
  const allProjects = () => {
    if (projectData) {
      return projectData?.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectImg src={project.image} alt={project.title} />
          <CardTitle>{project.title}</CardTitle>
          <AnchorTag href={project.github} rel="noreferrer" target="_blank">Github</AnchorTag>
          <AnchorTag href={project.demo} rel="noreferrer" target="_blank">Demo</AnchorTag>

        </ProjectCard>
      ));
    }
  };

  allProjects();

  /* drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}*/
  return (
    <ProjectContainer>
    <Navbar />
    <ProjectCardContainer>
         
          {allProjects()}
    
          </ProjectCardContainer>
      </ProjectContainer>
  );
};

export default Projects;
