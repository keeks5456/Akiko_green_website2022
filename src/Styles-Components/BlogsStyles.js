import styled from "styled-components";
import { motion } from "framer-motion";
export const BlogContainer = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: #28282b;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 14px;
  padding:30px 14px 14px 14px;

`;

export const BlogCard = styled.div`
  background: darkgray;
  text-align: center;
  height: 100%;
  padding: 10px;
`;

export const BlogImg = styled.img`
  width: 353px;
  height: 170px;
`;

export const CardTitle = styled.h4`
  padding-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif ;
  padding-top:14px;
`;



export const ArticleP = styled.p`
  font-size: 13px;
  padding-bottom:10px ;
  font-family: Arial, Helvetica, sans-serif ;

`

export const ArticleLink = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  
`;
