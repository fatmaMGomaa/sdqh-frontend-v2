import React from 'react'
import {human_tags, animal_tags, countries, cities} from "../../util/generic_variables"
import './Filters.scss'

const Filters = ({caseFilters, setCaseFilters, caseType}) => {

  let tags = caseType === 'animal' ? animal_tags : human_tags
  let country_cities = cities[caseFilters.filter_country]

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    name === 'filter_country' ? setCaseFilters({...caseFilters, [name]: value, filter_city: ''}) : setCaseFilters({...caseFilters, [name]: value});
  }

  return (
    <div className='form-container'>
        <form method="POST" name="filters" id="filters" className='form filters_form'>
          <div className='form__field'>
            <select onChange={handleOnChange} name="filter_country" className='form__input form__select' placeholder=" " required value={caseFilters.filter_country}>
              {Object.values(countries).map((item, i) => <option value={item} key={i}>{item}</option>) }  
            </select>
            <label className='form__label' htmlFor=''> البلد</label>
          </div>
          <div className='form__field'>
            <select onChange={handleOnChange} name="filter_city" className='form__input form__select' placeholder=" " required value={caseFilters.filter_city}>
              <option value=''>جميع الحالات</option>
              {country_cities.map((item, i) => <option value={item} key={i}>{item}</option>) }  
            </select>
            <label className='form__label' htmlFor=''> المدينة</label>
          </div>
          <div className='form__field'>
            <select onChange={handleOnChange} name="filter_tag" className='form__input form__select' placeholder=" " required value={caseFilters.filter_tag}>
              <option value=''>جميع الحالات</option>
              {tags.map((item, i) => <option value={item} key={i}>{item}</option>) }
            </select>
            <label className='form__label' htmlFor=''>تاج</label>
          </div>
        </form>
      </div>
      
  )
}

export default Filters
