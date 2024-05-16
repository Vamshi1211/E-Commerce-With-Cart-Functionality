import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  onAddToCart: () => {},
})

export default CartContext
