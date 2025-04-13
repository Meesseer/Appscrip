import React from 'react'
import './NavBar.css';
import logo from './Logo.png';
import logoText from './LogoText.png';
import icons from './Icons.png'

function NavBar() {
  return (
    <div>
        <div className='logo-container'>
          <div className='logo-row'>  
            <img alt='Company Logo' src={logo}></img>
            <img alt='Company Name' src={logoText}></img>
            <img alt='Icons' src={icons}></img>
           </div>
        </div>
        <div className='nav-bar'>
            <div className='nav-tabs'>
                <nav>
                    <ul class="navbar">
                        <li><a href='#'>SHOPS</a></li>
                        <li><a href='#'>SKILLS</a></li>
                        <li><a href='#'>STORIES</a></li>
                        <li><a href='#'>ABOUT</a></li>
                        <li><a href='#'>CONTACT US</a></li>
                    </ul>
                </nav>
                <div className='separator'></div>
            </div>
        </div>
    </div>
  )
}

export default NavBar