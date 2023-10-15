import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import './service.css'
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero"
      img="../images/16.jpg"
      title="Create Your Own path"
      text="Choose Your Favourite Destination."
      buttonText="Travel Plan"
      url="/"
      textPart="hero-text"
      btnClass="show"
      />

      <Destination/>
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Home
