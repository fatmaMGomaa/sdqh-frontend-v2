import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faMapPin, faMapMarkerAlt, faClock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

const CaseInfo = ({caseInfo, caseUser}) => {
  return (
    <div className='case-info'>
      <div className='case-info__image'>
        <img src={caseInfo.image} alt={caseInfo.name}/>
      </div>
      <div className='case-info__content'>
        <h3>{caseInfo.name}</h3>
        <ul>
          <li><FontAwesomeIcon icon={faClock} color='#d57a5b' /> <time>{caseInfo && caseInfo.createdAt && caseInfo.createdAt.split('T')[0]}</time></li>
          <li><FontAwesomeIcon icon={faMapMarkerAlt} color='#d57a5b' /> { caseInfo.area}</li>
          <li><FontAwesomeIcon icon={faLocationArrow} color='#d57a5b' /> {caseInfo.address}</li>
          <li><FontAwesomeIcon icon={faMapPin} color='#d57a5b' /> { caseInfo.uniqueSign}</li>
          <li><FontAwesomeIcon icon={faPhone} color='#d57a5b' /> رقم التليفون: { caseInfo.phone}</li>
          <li><FontAwesomeIcon icon={faUser} color='#d57a5b' /> فاعل الخير: <Link to={`/user/${caseInfo.userId}`} id="user-of-case">{caseUser.firstName} {caseUser.lastName}</Link></li>
        </ul>
        <p>{caseInfo.description}</p>
        <Link to='/' >الخريطة</Link>
      </div>
      
    </div>
  )
}

export default CaseInfo
