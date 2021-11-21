import React, {useState, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Map from '../Map/Map'
import Cases from '../Cases/Cases'
import './MapCases.scss'

const MapCases = () => {
  const [cases, setCases] = useState([])
  const [coords, setCoords] = useState({})
  const [childClicked, setChildClicked] = useState(null);
  const [caseFilters, setCaseFilters] = useState({filter_country: '', filter_city: '', filter_tag: ''})

  const search = useLocation().search;
  const caseType = new URLSearchParams(search).get('caseType');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoords({lat: latitude, lng: longitude });
    });
  }, [])

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
  },[caseFilters, caseType])
  
  return (
    <div className='div-wrapper main-container'>
    <h2>ساعد من حولك</h2>
      <div className='map-cases'>
        <div className='map'>
          <Map cases={cases} coords={coords} setCoords={setCoords} setChildClicked={setChildClicked}/>
        </div>
        <div className='cases'>
          <Cases cases={cases} caseType={caseType} childClicked={childClicked} />
        </div>
      </div>
    </div>
  )
}

export default MapCases
