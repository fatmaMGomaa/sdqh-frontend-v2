import React, { useState } from 'react';
import axios from 'axios';
import { saveToLocalStorage } from "../../../util/localStorage";

const AddCase = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const initial_values = {name: '', city: '', address: '', uniqueSign: '', description: '', mobileNumber: '', image: ''}
  const [formValues, setFormValues] = useState(initial_values);
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
    <div>
      <form  method="POST" name="add_case" id="add_case" onSubmit={handleSubmit}>
        <label>نوع الحيوان: <input type="text" name="name" id="name" required onChange={handleOnChange}/></label>
        <label>
            البلد
            <select name="city" id="city" required onChange={handleOnChange}>
                <option value="مصر">مصر</option>
                <option value="الامارات">الإمارات</option>
                <option value="السعودية">السعودية</option>
            </select>
        </label>
        <label>
            العنوان كامل
            <textarea rows="5" name="address" id="address" required onChange={handleOnChange}></textarea>
        </label>
        <label>علامة مميزة<input type="text" name="unique-sign" id="unique-sign" required onChange={handleOnChange}/></label>
        <label>
            وصف الحالة
            <textarea rows="10" name="description" id="description" required onChange={handleOnChange}></textarea>
        </label>
        <label>رقم تليفون*<input type="tel" name="mobile-number" id="mobile-number" onChange={handleOnChange}/></label>
        <label>لينك الصورة*<input type="url" name="image" id="image" onChange={handleOnChange}/></label>
        {/* <label class="image">صورة الحالة*<input type="file" name="image" id="image" class="image"/></label> */}
        <button type="submit" onClick={handleSubmit}>حفظ</button>
    </form>
    </div>
  )
}

export default AddCase
