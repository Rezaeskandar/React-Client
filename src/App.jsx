import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import TMDBMovies from './Components/TMDBMovies';
import Nav from './Components/Nav';

import styled, { keyframes } from 'styled-components';

const animateBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const BackgroundContainer = styled.div`
  animation: ${animateBackground} 10s linear infinite;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <Router>
        <BackgroundContainer>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movies">
              <TMDBMovies />
            </Route>
          </Switch>
        </BackgroundContainer>
      </Router>
    </>
  );
}

export default App;