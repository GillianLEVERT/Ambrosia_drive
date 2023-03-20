import React from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useAtomValue } from "jotai";
import { searchResultAtom } from "../../store/atom";
import { CardProduct } from "../../components/CardProduct/CardProduct";

export const Shopping = () => {
  const searchResult = useAtomValue(searchResultAtom);
  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-5 gap-6">
        {searchResult === null ? (
          <p>veuillez faire une recherche</p>
        ) : (
          searchResult.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))
        )}
      </div>
    </>
  );
};
