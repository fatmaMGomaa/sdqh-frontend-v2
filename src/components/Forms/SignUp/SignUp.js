import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { saveToLocalStorage } from "../../../util/localStorage";

import '../Form.scss';

const SignUp = ({edit=false}) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const initial_values = {firstName: '', lastName: '', email: '', password: '', gender: 'male', birthDate: '', image: ''}
  const [formValues, setFormValues] = useState(initial_values);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);
  

  // useEffect(() => {
  //   if(edit){

  //   }
  // }, [])

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateValues(formValues));
    if(Object.keys(formErrors).length === 0){
      axios
        .post(`${url}/signup`, formValues)
        .then(response => {
          console.log(response);
          localStorage.clear();
          saveToLocalStorage("token", response.data.token);
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
    <div className='form-container'>
      <form method="POST" name="signup" id="signup" className='form' onSubmit={handleSubmit}>
        <div className='form__field'>
            <input type="text" onChange={handleOnChange} name="firstName" className='form__input' placeholder=" " required />
            <label className='form__label' htmlFor=''>الاسم الأول</label>
        </div>
        <p className='form__p'>{formErrors.firstName}</p>
        <div className='form__field'>
            <input type="text" onChange={handleOnChange} name="lastName" className='form__input' placeholder=" " required />
            <label className='form__label' htmlFor=''>اسم العائلة</label>
        </div>
        <p className='form__p'>{formErrors.lastName}</p>
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
      <div className='form__field'>
          <select onChange={handleOnChange} name="gender" className='form__input form__select' placeholder=" " required>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
          </select>
          <label className='form__label' htmlFor=''> الجنس</label>
        </div>
          <p className='form__p'>{formErrors.gender}</p>
        <div className='form__field'>
          <input type="date" onChange={handleOnChange} name="birthDate" className='form__input form__date' required />
          <label className='form__label' htmlFor='start'>تاريخ الميلاد</label>
        </div>
          <p className='form__p'>{formErrors.birthDate}</p>
        <div className='form__field'>
            <input type="url" onChange={handleOnChange} name="image" className='form__input' placeholder=" "/>
            <label className='form__label' htmlFor=''>لينك الصورة</label>
        </div>
        <p className='form__p'>{formErrors.image}</p>
        <input onClick={handleSubmit} type='submit' value='إنشاء حساب جديد' className='form__button'/>
      </form>
    </div>
  )
}

export default SignUp
