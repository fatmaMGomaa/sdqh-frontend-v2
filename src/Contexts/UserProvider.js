import React, {createContext, useState, useEffect} from 'react';
import {countries} from "../util/generic_variables"
import axios from 'axios';
import { getLocalStorageItem } from "../util/localStorage";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  
  const [loggedUser, setLoggedUser] = useState({});
  const [userToken, setUserToken] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [userLocation, setUserLocation] = useState({});
  const [userCountry, setUserCountry] = useState('مصر');
  const [editCase, setEditCase] = useState({});

  // useEffect(() => {
    
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get('https://ip.nf/me.json');
  //       const country_code = (res.data.ip.country_code)
  //       let country = country_code && countries[country_code]
  //       country && setUserCountry(country)
  //     } catch (error) {
  //       console.log('ip country error')
  //       console.log(error);
  //     }
  //   };
  //   fetchData()
  // },[]) 

  useEffect(() => {
    try{
      navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
        setUserLocation({lat: latitude, lng: longitude });
      });
      const user = getLocalStorageItem("user");
      const token = getLocalStorageItem("token");
      user && setLoggedUser(user)
      token && setUserToken(token)
      user && token && setIsLogged(true)
    }catch(error){
      console.log(error)
    }
  },[]) 

  const log_out = () => {
    localStorage.clear();
    setLoggedUser({});
    setUserToken('');
    setIsLogged(false)
  }

  return <UserContext.Provider value={{log_out, loggedUser, setLoggedUser, userToken, setUserToken, isLogged, setIsLogged, userLocation, setUserLocation, editCase, setEditCase, userCountry}} {...props} />
}
