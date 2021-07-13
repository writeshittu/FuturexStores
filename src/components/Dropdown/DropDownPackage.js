import { useState } from "react";
import Select from "react-dropdown-select";

const DropDownPackage = () => {
  const option = [
    {
      lat: "-53.9620",
      lng: "159.8840",
    },
    {
      lat: "-53.9620",
      lng: "159.8840",
    },
    {
      lat: "-53.9620",
      lng: "159.8840",
    },
    {
      lat: "-53.9620",
      lng: "159.8840",
    },
    {
      lat: "-53.9620",
      lng: "159.8840",
    },
  ];

  const options = [
    {
      id: "6d2eb721-2fc3-4824-b3d1-570f5a0ce60c",
      name: "Isabella Mosciski",
      username: "Elva.Zboncak",
      email: "Marisa_Hansen@gmail.com",
      address: {
        street: "Douglas Courts",
        suite: 90091,
        city: "Strosinton",
        zipcode: "05566-1263",
        geo: {
          lat: "-53.9620",
          lng: "159.8840",
        },
      },
    },
    {
      id: "6d2eb721-2fc3-4824-b3d1-570f5a0ce60c",
      name: "kjui Mosciski",
      username: "Elva.Zbooirincak",
      email: "Marisa_Haansen@gmail.com",
      address: {
        street: "Douglas Courts",
        suite: 900921,
        city: "Strosinton",
        zipcode: "05566-1263",
        geo: {
          lat: "-53.9620",
          lng: "159.8840",
        },
      },
    },
    {
      id: "6d2eb721-2fc3-4824-b3d1-570f5a0ce60c",
      name: "kjui Mosciiutrski",
      username: "Elva.Zbooirincak",
      email: "Marisa_Haansen@gmail.com",
      address: {
        street: "Douglakeemas Courts",
        suite: 900921,
        city: "Strosidnton",
        zipcode: "05566-1263",
        geo: {
          lat: "-53.9620",
          lng: "159.8840",
        },
      },
    },
  ];
  const [Values, setValues] = useState([]);

  return (
    <div>
      <Select
        multi
        options={option}
        style={{ borderRadius: "12px", padding: "4px" }}
        values={Values}
        placeholder="please select me nigga"
        onChange={(values) => setValues(values)}
      />
    </div>
  );
};

export default DropDownPackage;
