import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './Styles.css';
import Home from './routes/Home';
import About from './About';
import Contact from './routes/Contact';
import Service from './routes/Service';
import Login from './routes/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />

          </Routes>
          
      </BrowserRouter>
      
    </div>
  )
}

export default App

//25min