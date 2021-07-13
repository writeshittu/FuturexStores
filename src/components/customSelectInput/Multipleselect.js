import React, { useState } from "react";
import styles from "./select.module.css";
const Multipleselect = () => {
  const [state, setstate] = useState({
    categories: [
      { id: 1, value: "PHP" },
      { id: 2, value: "Laravel" },
      { id: 3, value: "WordPress" },
      { id: 4, value: "Joomla" },
    ],
    selCategories: "php",
  });
  const handleChange = (event) => {
    const selected = [];
    let selectedOption = event.target.selectedOptions;

    for (let i = 0; i < selectedOption.length; i++) {
      selected.push(selectedOption.item(i).value);
    }
    console.log(selected);
    setstate({ ...state, selCategories: selected });
  };

  const handleSubmit = (event) => {
    console.log(state);
    console.log("EGE E");
    event.preventDefault();
  };
  return (
    <div>
      <div>
        <h1>React Select Dropdown onChange Example - codechief.org</h1>
        <form onSubmit={handleSubmit}>
          <strong>Select Category:</strong>
          <select multiple onChange={handleChange}>
            {state.categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.value}
              </option>
            ))}
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Multipleselect;
