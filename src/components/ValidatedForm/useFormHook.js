//eslint
import { useEffect, useState } from "react";

const useFormHook = (callback, validateForm) => {
  // const [isSubmitting, setIsSubmitting] = useState(false)
  const [values, setValues] = useState({
    // username: "",
    // email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setErrors(validateForm(values));
    console.log(values);
  };
  //   useEffect(() => {
  //      if (Object.keys(errors).length === 0 && isSubmitting) {
  //          callback()
  //      }
  //   }, [])
  return { handleChange, values, handleSumbit, errors };
};
export default useFormHook;
