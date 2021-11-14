import React from 'react';
import CaseCard from '../CaseCard/CaseCard';

import './Cases.scss';


const Cases = ({cases=[], caseType}) => {
  return (
    <div className='cases-container'>
      {cases.map(single_case => {
        return(
          <CaseCard key={single_case.id} item={single_case} caseType={caseType}/>   
        )
      })}
    </div>
  )
}

export default Cases
