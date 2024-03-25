import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'


function Signup() {
  return ( 
    <>
     <div className='login-body'>
    <div className='container'>
        <div className='header'>
            THE MOVIE TRACKER
        </div>
        <div className='login'>
            <input type='text' placeholder='Username' required />
            <input type='email' placeholder='Email Adress' required />
            <input type='password' placeholder='Password' required />
            <input type='password' placeholder='Confirm Password' required />
        </div>
        <div className='button'>
            <div> <Link to="/"> <button type='Submit'>Register</button> </Link> </div>
            <div className='signup'> <p>Already have an account?. <a className='slink' href='/'> Login</a></p></div>
        </div>
        {/* <div className='footer'>Build By XXX</div> */}
    </div>
    </div>  
</>
  )
}

export default Signup