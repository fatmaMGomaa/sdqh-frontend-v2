import React, { useState, useEffect } from 'react';
import { saveToLocalStorage } from "../../util/localStorage";

const SignUp = () => {
  const initial_values = {first_name: '', last_name: '', email: '', password: '', gender: '', birthdate: '', image: ''}
  const [formValues, setFormValues] = useState(initial_values);
  const [formErrors, setFormErrors] = useState({});
  

  useEffect(() => {
    if(Object.keys(formErrors).length === 0){
      console.log(formValues);
    }
  }, [formErrors])

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateValues(formValues));

  }

  const validateValues = (values) => {
    const errors = {}
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    

    if(!values.first_name){
      errors.first_name = 'First Name Is Required'
    }
    if(!values.lastt_name){
      errors.last_name = 'Last Name Is Required'
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
    if(!values.birthdate){
      errors.birthdate = 'Birth Date Is Required'
    }
    return errors;
  }


  return (
    <div className='signup-container'>
      <form method="POST" name="signup" id="signup" onSubmit={handleSubmit}>
        <div className='signup-container__field'>
            <label>الاسم الأول: <input type="text" onChange={handleOnChange} name="first_name" id="first_name" required /></label>
        </div>
        <p>{formErrors.first_name}</p>
        <div className='signup-container__field'>
            <label>اسم العائلة: <input type="text" onChange={handleOnChange} name="last_name" id="last_name" required /></label>
        </div>
        <p>{formErrors.last_name}</p>
        <div className='signup-container__field'><label>الإيميل: <input type="email" onChange={handleOnChange} name="email" id="email" required /></label></div>
        <p>{formErrors.email}</p>
        <div className='signup-container__field'><label>كلمة المرور: <input type="password" onChange={handleOnChange} name="password" id="password" required /></label></div>
        <p>{formErrors.password}</p>
        <div className='signup-container__field'>
          <div>
              <label>
                  الجنس:
                <select onChange={handleOnChange} name="gender" id="gender" required>
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                </select>
              </label>
          </div>
          <p>{formErrors.gender}</p>
          <div><label>تاريخ الميلاد: <input type="date" onChange={handleOnChange} name="birthdate" id="birthdate" required /></label></div>
          <p>{formErrors.birthdate}</p>
        </div>
        <div className='signup-container__field'>
            <label>لينك الصورة*<input type="url" onChange={handleOnChange} name="image" id="image"/></label>
        </div>
        <p>{formErrors.image}</p>
        <button onClick={handleSubmit} type='submit'>إنشاء حساب جديد</button>
      </form>
    </div>
  )
}

export default SignUp
