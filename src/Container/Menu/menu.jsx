import React from 'react'
import './menu.css'
import { SubHeader, Menuitem } from '../../Components'
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
            <div className='app__menu-special-menu_items'>
              {data.pastries.map((pastries, index) => (
                <Menuitem key={pastries.title + index} title={pastries.title} price={pastries.price} desc={pastries.desc} />
              ))}
            </div>
          </div>
          <div className='app__menu-special-menu_img'>
            <img src={images.cinna} alt="menu-img" />
          </div>

          <div className='app__menu-specials-cakes_pies flex__center'>
            <p className='app__menu-specials-heading'>Cakes & Pies</p>
            <div className='app__menu-special-menu_items'>
              {data.cakes.map((cakes, index) => (
                 <Menuitem key={cakes.title + index} title={cakes.title} price={cakes.price} desc={cakes.desc} />
              ))}
            </div>
          </div>

        </div>

        <div style={{marginTop: '15px'}}>
          <button type='button' className='custom__button'>View More</button>
        </div>
      </div>
  )


export default menu