import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu, MDOutlineRestaurantMenu } from 'react-icons/md'
import { images } from '../../constants'
import './Navbar.css'


const Navbar = () => {
  return (
<nav className='app__navbar'>
  <div className='app__navbar-logo'>
    <img src={images.logo} alt="cinna-logo" />
  </div>
  <ul className='app__navbar-links'>
    <li className='app__navbar-logo'><a href='#home'>Home</a></li>
    <li className='app__navbar-logo'><a href='#about'>About</a></li>
    <li className='app__navbar-logo'><a href='#menu'>Menu</a></li>
    <li className='app__navbar-logo'><a href='#contact'>Contact</a></li>
  </ul>
  <div className='app__navbar-smallscreen'>
    <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => {}}/>
    <div className='app__bavbar-smallscreen_overlay flex_center slide-bottom'>
      <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => {}} />
    </div>
  </div>
</nav>
  )
}

export default Navbar