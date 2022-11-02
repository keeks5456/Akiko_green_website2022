import styled from "styled-components";
import { motion } from "framer-motion";

export const NavContainer = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
  flex-direction: "column";
  justify-content: space-between;
  position: relative;
`;

export const SocialsContainer = styled(motion.div)`
  display: flex;
  flex-flow: row;
`;

export const SocalIcons = styled(motion.div)`
  font-size: 1rem;
  color: grey;

  &:hover {
    color: ${(props) => props.color};
  }
`;
