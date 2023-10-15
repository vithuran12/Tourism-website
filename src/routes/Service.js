import React from 'react'
import Navbar from '../components/Navbar'
import './service.css'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

const Service = () => {
  return (
    <div>
      <Navbar/>
      <div className="service">

          <img src="../images/21.jpg" alt="img" />
      </div>
      <Trip/>
      <Footer/>

    </div>
  )
}

export default Service
