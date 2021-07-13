import React, { useEffect, useState } from "react";
import "./Stepper.css";
import PropTypes from "prop-types";

const Stepper = ({ steps, currentStepNumber }) => {
  const [stepToTake, setStepToTake] = useState([]);

  useEffect(() => {
    const stepsState = steps.map((step, index) => {
      const stepObj = {};
      stepObj.description = step;
      stepObj.completed = false;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index === 0 ? true : false;

      return stepObj;
    });
    const currentSteps = updateSteps(currentStepNumber - 1, stepsState);
    setStepToTake(currentSteps);
  }, [setStepToTake, steps, currentStepNumber]);

  const updateSteps = (stepNumber, steps) => {
    // console.log(currentStepNumber);
    const newSteps = [...steps];
    let stepCounter = 0;
    while (stepCounter < newSteps.length) {
      //  current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      } else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      }
      //future step
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }
    return newSteps;
  };

  return (
    <div className="stepper-container-horizontal">
      <div className="stepper-wrapper-horizontal">
        {stepToTake.map((step, index) => (
          <div key={index} className="step-wrapper ">
            <div
              className={`step-number ${
                step.selected ? "step-number-active" : "step-number-disabled"
              }`}
            >
              {step.completed ? <span>&#10003;</span> : index + 1}
            </div>
            <small
              className={`step-description ${
                step.highlighted ? "step-description-active" : null
              }`}
            >
              {" "}
              {step["description"].description}
            </small>
            <div
              className={
                index !== stepToTake.length - 1
                  ? `divider-line divider-line-${stepToTake.length}`
                  : null
              }
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;

Stepper.propTypes = {
  direction: PropTypes.string,
  steps: PropTypes.array.isRequired,
};
