import React from 'react'
import '../styles/Filter.css'
import Icon from './Icon.jsx'

const toggle = (x, lst) =>
  lst.includes(x) ? lst.filter(y => y !== x) : [x, ...lst];

const Filter = ({ selectedOptions, setSelectedOptions, value, dataTestID }) => {
  console.log(selectedOptions)
  return (
    <div className='filter'>
      <input className="form-check-input" type="checkbox" id={value} value={value} data-testid = {dataTestID}
        onChange={e => setSelectedOptions({...selectedOptions, "Dietary Restrictions": toggle(e.target.value, selectedOptions["Dietary Restrictions"])})} />
      <label className="form-check-label" htmlFor={value} >
      
      <Icon type={value}></Icon>
        <p>{value}</p>
      </label>
    </div>
  )
}
export default Filter;