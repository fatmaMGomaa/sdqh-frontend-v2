import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Marker = ({extrenal_link}) => {
  return (
    <>
      {extrenal_link? (<a href={extrenal_link} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt} size='3x' color='red'/></a>) : (<FontAwesomeIcon icon={faMapMarkerAlt} size='3x' color='red'/>)}
    </>
  )
}

export default Marker