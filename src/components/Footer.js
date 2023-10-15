import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div>
          <h1>Shika</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
          <Link to='/'>
          <i className='fa-brands fa-facebook-square'></i>
          </Link>

          <Link to='/'>
          <i className='fa-brands fa-instagram-square'></i>
          </Link>

          <Link to='/'>
          <i className='fa-brands fa-behance-square'></i>
          </Link>
        
          <Link to='/'>
          <i className='fa-brands fa-twitter-square'></i>
          </Link>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>

        </div>

        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>

        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">TroubleShooting</a>
          <a href="/">Contact Us</a>

        </div>


        <div>
          <h4>Others</h4>
          <a href="/">Teams of Services</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>

        </div>
      </div>
    </div>
  )
}

export default Footer
