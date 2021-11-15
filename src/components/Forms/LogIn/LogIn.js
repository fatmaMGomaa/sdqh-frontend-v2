import React, { useState, useContext } from 'react';
import axios from 'axios';
import { saveToLocalStorage } from "../../../util/localStorage";
import {AuthContext} from '../../../Contexts/UserProvider'

import '../Form.scss';

const LogIn = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const initial_values = {email: '', password: ''}
  const [formValues, setFormValues] = useState(initial_values);
  const [formErrors, setFormErrors] = useState({});
  const {setLoggedUser, isLogged, setIsLogged, setUserToken} = useContext(AuthContext);

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setFormErrors(validateValues(formValues));
    if(Object.keys(formErrors).length === 0){
      axios
        .post(`${url}/login`, formValues)
        .then(response => {
          console.log(response);
          localStorage.clear();
          saveToLocalStorage("token", response.data.token);
          saveToLocalStorage("user", response.data.user)
          setLoggedUser( response.data.user);
          setUserToken(response.data.token);
          setIsLogged(true);
        })
        .catch(error => {
          console.log(error);
        });
    };
  }

  const validateValues = (values) => {
    const errors = {}
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!values.email){
      errors.email = 'Email Is Required'
    }else if(!regex.test(String(values.email).toLowerCase())){
      errors.email = 'please enter a valid email'
    }
    if(!values.password){
      errors.password = 'Password Is Required'
    }else if(values.password.length < 5){
      errors.password = 'password should be more than 5'
    }
    return errors;
  }


  if(isLogged){
      return(
        <h3 className='login__error'>لقد قمت بالدخول مسبقا</h3>
      )
    } else {
      return(
        <div className='form-container main-container'>
          <form method="POST" name="login" id="login" className='form' onSubmit={handleLogin}>
            <div className='form__field'>
              <input type="email" onChange={handleOnChange} name="email" className='form__input' placeholder=" " required />
              <label className='form__label' htmlFor=''>الإيميل</label>
            </div>
            <p className='form__p'>{formErrors.email}</p>
            <div className='form__field'>
              <input type="password" onChange={handleOnChange} name="password" className='form__input' placeholder=" " required />
              <label className='form__label' htmlFor=''>كلمة المرور</label>
            </div>
            <p className='form__p'>{formErrors.password}</p>
            <input type='submit' value="الدخول" className='form__button'/>
          </form>
        </div>)
    }
}

export default LogIn
