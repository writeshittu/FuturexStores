import useFormHook from "./useFormHook";
import { validateForm } from "./ValidateFormInfo";
const UseHookFormValidation = (props) => {
  const { handleChange, values, handleSumbit, errors } =
    useFormHook(validateForm);
  return (
    <div className="container">
      <form className="form" onSubmit={handleSumbit}>
        <div className="">
          <label htmlFor="username">username</label>
          <input
            id=" username"
            type="text"
            name=" username"
            className="form-input"
            placeholder="username ni "
            onChange={handleChange}
            value={values.username}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div className="">
          <label htmlFor="username">username</label>
          <input
            id=" email"
            type="email"
            name=" email"
            className="form-input"
            placeholder="email ni "
            onChange={handleChange}
            value={values.email}
          />
          {errors.username && <span>{errors.email}</span>}
        </div>
        <button>Forgets</button>
      </form>
    </div>
  );
};

export default UseHookFormValidation;
