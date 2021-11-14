import React, {useState, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Map from '../Map/Map'
import Cases from '../Cases/Cases'
import './MapCases.scss'

const MapCases = () => {
  const [cases, setCases] = useState([])
  const [coords, setCoordes] = useState({})

  const search = useLocation().search;
  const caseType = new URLSearchParams(search).get('caseType');

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordes({lat: latitude, lng: longitude });
    });
    
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
    <div className='div-wrapper'>
    <h2>ساعد من حولك</h2>
      <div className='map-cases'>
        <div className='map'>
          <Map cases={cases} coords={coords}/>
        </div>
        <div className='cases'>
          <Cases cases={cases} caseType={caseType}/>
        </div>
      </div>
    </div>
  )
}

export default MapCases
