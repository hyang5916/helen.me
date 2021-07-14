import React from "react";
import Header from "./Header";
import helenyang from '/Users/helenyang/Desktop/helens-web/src/helenyang.png';
import cat from '/Users/helenyang/Desktop/helens-web/src/cat-in-black-silhouette.svg';
import heart from '/Users/helenyang/Desktop/helens-web/src/like.svg';
import icecreme1 from '../project_pics/icecreme-brulee1.png';
import icecreme2 from '../project_pics/icecreme-brulee1.png';
import inception2 from '../project_pics/inception2.png';
import xfair from '../project_pics/xfair.png';
import ocean from '../project_pics/ocean.png';
import neuron from '../project_pics/neuron.gif';
import './Projects.css';

function Projects() {
    return (
      <div className="Projects">
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <header className="App-header">
          <div className="Nav">
            <Header />
          </div>
          <div className="text">
              <h2>Here are some <span class="pinktext">projects</span> that I've worked on in the past! </h2>
          </div>
            <div className="icecreme">
                <a href="https://icecreme-brulee.herokuapp.com/" target="_blank">
                    <img src={icecreme1} className="creme1"/> 
                </a>
                {/* <div className="icecreme-title">
                <h1>icecreme.brulee</h1> 
            </div> */}
                <div className="icecremetext">
                    <h1 className="icecreme-title">icecreme.brulee</h1> 
                    <h2>icecreme.brulee is a full-stack web application game that I created with two friends.
                        Since our first semester of college was virtual, we wanted to make a fun way for new friends 
                        to get to know each other better. This website is a creative variation of the popular party game Paranoia. 
                        To use, a host can create a room, and friends can join using a uniquely-generated code. 
                    </h2> 
                    <h3>
                        Note: need at least two people to play
                    </h3>
                    <h2>
                        TypeScript, React, Node.js, MongoDB, Bootstrap
                    </h2>
                </div>
            </div>
            {/* <hr className="line"/>        */}
            <div className="inception2">
                {/* <img src={inception2} className="inception"/> */}
                <img src={neuron} className="inception"/>
            </div>
            <div>
                <a href="https://xfair.io/" target="_blank">
                    <img src={xfair} className="xfair"/>
                </a>
            </div>

            <div>
                <a href="https://anoceanincrisis.wordpress.com/" target="_blank">
                    <img src={ocean} className="ocean"/>
                </a>
            </div>
            
        </header>
        <footer className="App-footer">

        </footer>
    </div>
    )
}

export default Projects;