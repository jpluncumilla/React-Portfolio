import React from 'react';
import './App.css';
import Projects from "./Projects"
import About from "./About"
import Navbar from "./Navbar"
import Contact from "./Contact"
import Footer from "./Footer"
import Jumbo from "./Jumbo"
import { HashLink as Link } from 'react-router-hash-link';


function App() {
  return (
    <div className="App">
      <Jumbo />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
