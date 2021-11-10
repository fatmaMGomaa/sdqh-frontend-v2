import React, {createContext, useState, useEffect} from 'react';
import { getLocalStorageItem } from "../util/localStorage";

export const AuthContext = createContext({});

export const UserProvider = (props) => {
  
  const [loggedUser, setLoggedUser] = useState({});
  const [userToken, setUserToken] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
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

  return <AuthContext.Provider value={{log_out, loggedUser, userToken, setUserToken, setLoggedUser, isLogged, setIsLogged}} {...props} />
}
