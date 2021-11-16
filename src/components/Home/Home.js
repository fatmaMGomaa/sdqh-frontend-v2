import React from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import main from "./images/main.jpg";
import over from "./images/over.jpg";
import beside from "./images/beside.jpg";


import './Home.scss'

const Home = () => {
  return (
    <div className='home'>

      <div className='home__header'>
        <div className='home__header__content'>
          <p className='home__header__content__slogan'>تواصل في الخير</p>
          <h2>موقعك بيغير حياة الأخرين</h2>
          <p className='home__header__content__p'>صدقة.نت الموقع الخيري الأول في الوطن العربي لرصد كافة الحالات الإنسانية والحيوانية في مختلف أنحاء الوطن العربي</p>
          <Button variant="secondary" as={Link} to='/signup'>حساب جديد</Button>
        </div>
        <div className='home__header__images'>
          <img src={main} className='home__header__images-main' alt="sdqh-main"></img>
          <img src={beside} className='home__header__images-beside' alt="sdqh-beside"></img>
          <img src={over} className='home__header__images-over' alt="sdqh-over"></img>
        </div>
      </div>
      
    </div>
  )
}

export default Home
