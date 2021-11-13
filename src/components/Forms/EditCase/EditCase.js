import React, { useState, useContext, useEffect } from 'react'
import { useHistory, Link } from "react-router-dom";
import axios from 'axios'
import {AuthContext} from '../../../Contexts/UserProvider'

import '../AddCase/AddCase.scss'

const EditCase = () => {
  let history = useHistory();
  const {loggedUser, isLogged, userToken, userLocation, editCase, setEditCase} = useContext(AuthContext);
  const url = process.env.REACT_APP_BACKEND_URL;
  const initial_values = {caseType: 'human', name: '', country: 'مصر', address: '', uniqueSign: '', description: '', mobileNumber: '', image: '', userId: '', lat: '' , lng: '' }

  const [formValues, setFormValues] = useState(initial_values);
  const [formErrors, setFormErrors] = useState({});

  // need to revision
  useEffect(() => {
    let currentCase = {caseType: editCase.caseType, name: editCase.name || editCase.species, country: editCase.area, address: editCase.address, uniqueSign: editCase.uniqueSign, description: editCase.description, mobileNumber: editCase.mobileNumber, image: editCase.image, userId: editCase.userId, lat: editCase.lat , lng: editCase.lng }
    setFormValues(currentCase);
    console.log(editCase);
  },[loggedUser, userLocation, editCase]) 

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateValues(formValues));
    if(Object.keys(formErrors).length === 0 && isLogged){
      axios
        .put(`${url}/editCase/${editCase.id}/${loggedUser.id}`, formValues, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            Authorization: `bearer ${userToken}`
          }
        })
        .then(response => {
          console.log(response);
          setEditCase({})
          history.push(`/case/${response.data.case.id}/?caseType=${formValues.caseType}`);
        })
        .catch(error => {
          console.log(error);
        });
    }else {
      console.log('you have to log in first and fill all needed information')
    };
  }

  const validateValues = (values) => {
    const errors = {}
    
    if(!values.name){
      errors.name = 'يجب إدخال اسم/فصيلة الحالة'
    }
    if(!values.address){
      errors.address = 'يجب إدخال عنوان الحالة'
    }
    if(!values.description){
      errors.description = 'يجب إدخال وصف الحالة'
    }
    if(!values.country){
      errors.country = 'يجب إدخال بلد الحالة'
    }
    if(!values.caseType){
      errors.caseType = 'يجب إدخال نوع الحالة'
    }
    return errors;
  }
  if(isLogged){
    return (
      <div className='form-container'>
        <form method="POST" name="post_case" id="post_case" className='form' onSubmit={handleSubmit}>
          <div className='form__field'>
            <input type="text" onChange={handleOnChange} name="name" className='form__input' placeholder=" " required value={formValues['name']}/>
            <label className='form__label' htmlFor=''>الاسم</label>
          </div>
          <p className='form__p'>{formErrors.name}</p>
          <div className='form__field'>
            <input type="text" onChange={handleOnChange} name="address" className='form__input' placeholder=" " required value={formValues['address']} />
            <label className='form__label' htmlFor=''>العنوان</label>
          </div>
          <p className='form__p'>{formErrors.address}</p>
          <div className='form__field'>
            <input type="text" onChange={handleOnChange} name="uniqueSign" className='form__input' placeholder=" " value={formValues['uniqueSign']} />
            <label className='form__label' htmlFor=''>علامة مميزة</label>
          </div>
          <p className='form__p'>{formErrors.uniqueSign}</p>
          <div className='form__textarea-field'>
            <textarea onChange={handleOnChange} name="description" id="description" className='form__input form__textarea' placeholder=" " required value={formValues['description']}></textarea>
            <label className='form__label' htmlFor=''>وصف الحالة</label>
          </div>
          <p className='form__p'>{formErrors.description}</p>
          <div className='form__field'>
            <select onChange={handleOnChange} name="country" className='form__input form__select' placeholder=" " required value={formValues['country']}>
              <option value="مصر">مصر</option>
              <option value="الامارات">الإمارات</option>
              <option value="السعودية">السعودية</option>
            </select>
            <label className='form__label' htmlFor=''> البلد</label>
          </div>
          <p className='form__p'>{formErrors.country}</p>
          <div className='form__field'>
            <input type="tel" onChange={handleOnChange} name="mobileNumber" className='form__input' placeholder=" " value={formValues['mobileNumber']} />
            <label className='form__label' htmlFor=''>رقم التليفون</label>
          </div>
          <div className='form__field'>
            <input type="url" onChange={handleOnChange} name="image" className='form__input' placeholder=" " value={formValues['image']} />
            <label className='form__label' htmlFor=''>لينك الصورة</label>
          </div>
          <input onClick={handleSubmit} type='submit' value='حفظ الحالة' className='form__button'/>
        </form>
      </div>
    )
  }else{
    return <h3 className='login__error'>يجب تسجيل الدخول أولا <Link to='/login'>أضغط هنا</Link></h3>
  }
  
}

export default EditCase
