import React, { useEffect } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useAtomValue, useSetAtom } from "jotai";
import { searchResultAtom } from "../../store/atom";
import { cartItemsAtom } from "../../store/atom";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { isAuthenticatedAtom } from "../../store/atom";
import Cookies from "js-cookie";

export const Shopping = () => {
  const searchResult = useAtomValue(searchResultAtom);
  const setCartItemAtom = useSetAtom(cartItemsAtom);
  const loged = useAtomValue(isAuthenticatedAtom);

  useEffect(() => {
    if (loged) {
      fetch("https://ambrosiaserver.fly.dev/cart_items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("token"),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCartItemAtom(data);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-5 gap-6">
        {searchResult === null ? (
          <p>Veuillez faire une recherche</p>
        ) : (
          searchResult.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))
        )}
      </div>
    </>
  );
};
