import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Achievement from './components/Achievements/Achievement';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div> 
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Experience/> 
      <Education/>
      <Achievement/>
      <Contact/>  
      <Footer/>  
    </div>
  )
}

export default App;