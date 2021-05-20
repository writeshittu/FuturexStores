import React, { useState } from "react";
import NavBtn from "../CustomButton/CustomButton";
import "./Stepper.css";

const Stepper = () => {
  const [stepState, setStepState] = useState([
    {
      description: "create an account",
      completed: false,
      selected: true,
      highlighted: true,
    },
    {
      description: "create reg number",
      completed: false,
      selected: true,
      highlighted: true,
    },
    {
      description: "create phone detail",
      completed: false,
      selected: true,
      highlighted: true,
    },
    {
      description: "create ant",
      completed: false,
      selected: true,
      highlighted: true,
    },
  ]);
  const stepArray = [
    "create an account",
    "provide bvn",
    "payment verify",
    "payment vevfbgbfdfdfbrify",
    "payment veffbfgbrify",
    "payment verify",
    "payment csd",
    "payment verify",
    "payment ve dfbdbrify",
    "payment verify",
    "payment verify",
    "payment verify",
    "done",
    "registered",
  ];
  return (
    <div className="containers">
      <div className="progress-container">
        {stepArray.map((step, index) => (
          <div key={index} className="step-wrapper">
            <div
              className={index !== stepArray.length - 1 && "progresss"}
              id="progress"
            ></div>

            <div className="circle active"> {index + 1}</div>
            <div className="step-description"> {step}</div>
            <div className="step-description">
              {" "}
              "provide bvn", "payment verify", "payment vevfbgbfdfdfbrify",
              "payment veffbfgbrify", "payment verify", "payment csd", "payment
              verify", "payment ve dfbdbrify", "payment verify", "payment
              verify", "payment verify",
            </div>
          </div>
        ))}
      </div>
      <NavBtn>Prev</NavBtn>
      <NavBtn>Next</NavBtn>
    </div>
  );
};

export default Stepper;

// import React, { useState } from "react";
// import "./Stepper.css";
// const Stepper = (props) => {
//   const [data, setData] = useState([
//     "create an account",
//     "provide bvn",
//     "payment verify",
//     "done",
//   ]);
//   const stepArray = [
//     "create an account",
//     "provide bvn",
//     "payment verify",
//     "payment verify",
//     "payment verify",
//     "payment verify",
//     "payment verify",
//     "payment verify",
//     "payment verify",
//     "payment verify",
//     "payment verify",
//     "payment verify",
//     "done",
//     "registered",
//   ];
//   return (
//     <div className="stepper-container-vertical">
//       <div className="stepper-wrapper-vertical">
//         {stepArray.map((step, index) => (
//           <div key={index} className="step-wrapper">
//             <div className="step-number"> {index + 1}</div>
//             <div className="step-description"> {step}</div>
//             <div className={index !== stepArray.length - 1 && "divider-line"}>
//               {" "}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Stepper;
