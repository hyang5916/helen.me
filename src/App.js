
import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
  
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/about' exact component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/gallery' component={Gallery} />
      </Switch>
    </Router>
    
  );
}
  
export default App;
