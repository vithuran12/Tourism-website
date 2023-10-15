import React from 'react'
import Navbar from '../components/Navbar'
import '../components/HeroStyles.css'
import './contact.css'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>

      <Navbar/>
      <div className="contact">
        <h1>Contact</h1>
        
      <div className="contactimg">
      <img className="img1" src="../images/2.jpg" alt="img" />

      </div>

          </div>
          <ContactForm/>
          <Footer/>


        </div>

    
  )
}

export default Contact
