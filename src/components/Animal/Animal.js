import React, {useEffect} from 'react';
import axios from 'axios';

import Map from '../Map/Map'

const Animal = () => {

  const [cases, setCases] = React.useState([]);
  const [coords, setCoordes] = React.useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordes({lat: latitude, lng: longitude });
    });

    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}allCases?caseType=animal`);
        setCases(res.data.cases)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[]) 

  return (
    <div>
      <Map cases={cases} coords={coords}/>
    </div>
  )
}

export default Animal
