import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  margin: 0;
  flex-direction: "column";
  /* flex-direction: ${(props) =>
    props.direction === true ? "column" : "row"}; */
  justify-content: space-around;
  position: relative;
  top: 500px;

`;

//do a z index fixed positioning
