import React, { useState } from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import { Menuitems } from './MenuItems';
import Login from '../routes/Login';
//icons already imported in index.html so we can use here   

const Navbar = () => {
  
  const [clicked, setClicked] = useState(false); 
 const handleClick =()=>{
    setClicked(!clicked)
  }

  return (
    <div className='NavbarItems'>

      <div className="tit">
      <img src="../images/b9.png" alt="img" />
        <h1 className="navbar-logo">Shika</h1>
      </div>
      

        <div className="menu-icons">
          <i  onClick={handleClick} className={clicked ? "fas fa-times" : "fas fa-bars"}></i>  {/* it is like if else statement(true=> condition1 false=>condition2) */}
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            
                {Menuitems.map((item, index)=>{
                    return(
                        <li key={index}>
                        <Link to={item.url} className={item.cName}>
                        <i className={item.icon}/>
                        {item.title}                        
                        </Link>
                        
                        </li>

                    )
                })}
                <Link to='/login'>
                <button>Login</button>

                </Link>
        </ul>

    </div>
  )
}

export default Navbar
