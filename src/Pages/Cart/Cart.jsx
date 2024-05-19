import React, { useContext, useState, useEffect } from 'react'
import * as C from './Styles'
import { ShopContext } from '../../Context/ShopContext'
import { CartItem } from './CartItem'

export const Cart = () => {
    const {cartItems, products} = useContext(ShopContext)
    console.log(cartItems)

  return (
    <C.Cart>
        <div>
            <h1>Your Cart Items</h1>
        </div>

        <C.CartItems>
          {products.map((product) => {
            if (cartItems[product.id] > 0) {
              console.log(products)
              return <CartItem key={product.id} data={product} />
            }
          })}
        </C.CartItems>

        <C.Checkout>
            <p>Subtotal: $</p>
            <button>Continue Shopping</button>
            <button>Checkout</button>
        </C.Checkout>
    </C.Cart>
  )
}
