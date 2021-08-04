import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./pages/Game";
import Homepage from './pages/Homepage';
import News from './pages/News';
import Studio from './pages/Studio';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';


const App = () =>  {



  return (

    <div className="App" style={{boxSizing:"border-box"}}>
      <Router>
      <div className="header-box">
        <Header />
      </div>  
        <div className="content-box">
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/studio">
            <Studio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </div>
        <div className="footer-box">
        <Footer />
      </div>  
      </Router>
    </div>
  );
}

export default App;
