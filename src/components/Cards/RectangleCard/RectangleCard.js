import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import './RectangleCard.scss';

const RectangleCard = ({ item: {id, name, description, image}, caseType, refProp, selected=false }) => {

  if(selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className='rectangle-card'>
      <Link to={`/case/${id}/?caseType=${caseType}`} className='card-container'>
        <img className='card-container__img' src={image} alt={`حالة ${name}`}/>
        <div className='card-container__content'>
          <h3 className='card-container__content__title'>{name}</h3>
          <p className='card-container__content__description'>{description.substring(0, 40)}...</p>
        </div>
        <button className='card-container__button'>
          <Link to='/'><FontAwesomeIcon icon={faChevronLeft} size='1x' color='white'/></Link>
        </button>
      </Link>
    </div>
  )
}

export default RectangleCard
