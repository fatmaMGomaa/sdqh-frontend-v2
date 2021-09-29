import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CaseCard from '../CaseCard/CaseCard';

import './Cases.scss';


const Cases = ({cases=[]}) => {
  return (
    <Container>
      {cases.map(single_case => {
        return(
          <Row>
            <Col>
              <a href='#'><CaseCard key= {single_case.id} item={single_case}/></a>
            </Col>
        </Row>
        )
      })}
    </Container>
  )
}

export default Cases
