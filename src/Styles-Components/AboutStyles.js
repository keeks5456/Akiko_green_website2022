import styled from "styled-components";
//parent
export const AboutContainer = styled.div`
  
  height: 100vh;
  margin-top: 0;
  text-align: center;
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1fe56053-597e-45b3-a3b1-f26197574147/deobhf7-327ab1bd-4c93-4a81-8b0d-9753cea94157.png/v1/fill/w_1280,h_1280,q_80,strp/howl_s_moving_castle___sophia_hatter_minimalist_by_kijugo_deobhf7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzFmZTU2MDUzLTU5N2UtNDViMy1hM2IxLWYyNjE5NzU3NDE0N1wvZGVvYmhmNy0zMjdhYjFiZC00YzkzLTRhODEtOGIwZC05NzUzY2VhOTQxNTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.82EqByWkiRFcVDGF8k_3KEesqeNLWRQ5RD2RKXB743A");
  background-size: cover;
  background-position: top center;
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

export const AboutHeader = styled.h1`
  
`;

export const ParagraphContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 701px;
  height: 336px;
  background-color: white;
  padding: 10px;
  border-radius: 34px;
  &:before {
    content: "";
    position: absolute;
    opacity: 0.3;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const Paragraph = styled.p`
  position: relative;
  font-weight: bold;
  color: #000000;
`;
