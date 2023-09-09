import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Hero from './Components/Hero';
import Counter from './Components/Counter';
import About from './Components/About';
import Tracks from './Components/Tracks';
import Timeline from './Components/Timeline';
import Footer from './Components/Footer';
import HomeDetails from './Components/HomeDetails';
import Registration from './Components/Registration';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <Hero />
        <HomeDetails/>
        <Counter />
        <About />
        <Tracks />
        <Timeline />
        <Registration />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
