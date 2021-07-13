// import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./style.module.css";

const options = ["apple", "pineapples", "berry", "orange", "gauva"];
const DropDown = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => {
    setIsOpen(!isOpen);
  };
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div className={styles.DropDown_container}>
      <div onClick={toggling} className={styles.DropDown_header}>
        {selectedOption || "Mangoes"}
      </div>
      {isOpen && (
        <div>
          <ul className={styles.DropDownMenuList}>
            {options.map((option) => (
              <li
                onClick={onOptionClicked(option)}
                key={Math.random()}
                className={styles.listItem}
              >
                {option}
              </li>
            ))}
            <li>Oranges</li>
          </ul>
        </div>
      )}
    </div>
  );
};

// DropDown.propTypes = {};

export default DropDown;
