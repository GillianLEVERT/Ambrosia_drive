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
      fetch("https://ambrosia-drive-git-development-gillianlevert.vercel.app/cart_items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("token"),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setCartItemAtom(data);
        })
        .catch((error) => console.error(error));
    }
  }, [loged]);

  return (
    <>
    <section className="px-6 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8">
      <SearchBar />
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-6">
        {searchResult === null ? (
          <p>Veuillez faire une recherche</p>
        ) : (
          searchResult.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))
        )}
      </div>
      </section>
    </>
  );
};
