import React, { useEffect } from "react";

import "./custombtn.css";

const ButtonRippleHover = () => {
  //   useEffect(() => {
  //     const createRipple = () => {
  //       const btn = document.querySelector(".ripple_button");
  //       btn.onMouseMove = (e) => {
  //         const x = e.pageX - btn.offSetLeft;
  //         const y = e.pageY - btn.offSetTop;
  //         btn.getElementsByClassName.setProperty("--x", x + "px");
  //         btn.getElementsByClassName.setProperty("--y", y + "px");
  //       };
  //     };
  //     createRipple();
  //     console.log("jij");
  //   }, []);

  return (
    <>
      <button className="ripple_button">Click Me For Ripple</button>
    </>
  );
};

export default ButtonRippleHover;
