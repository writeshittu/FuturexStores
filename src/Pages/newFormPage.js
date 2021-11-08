import { useState } from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import FormInput from "../components/newFormInput";

const NewFormPage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    date: "",
  });
  const inputsArray = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "enter name",
      label: "Fullname",
      errorMessage:
        "username should be 3-18 characters and shouldn't include any special characters!  ",
      required: true,
      pattern: "^[A-Za-z0-9]{3,18}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "enter email",
      label: "Email",
      errorMessage: "it should be valid email address",
      required: true,
      //   pattern:"^[A-Za-z0-9]{}"
    },
    {
      id: 5,
      name: "Date",
      type: "date",
      placeholder: "enter date",
      label: "Date of birth",
      errorMessage: "input valid date",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "enter Password",
      label: "Password",
      errorMessage: "password should be 8-20 characters!  ",
      required: true,
      //   pattern: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd@$£!%*#?&^_-]{8,20}$",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "enter confirm Password",
      label: "Confirm Password",
      errorMessage: "password do not match",
      required: true,
      pattern: values.password,
    },
  ];

  const handleFormChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    // console.log(values);
  };
  return (
    <div>
      {inputsArray.map((input) => (
        <FormInput
          key={input.id}
          placeholder={input.placeholder}
          {...input}
          value={values[input.name]}
          onChange={handleFormChange}
        />
      ))}
      <CustomButton>asasasas</CustomButton>
      {JSON.stringify(values)}
    </div>
  );
};

export default NewFormPage;
