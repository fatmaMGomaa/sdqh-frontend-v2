import React, { useContext, useEffect, useState } from 'react'
import './Header.scss';
import logo from './logo3.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import UserDropdown from './UserDropdown';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <header className='navbar'>
    <Link to='/'><h1 className='navbar__logo'><img src={logo} width="150" alt="sdqh logo"/></h1></Link>
      <div className='navbar__mobile-icon' onClick={()=> setIsMobile(!isMobile)}>
        {isMobile ? <FontAwesomeIcon icon={faTimes} size='2x'/> : <FontAwesomeIcon icon={faBars} size='2x'/>}
      </div>
      <ul className={isMobile? 'navbar__mobile-ul': 'navbar__ul'} onClick={()=> setIsMobile(false)}>
        <li className='navbar__button navbar__link'>
          <UserDropdown />
        </li>
        <Link to='/' className='navbar__link'>
          <li>الرئيسية</li>
        </Link>
        <Link to='/human' className='navbar__link'>
          <li>رعاية الإنسان</li>
        </Link>
        <Link to='/animal' className='navbar__link'>
          <li>رعاية الحيوان</li>
        </Link>
        <Link to='/' className='navbar__link'>
          <li>المنظمات الخيرية</li>
        </Link>
      </ul>
    </header>
  )
}

export default Header
