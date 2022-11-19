import React from 'react'
import '../styles/Filter.css'
import Icon from './Icon.jsx'

const toggle = (x, lst) =>
  lst.includes(x) ? lst.filter(y => y !== x) : [x, ...lst];

const Filter = ({ filterCategories, setFilterCategories, value, dataTestID }) => {
  return (
    <div className='filter'>
      <input className="form-check-input" type="checkbox" id={value} value={value} data-testid = {dataTestID}
        onChange={e => setFilterCategories(toggle(e.target.value, filterCategories))} />
      <label className="form-check-label" htmlFor={value} >
      
      <Icon type={value}></Icon>
        <p>{value}</p>
      </label>
    </div>
  )
}
export default Filter;