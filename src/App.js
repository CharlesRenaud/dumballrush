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

  const [feed, setFeed] = useState(< a className="twitter-timeline" data-lang="fr" data-width="500" data-height="1500" data-theme="dark" href="https://twitter.com/DumballRush?ref_src=twsrc%5Etfw">Tweets by DumballRush</a>)

 

  return (

    <div className="App" style={{boxSizing:"border-box"}}>
      <Router>
      <Header  />
        <div>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/news">
            <News feed={feed} />
          </Route>
          <Route exact path="/studio">
            <Studio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
