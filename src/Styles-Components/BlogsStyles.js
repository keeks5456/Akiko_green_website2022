import styled from "styled-components";

export const BlogContainer = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column ;
  background-color: #005f73;
  justify-content: space-evenly;
`;

export const BlogCard = styled.div`
  padding: 0;
  display: flex;
  border: 2px solid green;
  margin: 10px 10px 10px 0;
  align-items: center;
  text-align: center;
  width: 48em;
  background-color: white;
  font-size: large;
  font-weight: bold;
`;

export const BlogImg = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 10em;
  width: 16em;
`;

export const CardTitle = styled.h3`
  padding-bottom: 1em;
  font-family: "Leckerli One", cursive;
`;

export const AnchorTag = styled.a`
  color: black;
  margin-bottom: 1em;
  transition: all 1s ease-out;

  &:hover {
    transition: all 1s ease-in-out;
    color: #005f73;
  }
`;
