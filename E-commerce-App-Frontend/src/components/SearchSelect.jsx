import { useState } from "react";

export const SearchSelect = () => {
  const [select, setSelect] = useState(null);

  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <select
      onChange={handleSelectChange}
      className="SearchSelect"
      value={select}
    >
      {" "}
      <option>All Categories</option>
      <option>Mobiles and Tablets</option>
      <option>Books</option>
      <option>Home</option>
      <option>Software</option>
    </select>
  );
};
