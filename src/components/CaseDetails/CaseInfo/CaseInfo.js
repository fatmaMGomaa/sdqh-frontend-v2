import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import './CaseInfo.scss';

const CaseInfo = ({caseInfo, caseUser}) => {
  return (
    <div className='case-info'>
      <div className='case-info__image'>
        <img src={caseInfo.image} alt={caseInfo.name}/>
      </div>
      <div className='case-info__content'>
        <h3>{caseInfo.name || caseInfo.species}</h3>
        <ul>
          <li><FontAwesomeIcon icon={faClock} color='#d57a5b' /> <time>{caseInfo && caseInfo.createdAt && caseInfo.createdAt.split('T')[0]}</time></li>
          <li><FontAwesomeIcon icon={faMapMarkerAlt} color='#d57a5b' /> { caseInfo.area}, {caseInfo.address}, { caseInfo.uniqueSign}</li>
          <li><FontAwesomeIcon icon={faPhone} color='#d57a5b' /> رقم التليفون: { caseInfo.phone}</li>
          <li><FontAwesomeIcon icon={faUser} color='#d57a5b' /> فاعل الخير: <Link to={`/user/${caseInfo.userId}`} id="user-of-case">{caseUser.firstName} {caseUser.lastName}</Link></li>
        </ul>
        <p>{caseInfo.description}</p>
        <a href={`https://www.google.com/maps/search/?api=1&query=${caseInfo.lat},${caseInfo.lng}`} target='_blank' rel='noreferrer' className='case-info__btn'>الموقع</a>
      </div>
      
    </div>
  )
}

export default CaseInfo
