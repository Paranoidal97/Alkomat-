import React from "react";

/* Import Components */
import Input from "../components/Input";
import Button from "../components/Button";

const StepTwo = props => {
    return (
      <div>
          <Input
            inputType={"number"}
            name={props.Big_Beer_title}
            title={props.Big_Beer_title}
            placeholder={"Enter your amount"}
            value={props.Big_Beer_amount}
            handleChange={props.handleBigBeer}
          />
          <Input
            inputType={"number"}
            name={props.Small_Beer_title}
            title={props.Small_Beer_title}
            placeholder={"Enter your amount"}
            value={props.Small_Beer_amount}
            handleChange={props.handleSmallBeer}
          />
          <Input
            inputType={"number"}
            name={props.Vodka_title}
            title={props.Vodka_title}
            placeholder={"Enter your amount"}
            value={props.Vodka_amount}
            handleChange={props.handleVodka}
          />
          <Input
            inputType={"number"}
            name={props.Wine_title}
            title={props.Wine_title}
            placeholder={"Enter your amount"}
            value={props.Wine_amount}
            handleChange={props.handleWine}
          />
          <Input
            inputType={"number"}
            name={props.Champagne_title}
            title={props.Champagne_title}
            placeholder={"Enter your amount"}
            value={props.Champagne_amount}
            handleChange={props.handleChampagne}
          />
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