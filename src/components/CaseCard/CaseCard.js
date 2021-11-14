import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import './CaseCard.scss';

const CaseCard = ({ item: {id, name, species, description, image}, caseType }) => {
  return (
    <div>
      <Link to={`/case/${id}/?caseType=${caseType}`} className='card-container'>
        <img className='card-container__img' src={image} alt={`حالة ${name}`}/>
        <div className='card-container__content'>
          <h3 className='card-container__content__title'>{name || species}</h3>
          <p className='card-container__content__description'>{description.substring(0, 50)}...</p>
        </div>
        <button className='card-container__button'>
          <Link to='/'><FontAwesomeIcon icon={faChevronLeft} size='1x' color='white'/></Link>
        </button>
      </Link>
    </div>
  )
}

export default CaseCard
