import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../../Contexts/UserProvider'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import './UserProfile.scss';
import RectangleCard from '../Cards/RectangleCard/RectangleCard';

const UserProfile = () => {
  const {loggedUser, isLogged, userToken} = useContext(AuthContext);
  const { id } = useParams();

  const [user, setuser] = useState({});
  const [humanCases, setHumanCases] = useState([])
  const [animalCases, setAnimalCases] =useState([])
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/userCases?userId=${id}`, {
          headers: {
              Authorization: `bearer ${userToken}`
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

  },[loggedUser, isLogged, userToken]) 

  return (
    <div className='main-container'>
      <div id="user-info">
        <img src={user.image} alt={`${user.firstName}`}/>
        <h3>
          {isLogged && loggedUser.id === user.id && <Link to={`${loggedUser.id}/edit`}><FontAwesomeIcon icon={faEdit} color='#d57a5b'/></Link>} {user.firstName} {user.lastName}
        </h3>
      </div>
      <Tabs defaultActiveKey="humanCases" transition={false} id="noanim-tab-example">
        <Tab eventKey="humanCases" title="حالات الإنسان">
          <div className="humanContainer">
            {humanCases && humanCases.map(single_case => {
              return(
                <RectangleCard key= {single_case.id} item={single_case} caseType='human' />
              )
            })}
          </div>
        </Tab>
        <Tab eventKey="animalCases" title="حالات الحيوان">
        <div className="animalContainer">
        {animalCases && animalCases.map(single_case => {
          return(
            <RectangleCard key= {single_case.id} item={single_case} caseType='animal' />
          )
        })}
      </div>
        </Tab>
        
      </Tabs>
    </div>
  )
}

export default UserProfile
