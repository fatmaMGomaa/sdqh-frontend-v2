import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from "react-router-dom";
import axios from 'axios';
import { saveToLocalStorage, getLocalStorageItem } from "../../../util/localStorage";

import '../Form.scss';

const EditUser = () => {
  let history = useHistory();
  const url = process.env.REACT_APP_BACKEND_URL;
  const token = getLocalStorageItem("token");
  const user = getLocalStorageItem("user");
  user['password']=''
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
          localStorage.clear();
          saveToLocalStorage("token", response.data.token);
          saveToLocalStorage("user", response.data.user);
          history.push(`/user/${user.id}`);
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
    if(!values.newPassword){
      errors.newPassword = 'new Password Is Required'
    }else if(values.newPassword < 5){
      errors.newPassword = 'new password should be more than 5'
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
    <div className='form-container main-container'>
      <form method="POST" name="signup" id="signup" className='form' onSubmit={handleSubmit}>
        <div className='form__field'>
            <input type="text" onChange={handleOnChange} name="firstName" className='form__input' placeholder=" " required value={formValues['firstName']}/>
            <label className='form__label' htmlFor=''>الاسم الأول</label>
        </div>
        <p className='form__p'>{formErrors.firstName}</p>
        <div className='form__field'>
            <input type="text" onChange={handleOnChange} name="lastName" className='form__input' placeholder=" " required value={formValues['lastName']} />
            <label className='form__label' htmlFor=''>اسم العائلة</label>
        </div>
        <p className='form__p'>{formErrors.lastName}</p>
        <div className='form__field'>
          <input type="email" onChange={handleOnChange} name="email" className='form__input' placeholder=" " required value={formValues['email']}/>
          <label className='form__label' htmlFor=''>الإيميل</label>
        </div>
        <p className='form__p'>{formErrors.email}</p>
        <div className='form__field'>
          <input type="password" onChange={handleOnChange} name="password" className='form__input' placeholder=" " required />
          <label className='form__label' htmlFor=''>كلمة المرور</label>
        </div>
        <p className='form__p'>{formErrors.password}</p>
        <div className='form__field'>
          <input type="password" onChange={handleOnChange} name="newPassword" className='form__input' placeholder=" " required />
          <label className='form__label' htmlFor=''>كلمة المرور الجديدة</label>
        </div>
        <p className='form__p'>{formErrors.password}</p>
        <div className='form__field'>
          <select onChange={handleOnChange} name="gender" className='form__input form__select' placeholder=" " required value={formValues['gender']}>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
          </select>
          <label className='form__label' htmlFor=''> الجنس</label>
        </div>
          <p className='form__p'>{formErrors.gender}</p>
        <div className='form__field'>
          <input type="date" onChange={handleOnChange} name="birthDate" className='form__input form__select' required value={formValues['birthDate']} />
          <label className='form__label' htmlFor='start'>تاريخ الميلاد</label>
        </div>
          <p className='form__p'>{formErrors.birthDate}</p>
        <div className='form__field'>
            <input type="url" onChange={handleOnChange} name="image" className='form__input' placeholder=" " value={formValues['image']} />
            <label className='form__label' htmlFor=''>لينك الصورة</label>
        </div>
        <p className='form__p'>{formErrors.image}</p>
        <input onClick={handleSubmit} type='submit' value='تعديل الحساب' className='form__button'/>
      </form>
    </div>
  )
}

export default EditUser
