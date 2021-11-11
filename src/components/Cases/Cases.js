import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CaseCard from '../CaseCard/CaseCard';

import './Cases.scss';


const Cases = ({cases=[], caseType}) => {
  return (
    <Container>
      {cases.map(single_case => {
        return(
          <Row>
            <Col>
              <CaseCard key= {single_case.id} item={single_case} caseType={caseType}/>
            </Col>
        </Row>
        )
      })}
    </Container>
  )
}

export default Cases
