import { useState } from "react";
import { SearchSelect } from "./SearchSelect";

export const Search = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <SearchSelect />
      <input
        onChange={handleInputChange}
        value={search}
        className="SearchInput"
      />
    </>
  );
};
