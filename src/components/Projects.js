import React from "react";
import Header from "./Header";
import helenyang from '/Users/helenyang/Desktop/helens-web/src/helenyang.png';
import cat from '/Users/helenyang/Desktop/helens-web/src/cat-in-black-silhouette.svg';
import heart from '/Users/helenyang/Desktop/helens-web/src/like.svg';
import './Projects.css';

function Projects() {
    return (
      <div className="Projects">
        <header className="App-header">
          <div className="Nav">
            <Header />
          </div>
          <div className="text">
              <h2>Here are some projects that I've worked on in the past! </h2>
          </div>
          
        </header>
        <footer className="App-footer">
          <p>
            made with <img src={heart} className="App-logo" alt="logo" /> and <img src={cat} className="App-logo" alt="logo" />
          </p>
        </footer>
    </div>
    )
}

export default Projects;