import React from 'react'

const Select = props => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={props.title}>
        {props.title}
      </label>
      <select
        className="form-control"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      >
        <option key="Male" value="Male" label="Male">
              Male
            </option>
            <option key="Female" value="Female" label="Female">
              Female
            </option>
      </select>
    </div>
  );
};
export default Select;