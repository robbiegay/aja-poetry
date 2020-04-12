import React from 'react';
import Homepage from './Homepage';
import Poetry from "./Poetry";
import Poem from "./Poem";
import Faith from "./Faith";
import About from "./About";
import Login from "./Login";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          {/* basename="/aja-poetry" */}
          <Switch>
            <Route exact path="/"g>
              <Homepage />
            </Route>
            <Route exact path="/poetry">
              <Poetry />
            </Route>
            <Route path="/poetry">
              <Poem />
            </Route>
            <Route path="/faith">
              <Faith />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
