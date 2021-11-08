import { useState } from "react";
import styles from "./inputField.module.css";
const FormInput = ({ label, errorMessage, onChange, ...otherProp }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  return (
    <div className={styles.input_wrapper}>
      {label && <label className={styles.inputLabel}>{label}</label>}
      <input
        className={styles.inputField}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => otherProp.name === "confirmPassword" && setFocused(true)}
        // onFocus={ Object.keys(Obj)[Object.keys(Obj).length-1  }
        {...otherProp}
        focused={focused.toString()}
      />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;
