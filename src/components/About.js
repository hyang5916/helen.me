import React from 'react';
// import Text from 'react-native';
import { Link as RouterLink } from "react-router-dom";
import helenyang from '/Users/helenyang/Desktop/helens-web/src/helenyang.png'
import cynd from '../cynd.png';
import chik from '../chik.png';
import './About.css';
import cat from '/Users/helenyang/Desktop/helens-web/src/cat-in-black-silhouette.svg';
import heart from '/Users/helenyang/Desktop/helens-web/src/like.svg';
import Header from './Header.js';
import me from '../me.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

var phantom = {
  display: 'block',
  // padding: '10vh',
  paddingTop: '10vh',
  height: 'auto',
  width: '100%',
}

function About() {
    return (
      <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <header className="App-header">
          <div className="Nav">
            <Header />
          </div>
          <div>
          <img src={helenyang} className="App-name" alt="logo" />
          </div>
          <div>
          <img src={me} className="me" alt="logo" />
          </div>
          <div className="typewriter">
            <h1>developer + ml researcher + musician</h1>
          </div>
          <div className="about">
            <h1>Hello! I'm Helen, an undergraduate student at MIT majoring in computer science with a minor in cognitive science. 
              In the past, I've worked on projects in deep learning, full-stack development, Bayesian inference, data science, and natural language processing. 
              I love researching new tech and working on projects with wide-ranging applications.
              Outside of my major, some of my favorite things include violin performance (I've been 
              playing for 15 years!), puzzles, fencing (the sport), photography, Pokemon, and hot pot :)

            </h1>
            <h1>
            {/* Check out my favorite projects and ~artistic~ works using the nav bar at the top :) */}
            </h1>
          </div>
          <div>
          <img src={chik} className="chik" alt="logo" />
          <img src={cynd} className="cynd" alt="logo" />
          </div>
        </header>
        <footer className="App-footer">
          {/* <div style={phantom}/> */}
          {/* <div className="App-footer"> */}
            <h2 >
              made with <img src={heart} className="App-logo" alt="logo" /> and <img src={cat} className="App-logo" alt="logo" />
            </h2>
            <span className="social">
              <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/helen-yang02', "_blank")}>
                <LinkedInIcon fontSize="large" className="linkedIn"/>
              </IconButton>
              <IconButton aria-label="Github.com" onClick={() => window.open('https://github.com/hyang5916', "_blank")}>
                <GitHubIcon fontSize="large" className="gitHub"/>
              </IconButton>
            </span>
            
          {/* </div> */}
        </footer>
      </div>
    );
};
export default About;