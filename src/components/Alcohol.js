import React from "react";

class Alcohol extends React.Component {

    render(){
        const {title, inputType, value, placeholder, handleChange } = this.props;

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={this.props.item.title}>
        {this.props.item.title}
      </label>
      <input
        className="form-control"
        name={title}
        type={inputType}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
};

 export default Alcohol;