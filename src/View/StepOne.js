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
            title={"Weight"}
            placeholder={"Enter your weight"}
            value={props.weight}
            handleChange={props.handleInput}
          />
          <div>{props.weighterror}</div>
          <Select
            title={"Gender"}
            name={"gender"}
            placeholder={"Select Gender"}
            value={props.gender}
            handleChange={props.handleInput}
          /><div>{props.gendererror}</div>
          <Input
            inputType={"number"}
            name={"time"}
            title={"Time"}
            placeholder={"Drinking time in hours"}
            value={props.time}
            handleChange={props.handleInput}
          /><div>{props.timeerror}</div>
            <Button
            action={props.nextStep}
            type={"primary"}
            title={"Next Step"}
          />
      </div>
    );
}

export default StepOne;