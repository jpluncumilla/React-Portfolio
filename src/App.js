import React from 'react';
import './App.css';
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import Jumbo from "./Jumbo"
import { HashLink as Link } from 'react-router-hash-link';
import ScrollButton from './ScrollButton';


function App() {
  return (
    <div className="App">
      <Jumbo />
      <About />
      <Projects />
      <Contact />
      <ScrollButton />
    </div>
  );
}

export default App;
