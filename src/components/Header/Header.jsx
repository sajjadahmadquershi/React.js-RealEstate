import React, { useState } from 'react'
import "./Header.css"
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler'


const Header = () => {
  const [menu, setmenu] = useState(false)
  const gmenustyile = (menu) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menu && '-100%' }
    }
  }
  return (
    <section className='h-wrapper'>
        <OutsideClickHandler onOutsideClick={() => {
        setmenu(false)
      }}>
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo img" width={100} />

        <div className="h-menu flexCenter" style={gmenustyile(menu)}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className='button'>
            <a href="">Contact</a>
          </button>
        </div>
        <div className="menu-icon" onClick={() => setmenu((prev) => !prev)}>
          <BiMenuAltRight />
        </div>
      </div>
        </OutsideClickHandler>
    </section>
  )
}

export default Header