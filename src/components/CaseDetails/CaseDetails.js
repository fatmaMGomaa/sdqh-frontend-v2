import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faMapPin, faMapMarkerAlt, faClock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import './CaseDetails.scss';
import Map from '../Map/Map'
import CaseInfo from './CaseInfo'

const CaseDetails = () => {
  const [caseInfo, setCaseInfo] = useState({})
  const [caseUser, setCaseUser] = useState({})
  const [comments, setComments] = useState({})
  const { id } = useParams();

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/singleCase/${id}?caseType=human`);
        setCaseInfo(res.data.case)
        setCaseUser(res.data.case.user)
        setComments(res.data.case.comments)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[]) 

  return (
    <div className='case-container'>

      <div className='case-container__details'>
        <div className='case-container__details__info'>
          <div class="right">
            <img src={caseInfo.image} alt={caseInfo.name}/>
          </div>
          <div class="left">
            <h3>{caseInfo.name}</h3>
            <ul>
              <li><FontAwesomeIcon icon={faClock} color='#d57a5b' /> <time>{caseInfo && caseInfo.createdAt && caseInfo.createdAt.split('T')[0]}</time></li>
              <li><FontAwesomeIcon icon={faMapMarkerAlt} color='#d57a5b' /> { caseInfo.area}</li>
              <li><FontAwesomeIcon icon={faLocationArrow} color='#d57a5b' /> {caseInfo.address}</li>
              <li><FontAwesomeIcon icon={faMapPin} color='#d57a5b' /> { caseInfo.uniqueSign}</li>
              <li><FontAwesomeIcon icon={faPhone} color='#d57a5b' /> رقم التليفون: { caseInfo.phone}</li>
              <li><FontAwesomeIcon icon={faUser} color='#d57a5b' /> فاعل الخير: <Link to={`/user/${caseInfo.userId}`} id="user-of-case">{caseUser.firstName} {caseUser.lastName}</Link></li>
            </ul>
          </div>
        </div>
        <div className='case-container__details__description'>{caseInfo.description}</div>
      </div>
      <div className='case-container__comments'><CaseInfo caseInfo={caseInfo} caseUser={caseUser}/></div>
      <div className='case-container__map'><Map /></div>
      <div className='case-container__comments'>
        
      </div>
    </div>
  )
}

export default CaseDetails
