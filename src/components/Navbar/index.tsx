import React, { useState } from 'react'
import './navbarStyled.css'

import SubMenu from '../Submenu/index';

const EnterTheDApp: React.FC = () => {
  const baseContent = 'ENTER THE DAPP'
  const [content, setContent] = useState(baseContent)
  const comingSoon = 'COMING SOON'
  return (
      <div
        className="Enter_TextGradient"
        onMouseEnter={() => setContent(comingSoon)}
        onMouseLeave={() => setContent(baseContent)}
      >
        {content}
      </div>
  )
}


const Navbar: React.FC = () => {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');
  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active');
    } else setActive('nav__menu');

    // Icon Toggler
    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle');
    } else setIcon('nav__toggler');
  };
  return (
    <nav className='nav'>
      <a href='/' className='nav__brand'>
       <img src="/logo_header.svg" alt="logo" />
      </a>
      <ul className={active}>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Ecosystem
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Testnet
          </a>
        </li>
        <SubMenu />
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Docs
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Hiring
          </a>
        </li>
        <li className='nav__item'>
          <a href='/blog' className='nav__link'>
            Blog
          </a>
        </li>
      </ul>
      <li className='nav__item'>
        <a href='#' className='nav__link' id='enter_the_dap_burgermenu'>
            <EnterTheDApp />
          </a>
        </li>
      <div onClick={navToggle} className={icon}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
}

export default Navbar;
