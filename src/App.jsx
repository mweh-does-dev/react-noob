import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Footer from './Footer';
import logo from './assets/logo.png';



const LogoContainer = styled.div`
  max-width: 3.5rem;
  grid-area: logo;
`;


const StyledImg = styled.img`
  width: 150%;
`;


const MainContainer = styled.div`
  grid-area: main;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 7rem repeat(3, 1fr) 10rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 
  "logo top top top top"
  "main main main main main"
  "main main main main main"
  "main main main main main"
  "footer footer footer footer footer";
  min-height: 100vh;
`;


function App() {

  return (
    <Router>
      <GridContainer>
        <LogoContainer>
          <StyledImg src={logo} alt="Logo" />
        </LogoContainer>
        <Navbar />
        <MainContainer>
          <Switch>
            <Route path="/about">
              <p>About</p>
            </Route>
            <Route path="/portfolio">
              <p>Portfolio</p>
            </Route>
            <Route path="/">
            </Route>
          </Switch>
          <h1>Hello Mweeeeh</h1>
        </MainContainer>
        <Footer />
      </GridContainer>
    </Router>
  
  );
}

// Läxa tills 7/3:
// Skapa din personliga footer i samråd med andra på Discord.
// titta på exempel på andra portföljer
// Du kan t.ex ha med linkedin-ikon och github-ikon figma-ikon?
// Tips att researcha: "fontawesome"
// Obs. Discord är ICKE frivilligt, men ni behöver inte göra hela läxan på discord
// Om du blir klar med detta, gör samma sak med Navbar
// Pusha ditt projek till din github, skicka länk till mig.


export default App;