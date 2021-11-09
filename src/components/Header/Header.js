import React, { useContext, useEffect } from 'react'
import './Header.scss';
import logo from './logo3.png';
import { getLocalStorageItem } from "../../util/localStorage";
import { Link } from 'react-router-dom';
import {AuthContext} from '../../Contexts/UserProvider'

// const logged_user = getLocalStorageItem("user");

const Header = () => {

  const {loggedUser, log_out, isLogged} = useContext(AuthContext);

  return (
    <header className='navbar'>
      <h1 className='navbar__logo'><img src={logo} width="150" alt="sdqh logo"/></h1>
      <ul className='navbar__ul'>
        <li className='navbar__button navbar__link'>
          {isLogged ? <button onClick={log_out}>الخروج</button> : <Link to='/login' className='navbar__link'> الدخول </Link>} 
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
