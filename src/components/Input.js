import React from "react";


const Input = props => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={props.name}>
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.id}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};
 export default Input;