import React, {createContext, useState, useEffect} from 'react';
import { getLocalStorageItem } from "../util/localStorage";

export const AuthContext = createContext({});

export const UserProvider = (props) => {
  
  const [loggedUser, setLoggedUser] = useState({});
  const [userToken, setUserToken] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [userLocation, setUserLocation] = useState({});
  const [editCase, setEditCase] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setUserLocation({lat: latitude, lng: longitude });
    });
    const user = getLocalStorageItem("user");
    const token = getLocalStorageItem("token");
    user && setLoggedUser(user)
    token && setUserToken(token)
    user && token && setIsLogged(true)
  },[]) 

  const log_out = () => {
    localStorage.clear();
    setLoggedUser({});
    setUserToken('');
    setIsLogged(false)
  }

  return <AuthContext.Provider value={{log_out, loggedUser, setLoggedUser, userToken, setUserToken, isLogged, setIsLogged, userLocation, setUserLocation, editCase, setEditCase}} {...props} />
}
