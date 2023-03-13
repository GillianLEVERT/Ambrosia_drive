import React, {useState} from "react";

export const SearchBar = () => {
  const [searchData, setSearchData] = useState("");

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/products?name=${searchData}`)
    .then((response) =>response.json())
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="research"
        placeholder="Patates, vin, chocolat ..."
        value={searchData}
        onChange={handleChange}
      />
      <button type="submit">Chercher</button>
    </form>
  );
};
