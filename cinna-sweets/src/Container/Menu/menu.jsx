import React from 'react'
import './menu.css'
import { SubHeader, MenuItem } from '../../Components'
import { images, data } from '../../constants'

const menu = () => (
    <div className='app__menu flex__center section__padding' id='menu'>
    <div className='app__menu-title'>
      <SubHeader title='Sweets To Die For' />
      <h1 className='headtext__cormorant'>Cinna's Specials</h1>
    </div>

        <div className='app__menu-specials'>
          <div className='app__menu-specials-pastries flex__center'>
            <p className='app__menu-specials-heading'>Pastries</p>
            <div className='app__menu-special-menu_items'></div>
          </div>
        </div>
      </div>
  )


export default menu