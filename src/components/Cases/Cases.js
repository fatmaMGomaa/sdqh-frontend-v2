import React, {useState, useEffect, createRef} from 'react';
import RectangleCard from '../Cards/RectangleCard/RectangleCard';

import './Cases.scss';


const Cases = ({cases=[], caseType, childClicked}) => {

  const [elRefs, setElRefs] = useState([]);

  useEffect( ()=> {
    setElRefs((refs) => Array(cases.length).fill().map((_, i) => refs[i] || createRef()));
  }, [cases])

  return (
    <div className='cases-container'>
      {cases.map((single_case, i) => {
        return(
          <div ref={elRefs[i]} key={single_case.id}>
            <RectangleCard refProp={elRefs[i]} item={single_case} caseType={caseType} selected={Number(childClicked) === i}/>
          </div>
             
        )
      })}
    </div>
  )
}

export default Cases
