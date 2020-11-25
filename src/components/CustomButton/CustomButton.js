import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({ children }, placeholder) => {
  return (
    <div>
      <input type="button" placeholder={placeholder} />
    </div>
  );
};

CustomButton.propTypes = {};

export default CustomButton;
