import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FooterOverlay } from '../../Components'
import { images } from '../../constants'
import './Footer.css'

const Footer = () => (
    <div className='app__footer section__padding'>
      <FooterOverlay />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans' style={{color: 'var(--color-pink)'}}>123 Forget About It Lane, Place Holder</p>
          <p className='p__opensans' style={{color: 'var(--color-pink)'}}>+1 555-555-5555</p>
          <p className='p__opensans' style={{color: 'var(--color-pink)'}}>+1 444-444-4444</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.logo} alt="footer_logo" />
          <p className='p__opensans' style={{color: 'var(--color-pink)'}}>"Serving happiness one delious bite at a time."</p>
          <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15}} />
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans' style={{color: 'var(--color-pink)'}}>Monday-Friday:</p>
          <p className='p__opensans' style={{color: 'var(--color-pink)'}}>10:00 Am - 6:00 Pm</p>
          <p className='p__opensans' style={{color: 'var(--color-pink)'}}>Saturday-Sunday:</p>
          <p className='p__opensans' style={{color: 'var(--color-pink)'}}>10:00 Am - 4:00 Pm</p>
        </div>
      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'> 2023 Cinna Sweets. All Rights reserved.</p>
      </div>
    </div>
  )

export default Footer