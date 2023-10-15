import React, { useState } from 'react';
import '../components/login.css'

const Login = () => {


  const [showRegister, setShowRegister] = useState(true);

  // Function to toggle the registration form
  const toggleRegister = () => {
    setShowRegister(!showRegister);

  };


  return (
    <div className='container'>
        <img src="./images/33.jpg" alt="" />


        {showRegister ?(
    <div className='wrapper'>
    <div className="close">
    <i class="fa-solid fa-xmark"> </i>


    </div>

        <form className="form-box" action="#">
        <h2>Login</h2>

            <div  className="input-box">
            <i className="fa-solid fa-envelope"></i>

                <input type="email" required/>
                <label>Email</label>
            </div>
            <div className="input-box">
            <i className="fa-solid fa-lock"></i>
                <input type="password" required/>
                <label>Password</label>
            </div>
            <div className="reminder-forgot">
              <label><input type="checkbox"/>Reminder me</label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type='submit' className='btn'>Login</button>

            <div className="login-register">
              <p>Don't have an account ?  <a onClick={toggleRegister}  href="#" >Register</a> </p>
              
            </div>
        </form>
      
    </div>


    ) : (

    <div className='wrapper-register'>
    <div className="close">
    <i class="fa-solid fa-xmark"> </i>


    </div>

        <form className="form-box" action="#">
        <h2>Register</h2>

        <div  className="input-box">
            <i class="fa-solid fa-user"></i>

                <input type="text" required/>
                <label>Name</label>
            </div>

            <div  className="input-box">
            <i className="fa-solid fa-envelope"></i>

                <input type="email" required/>
                <label>Email</label>
            </div>
            <div className="input-box">
            <i className="fa-solid fa-lock"></i>
                <input type="password" required/>
                <label>Password</label>
            </div>
            <div className="reminder-forgot">
              <label><input type="checkbox"/>I agree to the terms & conditions</label>
            </div>
            <button type='submit' className='btn'>Register</button>

            <div className="login-register">
              <p>Already have an account ? <a  onClick={toggleRegister}  href="#" >Login</a> </p>
              
            </div>
        </form>
      
    </div>
    )}

    </div>
  )
}

export default Login
