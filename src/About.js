import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import '../src/components/HeroStyles.css'
import Destination from './components/Destination'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="about"
      img="../images/10.jpg"
      title='Explore the world, find yourself!'
      textPart="about-text"

      />
           <AboutUs/>
           <Footer/>


    </div>
  )
}

export default About
