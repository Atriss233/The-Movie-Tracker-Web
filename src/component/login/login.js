import React from 'react'
import './login.css'
  import { Link } from 'react-router-dom'

function Login() {


    return (
        <>
        <div className='login-body'>
        
            <div className='container'>
                <div className='header'>
                    THE MOVIE TRACKER
                </div>
                <div className='login'>
                    <input type='email' placeholder='Username' required />
                    <input type='password' placeholder='Password' required />
                </div>
                <div className='button'>
                    <div> <Link to="homePage">  <button type='Submit'>Login</button>   </Link></div>
                    <div className='signup'> <p>You don't have an account?. <a className='slink' href='sign-up'> SignUp</a></p></div>
                </div>
                {/* <div className='footer'>Build By XXX</div> */}
            </div>
            </div>
        </>
    )
}

export default Login
