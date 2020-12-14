import React from "react";


const StepThree = props => {
  return (
    <div>
          {props.maping.map((item) => {
            let HourseAfter = props.maping.indexOf(item);
            return <li key={HourseAfter}>{HourseAfter} hours after the end of drinking, your blood alcohol contentration will be {item}</li>
    
          })}
        </div>)
}

export default StepThree;