import React from "react";

/* Import Components */
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

const StepOne = props => {
    return (
      <div>
          <Input
          inputType={"number"}
            name={"weight"}
            title={"weight"}
            placeholder={"Enter your weight"}
            value={props.weight}
            handleChange={props.handleWeight}
          />
          <Select
            title={"gender"}
            name={"gender"}
            placeholder={"Select Gender"}
            options={props.genderOptions}
            value={props.gender}
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
            <Button
            action={props.nextStep}
            type={"primary"}
            title={"Next Step"}
          />
      </div>
    );
}

export default StepOne;