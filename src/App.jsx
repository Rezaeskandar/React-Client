import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Person from './Components/Person';
import Nav from './Components/Nav';

function App() {
 

  return (
    <>
          <Router>
            <Nav/>
                <Switch>
                    <Route exact path = "/">
                      <Home/>
                    </Route>
                    <Route path = "/Movies">
                      <Movies/>
                    </Route>

                    <Route path = "/persons:id">
                      <Person/>
                    </Route>
                </Switch>

            </Router>
    </>
  )
}

export default App
