import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitterSquare, faFacebook, faYoutube, faInstagram} from "@fortawesome/free-brands-svg-icons";

import './Footer.scss';


const Footer = () => {
  return (
    <footer className='main-footr'>
      <div className='main-footr__social-media'>
        <ul className='main-footr__social-media-list'>
          <li><Link to="/"><FontAwesomeIcon icon={faFacebook} size='2x'/></Link></li>
          <li><Link to="/"><FontAwesomeIcon icon={faTwitterSquare} size='2x'/></Link></li>
          <li><Link to="/"><FontAwesomeIcon icon={faYoutube} size='2x'/></Link></li>
          <li><Link to="/"><FontAwesomeIcon icon={faInstagram} size='2x'/></Link></li>
        </ul>
      </div>
      <div className='main-footr__nav'>
        <ul className='main-footr__nav-list'>
          <li><Link to="/">الرئيسية</Link></li>
          <li><Link to="/">عن صدقة.نت</Link></li>
          <li><Link to="/">الشروط والأحكام</Link></li>
          <li><Link to="/">اتصل بنا</Link></li>
        </ul>
      </div>
      <p>جميع حقوق الطبع محفوظة © 2021</p>
    </footer>
  )
}

export default Footer
