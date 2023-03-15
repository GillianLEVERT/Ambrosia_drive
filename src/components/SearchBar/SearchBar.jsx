import React, {useState} from "react";
import { useSetAtom } from 'jotai'
import { searchResultAtom } from "../../store/atom";

export const SearchBar = () => {
  const [searchData, setSearchData] = useState("");
  const setSearchResult = useSetAtom(searchResultAtom);
  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/products?name=${searchData}`)
    .then((response) =>response.json())
    .then((data) => {
      console.log(data)
      setSearchResult(data)
    })
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



