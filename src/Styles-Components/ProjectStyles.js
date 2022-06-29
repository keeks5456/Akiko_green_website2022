import styled from "styled-components";

export const ProjectContainer = styled.div`
  /* max-height:100% ; */
  margin: 0;
  height: 100vh;
  background-image: url("https://i.pinimg.com/originals/cd/3e/fa/cd3efa18f56b905bb1dace5f63d4df19.jpg");
  background-size: cover;
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  text-align: center;
`;

export const ProjectCard = styled.div`
  height: auto;
  padding: 10px;
`;

export const ProjectImg = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 10em;
  width: 17em;
`;

export const CardTitle = styled.h2`
  font-family: "Leckerli One", cursive;
  text-align: center;
`;
export const AnchorTag = styled.a`
  color: black;
  margin-bottom: 1em;
  padding: 10px;

  &:hover {
    color: #005f73;
  }
`;
