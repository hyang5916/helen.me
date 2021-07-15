import React from "react";
import Header from "./Header";
import helenyang from '/Users/helenyang/Desktop/helens-web/src/helenyang.png';
import cat from '/Users/helenyang/Desktop/helens-web/src/cat-in-black-silhouette.svg';
import heart from '/Users/helenyang/Desktop/helens-web/src/like.svg';
import icecreme1 from '../project_pics/icecreme-brulee1.png';
import icecreme2 from '../project_pics/icecreme-brulee1.png';
import inception2 from '../project_pics/inception2.png';
import xfair from '../project_pics/xfair.png';
import ocean from '../project_pics/ocean.gif';
import ocean2 from '../project_pics/ocean.png';
import neuron from '../project_pics/neuron.gif';
import openpose from '../project_pics/openpose.gif';
import coin from '../project_pics/coin.png';
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
              <h2>Here are some <span class="pinktext">projects</span> that I've worked on! </h2>
          </div>
            <div className="icecreme">
                <a href="https://icecreme-brulee.herokuapp.com/" target="_blank">
                    <img src={icecreme1} className="creme1"/> 
                </a>

                <div className="icecremetext">
                    <h1 className="title">icecreme.brulee</h1> 
                    <h2>icecreme.brulee is a full-stack web application game that I created with two friends.
                        Since our first semester of college was virtual, we wanted to make a fun way for new friends 
                        to get to know each other better. This website is a creative variation of the popular party game Paranoia. 
                        To use, a host can create a room, and friends can join using a uniquely-generated code. Collaborators: Joyce Yuan, William Xu
                    </h2> 
                    <h3>
                        Note: need at least two people to play
                    </h3>
                    <h2>
                        TypeScript, React, Node.js, MongoDB, Bootstrap
                    </h2>
                </div>
            </div>
            <div className="inception">
                <div className="inceptiontext">
                    <h1 className="title">Inception Loops</h1> 
                    <h2>
                        Finding connections between biological and machine learning brings
                        us closer to ML models that can perform more like humans (and robots dominating the world :P). 
                        In this project, I worked with researchers in the Harnett Lab at MIT to develop a 
                        deep learning model using convolutional neural networks (CNNs) that accurately predicts the activity
                        of biological neural circuits in the mammalian brain. We were able to achieve high accuracy, and also created deep-learning
                        generated images that maximally excited select neurons. The image on the left is one example of an image modeling 
                        the receptive field of a neuron in the primary visual cortex. Code and data are not public yet, but feel free to 
                        contact me if you have any questions about this project! 

                    </h2> 
                    <h2>
                        Python, Matlab, Unix
                    </h2>
                </div>
                <div className="inception-imgs">
                    <img src={inception2} className="inception-img2"/>
                    <img src={neuron} className="inception-img"/>
                </div>
                
            </div>

            <div className="via">
                <div className="viatext">
                    <h1 className="title">NLP for Bayesian Goal Inference</h1> 
                    <h2>
                        I'm working with the Air Force Research Labratory in the Department of Defense to develop NLP models to integrate into their Visual Inference and Action (VIA) Project. 
                        Using a combination of OpenPose joint-location detection (left), Bayesian inference, and contextual-embedding text-categorization techniques (right), we are
                        predicting agent goals through visual and audio feed data and state-of-the-art machine learning techniques.
                        
                        More info and poster coming soon :)
                    </h2> 
                    <h2>
                        Python, tensorflow, transformers, nltk, HPC, Colab, Docker
                    </h2>
                </div>
                <div className="via-imgs">
                    <img src={openpose} className="via-img1"/>
                    <img src={coin} className="via-img2"/>
                </div>
                
            </div>



            <div className="xfair">
                <a href="https://xfair.io/" target="_blank">
                    <img src={xfair} className="xfair-img"/>
                </a>
                <div className="xfairtext">
                    <h1 className="title">xfair.io</h1> 
                    <h2>
                    This year, I am the co-director of MIT's largest student-run career fair with over 1000+ attendees. 
                    Some of the things I'm working on include collaborating closely with a team of undergraduates, 
                    managing internal relations, reaching out to companies, working on the website, and co-leading logistics.
                    </h2> 
                </div>
            </div>

            <div className="ocean">
                <a href="https://anoceanincrisis.wordpress.com/" target="_blank">
                    <img src={ocean} className="ocean-img"/>
                </a>
                <a href="https://anoceanincrisis.wordpress.com/" target="_blank">
                    <img src={ocean2} className="ocean-img2"/>
                </a>
                <div className="oceantext">
                    <h1 className="title">an ocean in crisis</h1> 
                    <h2>
                    I created a blog with two friends to spread awareness about the ecological risks posed to the oceans due to largely human-caused factors. We hoped to move audiences to action
                    through science writing and poetry, as well as sharing our art and photography accentuating the beauty of the ocean.
                    We ended up winning an award in the national Ocean Awareness contest. Collaborators: Shivani Pasricha, Catherine Hu
                    </h2> 
                </div>
            </div>
            <div className="end">
                <h1> Check back for more projects to be added soon （＾・ω・＾✿）</h1>
                <h1> </h1>
            </div>
            
        </header>
        <footer className="App-footer">

        </footer>
    </div>
    )
}

export default Projects;