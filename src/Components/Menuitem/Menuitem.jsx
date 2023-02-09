import React from 'react'
import './Menuitem.css'

const Menuitem = ({ title, price, desc }) => {
  return (
    <div className='app_menuitem'>
      <div className='app__menuitem-head'>
        <div className='app__menu-name'>
          <p className='p__cormorant' style={{ color: '#ff99dd' }}>{title}</p>
        </div>

        <div className='app__menuitem-dash'/>

        <div className='app__menu-price'>
          <p className='p__cormorant'>{price}</p>
        </div>
      </div>

      <div className='app__menuitem-sub'>
        <p className='p__opensans' style={{ color: '#AAA'}}>{desc}</p>
      </div>
    </div>
  )
}

export default Menuitem