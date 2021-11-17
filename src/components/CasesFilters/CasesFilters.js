import React, {useState, useEffect, useContext} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {UserContext} from '../../Contexts/UserProvider'
import SquareCard from '../Cards/SquareCard/SquareCard';
import Filters from '../Filters/Filters'
import './CasesFilters.scss'

const CasesFilters = () => {
  const {userCountry} = useContext(UserContext);
  const [cases, setCases] = useState([])
  const [caseFilters, setCaseFilters] = useState({filter_country: 'مصر', filter_city: '', filter_tag: ''})

  const search = useLocation().search;
  const caseType = new URLSearchParams(search).get('caseType');

  useEffect(() => {
    setCaseFilters({filter_country: 'مصر', filter_city: '', filter_tag: ''});
  },[caseType]) 

  // useEffect(() => {
  //   setCaseFilters({...caseFilters ,filter_country: userCountry});
  //   console.log(userCountry)
  // },[userCountry])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/allCases?caseType=${caseType}&filter_country=${caseFilters.filter_country}&filter_city=${caseFilters.filter_city}&filter_tag=${caseFilters.filter_tag}`);
        setCases(res.data.cases)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[caseFilters]) 

  return (
    <div className='cases-filters main-container'>
      <Filters caseType={caseType} caseFilters={caseFilters} setCaseFilters={setCaseFilters}/>
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
