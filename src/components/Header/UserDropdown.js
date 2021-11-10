import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {AuthContext} from '../../Contexts/UserProvider'
import Button from '../Shared/Button/Button'
import Dropdown from '../Shared/Dropdown/Dropdown'

const UserDropdown = () => {

  const {loggedUser, log_out, isLogged} = useContext(AuthContext);

  if(isLogged){
    return(
      <Button content='الخروج' path='/' buttonClass='btn' onClick={log_out} />
    )
  }else {
    return(
      <Button content='الدخول' path='/login' buttonClass='btn' linkClass='navbar__link' onClick={log_out} />
    )
  }
}

export default UserDropdown
