import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
      return (
            <header >
                  <div className="header-logo">
                        <Link to="/"> <img src='./Images/Spotify_Logo_CMYK_White.png' alt="" /></Link>
                        
                  </div>
            </header>
      )
}

export default Header