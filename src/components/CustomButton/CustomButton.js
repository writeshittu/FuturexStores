import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div>
      <input type="button" placeholder={placeholder} {...otherProps} />
    </div>
  );
};

// CustomButton.propTypes = {};

export default CustomButton;
