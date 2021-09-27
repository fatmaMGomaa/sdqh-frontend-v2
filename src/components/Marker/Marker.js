import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Marker = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faMapMarkerAlt} size='3x' color='red'/>
    </div>
  )
}

export default Marker