import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { saveToLocalStorage, getLocalStorageItem } from "../../../util/localStorage";

const EditUser = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const token = getLocalStorageItem("token");
  const user = getLocalStorageItem("user");
  const [formValues, setFormValues] = useState({...user, newPassword: ''});
  const [formErrors, setFormErrors] = useState({});
  

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateValues(formValues));
    if(Object.keys(formErrors).length === 0){
      axios
        .put(`${url}/updateUser`, formValues, {
          headers: {
              accept: "application/json",
              "Accept-Language": "en-US,en;q=0.8",
              Authorization: `bearer ${token}`
          }
      })
        .then(response => {
          console.log(response);
          localStorage.clear();
          saveToLocalStorage("token", response.data.token);
          saveToLocalStorage("userId", response.data.user.id);
          saveToLocalStorage("user", response.data.user);
          // window.location.replace(process.env.REACT_APP_FRONTEND_URL);
        })
        .catch(error => {
          console.log(error);
        });
    };
  }

  const validateValues = (values) => {
    const errors = {}
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    

    if(!values.firstName){
      errors.firstName = 'First Name Is Required'
    }
    if(!values.lastName){
      errors.lastName = 'Last Name Is Required'
    }
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
    if(!values.gender){
      errors.gender = 'Gender Is Required'
    }
    if(!values.birthDate){
      errors.birthDate = 'Birth Date Is Required'
    }
    return errors;
  }


  return (
    <div className='signup-container'>
      <form method="POST" name="signup" id="signup" onSubmit={handleSubmit}>
        <div className='signup-container__field'>
            <label>الاسم الأول: <input type="text" onChange={handleOnChange} name="firstName" id="firstName" required value={formValues['firstName']}/></label>
        </div>
        <p>{formErrors.firstName}</p>
        <div className='signup-container__field'>
            <label>اسم العائلة: <input type="text" onChange={handleOnChange} name="lastName" id="lastName" required value={formValues['lastName']} /></label>
        </div>
        <p>{formErrors.lastName}</p>
        <div className='signup-container__field'><label>الإيميل: <input type="email" onChange={handleOnChange} name="email" id="email" required value={formValues['email']}/></label></div>
        <p>{formErrors.email}</p>
        <div className='signup-container__field'><label>كلمة المرور: <input type="password" onChange={handleOnChange} name="password" id="password" required /></label></div>
        <p>{formErrors.password}</p>
        <div className='signup-container__field'><label>كلمة المرور الجديدة: <input type="password" onChange={handleOnChange} name="newPassword" id="newPassword" required /></label></div>
        <p>{formErrors.password}</p>
        <div className='signup-container__field'>
          <div>
              <label>
                  الجنس:
                <select onChange={handleOnChange} name="gender" id="gender" required value={formValues['gender']}>
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                </select>
              </label>
          </div>
          <p>{formErrors.gender}</p>
          <div><label>تاريخ الميلاد: <input type="date" onChange={handleOnChange} name="birthDate" id="birthDate" required value={formValues['birthDate']}/></label></div>
          <p>{formErrors.birthDate}</p>
        </div>
        <div className='signup-container__field'>
            <label>لينك الصورة*<input type="url" onChange={handleOnChange} name="image" id="image" value={formValues['image']}/></label>
        </div>
        <p>{formErrors.image}</p>
        <button onClick={handleSubmit} type='submit'>تعديل الحساب</button>
      </form>
    </div>
  )
}

export default EditUser
