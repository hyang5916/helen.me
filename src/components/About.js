import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import helenyang from '/Users/helenyang/Desktop/helens-web/src/helenyang.png'
import cynd from '/Users/helenyang/Desktop/helens-web/src/cynd.png'
import './About.css';
import cat from '/Users/helenyang/Desktop/helens-web/src/cat-in-black-silhouette.svg';
import heart from '/Users/helenyang/Desktop/helens-web/src/like.svg';
import Header from './Header.js';

function About() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Nav">
            <Header />
          </div>
          <div>
          <img src={helenyang} className="App-name" alt="logo" />
          </div>
          <div className="typewriter">
            <h1>software developer + ml researcher + musician</h1>
          </div>
          <div className="about">
            <h1>Hello! I'm Helen, an undergraduate student at MIT double majoring in computer science and cognitive science. </h1>
          </div>
          <div>
          <img src={cynd} className="cynd" alt="logo" />
          </div>
        </header>
        <footer className="App-footer">
          <p>
            made with <img src={heart} className="App-logo" alt="logo" /> and <img src={cat} className="App-logo" alt="logo" />
          </p>
        </footer>
      </div>
    );
};
export default About;