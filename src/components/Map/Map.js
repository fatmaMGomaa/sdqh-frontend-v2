import React, {useEffect} from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";

import './Map.scss';

const libraries = ['places'];

const mapContainerStyle = {
  width: '50%',
  height: '70vh'
};

const Map = ({ coords={ lat: 30.033333, lng: 31.233334 }, cases, setCoords, setBounds }) => {

  const [markers, setMarkers] = React.useState([])

  const{isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: '',
    libraries
  });

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className='map-container'>
        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          zoom={15} 
          center={coords} 
          options={{ disableDefaultUI: true}}
          // onClick={(e)=> {
          //   setMarkers(current => [...current, {lat: e.latLng.lat(), lng: e.latLng.lng()}])
          // }}
        >
          {cases.map(singlle_case => <Marker key= {singlle_case.id} position={{lat: parseFloat(singlle_case.lat), lng: parseFloat(singlle_case.lng)}}/>)}
        </GoogleMap >
    </div>
  )
}

export default Map
