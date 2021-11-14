import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import './SquareCard.scss';

const SquareCard = ({ item: {id, name, species, image, createdAt}, caseType }) => {
  return (
    <div className="square-card">
      <Link to={`/case/${id}/?caseType=${caseType}`} className='square-card__container'>
      
      <img className='square-card__container__img' src={image} alt={`حالة ${name}`}/>
      <div className='square-card__container__content'>
        <h3 className='square-card__container__title'>
          {(name || species).substring(0, 15)}...
          <span className='square-card__container__date'><time>{createdAt && createdAt.split('T')[0]}</time></span>
        </h3>
        <button className='square-card__container__button'>
          <Link to='/'><FontAwesomeIcon icon={faChevronLeft} size='1x' color='white'/></Link>
        </button>
      </div>
      </Link>
    </div>
  )
}

export default SquareCard
