import React from 'react'
import "./Logo.scss"
import logo from "./img/spotifyLogo.svg"

const Logo = () => {
  return (
    <div className='conteinerLogo'>
      <img src={logo} alt="Spotify Logo" />
    </div>
  )
}

export default Logo
