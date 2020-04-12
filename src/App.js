import React from 'react';
import Homepage from './Homepage';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return(
    <>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/blog">
                {/* <Blog /> */}
              </Route>
              <Route path="/blog">
                {/* <BlogPost /> */}
              </Route>
              <Route path="/portfolio">
                {/* <Portfolio /> */}
              </Route>
              <Route path="/login">
                {/* <Music /> */}
              </Route>
            </Switch>
          </Router>
        </div>
      </>
  );
}

export default App;
