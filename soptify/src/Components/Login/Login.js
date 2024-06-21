import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { SpotifyContext } from '../../Context/SpotifyProvider';



const Login = () => {

  const { getSpotifyToken } = useContext(SpotifyContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleSpotifyLogin = (e) => {
    setIsLoading(true)
    getSpotifyToken();
  }

  return (
    <>

      {
        isLoading ? (
          <p> Loading...</p >
        ) : <div className='login'>
          <div className="container">
            <div className="d-flex justify-content-center">
              <div className='login-inner'>
                <h2>Log in to Spotify</h2>

                <div className='login-continue'>
                  <button onClick={handleSpotifyLogin}><img src='./Images/google-icon.svg' alt="icon-1" /> Continue with Spotify</button>

                  <button><img src='./Images/facebook-icon.svg' alt="icon-2" />Continue with Facebook</button>
                  <button><img src='./Images/apple-icon.svg' alt="icon-3" />Continue with Apple</button>
                  <button>Continue with phone number</button>
                </div>
                <hr className='border-login' />
                <div className='login-from'>
                  <form action="" className='d-flex flex-col '>
                    <label htmlFor="">Email or username</label>
                    <input type="text" placeholder='Email or username ' />
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='Password ' />
                    <div>
                      <input type="checkbox" className='checkboxbtn' />
                      <label htmlFor="">Remember me</label>
                    </div>
                    <button type='submit' className='login-btn'>Login</button>
                  </form>
                  <Link>Forgot your password?</Link>
                </div>
                <hr className='border-login' />
                <div className='login-sign-btn'>
                  <p>Don't have an account? <Link >Sign up for Spotify</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>

  )
}

export default Login