import React, { useEffect, useState } from 'react';
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import SecondaryProjects from './Components/SecondaryProjects';
import Footer from './Components/Footer';
import MobileNav from './Components/MobileNav';
import Contact from './Components/Contact';
import ProjectModal from './Components/ProjectModal'
import "./Styles/App.scss";



function App() {
 
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow)
    };
  }, []);

  if(width>breakpoint) {
    return (
      <div className='app'>
      <NavBar/>
      <Hero />
      <Projects />
      <SecondaryProjects />
      <Footer />
      </div>
    );
  }
    return (
      <div className='app'>
      <MobileNav/>
      <Hero />
      <Projects />
      <SecondaryProjects />
      <Footer />
      </div>
    );
  } 


export default App;

