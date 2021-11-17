import React, {useEffect} from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from '../Marker/Marker';

import './Map.scss';
import {mapStyles} from './mapStyles';

const Map = ({ coords={ lat: 30.033333, lng: 31.233334 }, cases=[], singleCase, setCoords, setBounds, setChildClicked }) => {

  return (
    <div className='map-container'>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={19}
        margin={[50, 50, 50, 50]}
        // options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCoords && setCoords({ lat: e.center.lat, lng: e.center.lng });
          // setBounds && setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={(child) => setChildClicked(child)}
      >
        {cases && cases.map(singlle_case => <Marker key= {singlle_case.id} lat={Number(singlle_case.lat)} lng={Number(singlle_case.lng)} />)}
        {singleCase && <Marker key= {singleCase.id} lat={Number(singleCase.lat)} lng={Number(singleCase.lng)} extrenal_link={`https://www.google.com/maps/search/?api=1&query=${singleCase.lat},${singleCase.lng}`} />}
      </GoogleMapReact>
    </div>
  )
}

export default Map
