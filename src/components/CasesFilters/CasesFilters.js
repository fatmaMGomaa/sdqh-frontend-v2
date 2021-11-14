import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SquareCard from '../Cards/SquareCard/SquareCard';
import './CasesFilters.scss'

const CasesFilters = () => {
  const [cases, setCases] = useState([])

  const search = useLocation().search;
  const caseType = new URLSearchParams(search).get('caseType');

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/allCases?caseType=${caseType}`);
        setCases(res.data.cases)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[]) 

  return (
    <div className='cases-filters'>
      <div className='cases-wrapper'>
        {cases.map(single_case => {
          return(
            <SquareCard key={single_case.id} item={single_case} caseType={caseType}/>   
          )
        })}
      </div>
    </div>
  )
}

export default CasesFilters
