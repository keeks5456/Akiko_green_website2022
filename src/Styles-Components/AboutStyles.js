import styled from "styled-components";
import { motion } from "framer-motion";
export const AboutContainer = styled.div`
  height: 100%;
  background-color: #28282b;
  /* background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1fe56053-597e-45b3-a3b1-f26197574147/deobhf7-327ab1bd-4c93-4a81-8b0d-9753cea94157.png/v1/fill/w_1280,h_1280,q_80,strp/howl_s_moving_castle___sophia_hatter_minimalist_by_kijugo_deobhf7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzFmZTU2MDUzLTU5N2UtNDViMy1hM2IxLWYyNjE5NzU3NDE0N1wvZGVvYmhmNy0zMjdhYjFiZC00YzkzLTRhODEtOGIwZC05NzUzY2VhOTQxNTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.82EqByWkiRFcVDGF8k_3KEesqeNLWRQ5RD2RKXB743A");
  background-size: cover;
  background-position: top center; */
  /* 
  save this for another time
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    opacity: 0.6;
  } */
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  padding: 20px 0 20px 0;
  justify-content: space-around;
 
`;

export const ProfileImage = styled(motion.div)`
  background-color: darkgray;
  width: 300px;
  height: 350px;
  border-radius: 20px;
  border: 2px solid #7DF9FF ;
`;

export const AboutInfoContainer = styled.div`
  max-width: 550px;
  padding: 3px;
  position: relative;
  background:linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #78e4ff, #ff48fa); ;
  /* background: linear-gradient(to top, #28282b, 25%, #7DF9FF 75%); */
  margin-top: 10px;
`;

export const AboutInfo = styled.p`
  background: #222;
  color: white;
  padding: 2rem;
`;

// export const ThoughtBox = styled.div`
//   margin-top: 3em;
//   opacity: 0.7;

//   animation-name: floating;
//   animation-duration: 3s;
//   animation-iteration-count: infinite;
//   animation-timing-function: ease-in-out;
//   margin-left: 30px;
//   margin-top: 5px;

//   @keyframes floating {
//     from {
//       transform: translate(0, 0px);
//     }
//     65% {
//       transform: translate(0, 15px);
//     }
//     to {
//       transform: translate(0, -0px);
//     }
//   }
// `;
