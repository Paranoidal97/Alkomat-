import React from "react";

/* Import Components */
import Input from "../components/Input";
import Button from "../components/Button";
import Alcohol from '../components/Alcohol'

const StepTwo = props => {
  return (
    <div>
      {Alcohol.map(e => {
        return (<Input
          inputType={"number"}
          name={e.title}
          title={e.title}
          placeholder={"Enter your amount"}
          value={e.amount}
          handleChange={props.handleInput} />)
      })}
      <Button
        action={props.handleFormSubmit}
        type={"primary"}
        title={"Submit"}
      />
      {/*Submit */}
      <Button
        action={props.handleClearForm}
        type={"secondary"}
        title={"Clear"}
      />
    </div>
  );
}

export default StepTwo;