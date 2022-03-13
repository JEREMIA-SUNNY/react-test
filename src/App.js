import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import React from 'react';
import Main from './Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
function App() {
  return (
    <Router>
      <div >
        <Navbar />

        <Switch>
          <Route exact path="/">
          <Main />
          </Route>
          
          <Route path="/About">
                <About />
          </Route>
         
          <Route path="/Contact">
            <Contact/>
          </Route>
         
          <Route path="/Gallery">
            <Gallery/>
          </Route>
        
        </Switch>

      </div>
    </Router>
  );
}

export default App;
