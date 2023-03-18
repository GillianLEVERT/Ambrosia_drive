import React, {useEffect, useState} from 'react'
import { CartItem } from '../../components/CartItem/CartItem'
import Cookies from 'js-cookie'

export const Cart = () => {

  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}carts`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "Authorization": Cookies.get('token')
      },
    })
    .then((response) =>response.json())
    .then((data) => {
      console.log(data)
      setCartItems(data.cart_items)
      setTotalPrice(data.total_price)
    })
    .catch((error) => console.log(error))
  }, [])
  
  return (
    <>
      {cartItems.map((item) => (
        <CartItem cartItem={item.product} key={item.id}/>
      ))}
      <p>{totalPrice}</p>
    </>
  )
}
