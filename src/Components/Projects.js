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
const Projects = () => {
  const allProjects = () => {
    if (projectData) {
      return projectData?.map((project) => (
        // <ProjectCard key={project.id}>
        <motion.div
          key={project.id}
          whileHover={{
            scale: 1.02,
          }}
          transition={{ duration: 0.3}}
        >
          <ProjectImg src={project.image} alt={project.title} />
          <CardTitle>{project.title}</CardTitle>
          <AnchorTag href={project.github} rel="noreferrer" target="_blank">
            Github
          </AnchorTag>
          <AnchorTag href={project.demo} rel="noreferrer" target="_blank">
            Demo
          </AnchorTag>
        </motion.div>
        // </ProjectCard>
      ));
    }
  };

  allProjects();

  return <ProjectContainer as={motion.div} >{allProjects()}</ProjectContainer>;
};

export default Projects;
