import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
  flex-direction: "column";
  /* flex-direction: ${(props) =>
    props.direction === true ? "column" : "row"}; */
  justify-content: space-around;
  position: relative;


`;

//do a z index fixed positioning
