import React from 'react'
//stlesw
import { WelcomeBannerContainer, Container, NameHeader, QuoteContainer } from '../Styles-Components/HomeStyles'
const Home = () => {
  return (
    <Container>
    <NameHeader>Akiko Green</NameHeader>
    <WelcomeBannerContainer>
    /*have this banner moving somehow*/
    <h2>Welcome To My Website</h2>
    </WelcomeBannerContainer>
    <QuoteContainer>
    <p>A Soft Woman Is A Wolf Caught In Meditation</p>
    </QuoteContainer>
    </Container>
  )
}

export default Home