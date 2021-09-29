import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import './CaseCard.scss';

const CaseCard = ({ item: {name, description, image, date} }) => {
  return (
    <div className='card-container'>
      <img className='card-container__img' src={image} alt={`حالة ${name}`}/>
      <div className='card-container__content'>
        <h3 className='card-container__content__title'>{name}</h3>
        <p className='card-container__content__description'>{description.substring(0, 80)}...</p>
      </div>
      <button className='card-container__button'>
        <a href='#'><FontAwesomeIcon icon={faChevronLeft} size='1x' color='white'/></a>
      </button>
    </div>
  )
}

export default CaseCard
