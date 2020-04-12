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
        <Router basename={process.env.PUBLIC_URL} forceRefresh={true}> 
          <Switch>
            {/* <Route exact path={process.env.PUBLIC_URL + "/poetry"}>
              <Poetry />
            </Route> */}
            <Route path="/poetry">
              <Poetry />
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
            <Route path='/'>
              {/* exact */}
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
