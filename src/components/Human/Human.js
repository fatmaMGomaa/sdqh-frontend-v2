import React, {useEffect} from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Map from '../Map/Map'
import Cases from '../Cases/Cases'

const Human = () => {
  const [cases, setCases] = React.useState([])
  const [coords, setCoordes] = React.useState({})

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordes({lat: latitude, lng: longitude });
    });
    
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}allCases?caseType=human`);
        setCases(res.data.cases)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[]) 

  return (
    
    <Container>
      <Row>filter</Row>
      <Row>
        <Col>
          <Map cases={cases} coords={coords}/>
        </Col>
        <Col>
        <Cases cases={cases}/>
        </Col>
      </Row>
    </Container>
   
  )
}

export default Human
