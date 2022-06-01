import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: auto;
  margin: 0;
  background-color: #005f73;
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6c07d60-1481-4dce-af4a-de3bd075f07a/dc87vm4-3083eb14-77a7-4b76-8700-f56e0d41693a.png/v1/fill/w_1600,h_898,strp/san___princess_mononoke_minimalist_wallpaper____by_goldhue_dc87vm4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk4IiwicGF0aCI6IlwvZlwvYzZjMDdkNjAtMTQ4MS00ZGNlLWFmNGEtZGUzYmQwNzVmMDdhXC9kYzg3dm00LTMwODNlYjE0LTc3YTctNGI3Ni04NzAwLWY1NmUwZDQxNjkzYS5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KZtJFjLelYk5yTYAnE0P1Q4mNTgxighp_mSYO_J4rqc");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;

  /* background-image:${(props) =>
    props.backgroundImage ||
    "https://www.outfrontmedia.com/-/media/images/ofm/markets/san-francisco/san-francisco-hero.jpg"};  */
`;

export const NameHeader = styled.h1`
  margin-top: 1em;
  margin-left: 8em;
  font-family: "Inknut Antiqua", serif;
  color: white;
  font-size: 75px;
  letter-spacing:5px ;
`;

export const WelcomeBannerContainer = styled.div`
  text-align: center;
  -webkit-text-stroke: 2px white;
  font-family: "Inknut Antiqua", serif;
  font-size: 40px;
`;

export const QuoteContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const Quote = styled.p`
  font-size: 20px;
`;
