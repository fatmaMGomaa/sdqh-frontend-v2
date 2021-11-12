import React from 'react';
import Container from "react-bootstrap/Container";
import CaseCard from '../CaseCard/CaseCard';

import './Cases.scss';


const Cases = ({cases=[], caseType}) => {
  return (
    <Container>
      {cases.map(single_case => {
        return(
          <CaseCard key={single_case.id} item={single_case} caseType={caseType}/>   
        )
      })}
    </Container>
  )
}

export default Cases
