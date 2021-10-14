import React from 'react';
import './App.css';
import Exercise from './Pages/Exercise';
import Home from './Pages/Home';
import ThankYouPage from './Pages/ThankYouPage';

const {BrowserRouter :Router, Switch, Route} = require('react-router-dom')

function App() {

  const windoWidth : number = window.innerWidth
  const windowHeight : number = window.innerHeight

  return (
    <div className="App">
      
      <Router>
        <Switch >
            <Route path = "/exercise">
                <Exercise />
            </Route>
            <Route path = "/tnx">
                <ThankYouPage />
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