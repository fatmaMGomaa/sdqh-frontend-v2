import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitterSquare, faFacebook, faYoutube, faInstagram} from "@fortawesome/free-brands-svg-icons";

import './Footer.scss';


const Footer = () => {
  return (
    <footer className='main-footr'>
      <div className='main-footr__social-media'>
        <ul className='main-footr__social-media-list'>
          <li><a href="#"><FontAwesomeIcon icon={faFacebook} size='2x'/></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faTwitterSquare} size='2x'/></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faYoutube} size='2x'/></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faInstagram} size='2x'/></a></li>
        </ul>
      </div>
      <div className='main-footr__nav'>
        <ul className='main-footr__nav-list'>
          <li><a href="#">الرئيسية</a></li>
          <li><a href="#">عن صدقة.نت</a></li>
          <li><a href="#">الشروط والأحكام</a></li>
          <li><a href="#">اتصل بنا</a></li>
        </ul>
      </div>
      <p>جميع حقوق الطبع محفوظة © 2021</p>
    </footer>
  )
}

export default Footer
