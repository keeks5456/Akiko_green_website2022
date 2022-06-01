import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  margin: 0;
  flex-direction:"column" ;
  /* flex-direction: ${(props) => props.direction === true ? "column" : "row"}; */
  justify-content: end;
  font-size: 1.5em;
  top: 0;
  width: 100%;
`;

//do a z index fixed positioning
