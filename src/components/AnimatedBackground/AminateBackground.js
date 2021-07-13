import React, { useState } from "react";
import Stepper from "../Stepper/Stepper";
import "./Animate.css";

const AminateBackground = () => {
  const [data] = useState([
    {
      description: "create an account",
      completed: false,
      selected: false,
      highlighted: false,
    },
    {
      description: "create reg number",
      completed: false,
      selected: false,
      highlighted: false,
    },
    {
      description: "create phone detail",
      completed: false,
      selected: false,
      highlighted: false,
    },
    {
      description: "submit application",
      completed: false,
      selected: false,
      highlighted: false,
    },
  ]);
  return (
    <div>
      <header className="header">
        <ul>
          <li>HOme</li>
          <li>About</li>
          <li>Company</li>
          <li>Login</li>
          <li>Service</li>
        </ul>
      </header>
      <div className="boxes">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Stepper steps={data} currentStepNumber={2} />
    </div>
  );
};

export default AminateBackground;
