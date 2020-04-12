import React from "react";

/* Import Components */
import Input from "../components/Input";
import Select from "../components/Select";

const StepThree = props => {
    return (
      <div>
          <Input
            inputType={"number"}
            name={"Weight"}
            title={"Weight"}
            placeholder={"Enter your weight"}
            value={props.weight}
            handleChange={props.handleWeight}
          />
          <Select
            title={"Gender"}
            name={"gender"}
            placeholder={"Select Gender"}
            options={props.genderOptions}
            value={props.User.gender}
            handleChange={props.handleInput}
          />
          <Input
            inputType={"number"}
            name={"time"}
            title={"Time"}
            placeholder={"drinking time in hours"}
            value={props.time}
            handleChange={props.handleTime}
          />
      </div>
    );
}

export default StepThree;