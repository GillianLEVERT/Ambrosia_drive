import React from 'react'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { useAtomValue } from 'jotai'
import { searchResultAtom } from '../../store/atom'
import { CardProduct } from '../../components/CardProduct/CardProduct'

export const Shopping = () => {
  const searchResult = useAtomValue(searchResultAtom)
  return (
    <> 
    <SearchBar />
    {searchResult===null? (
    <p>veuillez faire une recherche</p>
    ) : (
    searchResult.map(product => (
      <CardProduct product={product} key={product.id} />
    ))
    )}
    </>
    )
}
