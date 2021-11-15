import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import './CaseDetails.scss';
import Map from '../Map/Map'
import CaseInfo from './CaseInfo/CaseInfo'
import CommentSection from '../CommentSection/CommentSection'

const CaseDetails = () => {
  const [caseInfo, setCaseInfo] = useState({})
  const [caseUser, setCaseUser] = useState({})
  const [comments, setComments] = useState([])
  const search = useLocation().search;
  const caseType = new URLSearchParams(search).get('caseType');
  const { id } = useParams();

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/singleCase/${id}?caseType=${caseType}`);
        setCaseInfo({...res.data.case, caseType})
        setCaseUser(res.data.case.user)
        setComments(res.data.case.comments)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[]) 

  return (
    <div className='case-container main-container'>

      <div className='case-container__content'><CaseInfo caseInfo={caseInfo} caseUser={caseUser}/></div>
      <div className='case-container__map'><Map /></div>
      <div className='case-container__comments'>
        <CommentSection comments={comments} caseType={caseType} caseId={id} setComments={setComments}/>
      </div>
    </div>
  )
}

export default CaseDetails
