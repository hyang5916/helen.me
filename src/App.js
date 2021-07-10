import './App.css';
import cat from './cat-in-black-silhouette.svg';
import heart from './like.svg';
import Header from './components/Header.js';
import name from './name.png'
import helenyang from './helenyang.png'
import cynd from './cynd.png'

function App() {
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
          <h1>software developer + musician</h1>
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
}

export default App;
