import React from 'react';
import RectangleCard from '../Cards/RectangleCard/RectangleCard';

import './Cases.scss';


const Cases = ({cases=[], caseType}) => {
  return (
    <div className='cases-container'>
      {cases.map(single_case => {
        return(
          <RectangleCard key={single_case.id} item={single_case} caseType={caseType}/>   
        )
      })}
    </div>
  )
}

export default Cases
