import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getLocalStorageItem } from "../../util/localStorage";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import './UserProfile.scss';
import CaseCard from '../CaseCard/CaseCard';

const UserProfile = () => {
  const logged_user = getLocalStorageItem("user");
  const token = getLocalStorageItem("token");
  const { id } = useParams();

  const [user, setuser] = React.useState([]);
  const [humanCases, setHumanCases] = React.useState([])
  const [animalCases, setAnimalCases] = React.useState([])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/userCases?userId=${id}`, {
          headers: {
              Authorization: `bearer ${token}`
          }
        })
        setuser(res.data.user);
        setHumanCases(res.data.humanCases);
        setAnimalCases(res.data.animalCases)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  },[]) 

  return (
    <div>
      <div id="user-info">
        <img src={user.image} alt={`${user.firstName} image`}/>
        <h3>
          {logged_user.id === user.id && <Link to={`${logged_user.id}/edit`}><FontAwesomeIcon icon={faEdit} size='1x'/></Link>} {user.firstName} {user.lastName}
        </h3>
      </div>
      <Tabs defaultActiveKey="humanCases" transition={false} id="noanim-tab-example">
        <Tab eventKey="humanCases" title="حالات الإنسان">
          <div class="humanContainer">
            {humanCases && humanCases.map(single_case => {
              return(
                <CaseCard key= {single_case.id} item={single_case}/>
              )
            })}
          </div>
        </Tab>
        <Tab eventKey="animalCases" title="حالات الحيوان">
        <div class="animalContainer">
        {animalCases && animalCases.map(single_case => {
          return(
            <CaseCard key= {single_case.id} item={single_case}/>
          )
        })}
      </div>
        </Tab>
        
      </Tabs>
    </div>
  )
}

export default UserProfile
