import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Exercise from './Pages/Exercise';
import Home from './Pages/Home';
import Tnx from './Pages/Tnx';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch >
            <Route path = "/exercise">
                <Exercise />
            </Route>
            <Route path = "/tnx">
                <Tnx />
            </Route>
            <Route path = "/">
                <Home />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
