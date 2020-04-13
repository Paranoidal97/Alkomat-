import React from 'react'

const Select = props => {
  let maping = props.options.map((option)=>{
    return(
      <option key={option} value={option} label={option}>
              {option}
            </option>
    )
  })
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={props.name}>
        {props.title}
      </label>
      <select
        type="select"
        className="form-control"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      >
        {maping}
      </select>
    </div>
  );
};
export default Select;