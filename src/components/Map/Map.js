import React, {useEffect} from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from '../Marker/Marker';

import './Map.scss';
import mapStyles from './mapStyles';

const Map = ({ coords={ lat: 30.033333, lng: 31.233334 }, cases, setCoords, setBounds }) => {

  return (
    <div className='map-container'>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={19}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          console.log(e)
          // setCoords({ lat: e.center.lat, lng: e.center.lng });
          // setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={(child) => setChildClicked(child)}
      >
        {cases.map(singlle_case => <Marker key= {singlle_case.id} lat={parseFloat(singlle_case.lat)} lng={parseFloat(singlle_case.lng)} text="My Marker"/>)}
      </GoogleMapReact>
    </div>
  )
}

export default Map
