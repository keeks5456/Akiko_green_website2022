import React from "react";
import {
  ProjectContainer,
  ProjectCard,
  ProjectImg,
  ProjectCardContainer
} from "../Styles-Components/ProjectStyles";
import { projectData } from "../Utilities/ProjectData";
import Navbar from "./Navbar";
const Projects = () => {
  const allProjects = () => {
    if (projectData) {
      return projectData?.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectImg src={project.image} alt={project.title} />
          <h1>{project.title}</h1>
        </ProjectCard>
      ));
    }
  };

  allProjects();

  return (
    <>
      <ProjectContainer>
        <Navbar />
        <ProjectCardContainer>
        {allProjects()}
        </ProjectCardContainer>
      </ProjectContainer>
    </>
  );
};

export default Projects;
