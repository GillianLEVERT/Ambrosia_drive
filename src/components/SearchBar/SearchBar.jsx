import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { searchResultAtom } from "../../store/atom";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useAtom(searchResultAtom);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!searchResult) {
      fetch(`https://ambrosiaserver.fly.dev//products?name=${search}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResult(data);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://ambrosiaserver.fly.dev//products?name=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <form action="" onSubmit={handleSubmit} className="mb-10">
      <div className="relative">
        <input
          id="form-search"
          type="text"
          name="research"
          className="rounded-full w-full px-9 py-3 bg-[#ffffff]"
          placeholder="Patates, vin, chocolat ..."
          value={search}
          onChange={handleChange}
        />
        <button type="submit" className="absolute inset-0 right-auto group">
          <svg
            className="w-4 h-4 shrink-0 fill-current text-[#0b0b0b] group-hover:text-[#CD5555] ml-3 mr-2"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
            <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
          </svg>
        </button>
      </div>
    </form>
  );
};
