import React, { useState } from 'react';
import axios from 'axios';
import { saveToLocalStorage } from "../../../util/localStorage";

const LogIn = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const initial_values = {email: '', password: ''}
  const [formValues, setFormValues] = useState(initial_values);
  const [formErrors, setFormErrors] = useState({});

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
          saveToLocalStorage("userId", response.data.user.id);
          window.location.replace(process.env.REACT_APP_FRONTEND_URL);
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


  return (
    <div className='login-container'>
      <form method="POST" name="login" id="login" onSubmit={handleLogin}>
        
        <div className='login-container__field'><label>الإيميل: <input type="email" onChange={handleOnChange} name="email" id="email" required /></label></div>
        <p>{formErrors.email}</p>
        <div className='login-container__field'><label>كلمة المرور: <input type="password" onChange={handleOnChange} name="password" id="password" required /></label></div>
        <p>{formErrors.password}</p>
        
        <button onClick={handleLogin} type='submit'>دخول</button>
      </form>
    </div>
  )
}

export default LogIn
