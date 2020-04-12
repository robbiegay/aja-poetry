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
            <Route exact path={process.env.PUBLIC_URL + '/'}>
              <Homepage />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + "/poetry"}>
              <Poetry />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/poetry"}>
              <Poem />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/faith"}>
              <Faith />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/about"}>
              <About />
            </Route>
            <Route path={process.env.PUBLIC_URL + "/login"}>
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
