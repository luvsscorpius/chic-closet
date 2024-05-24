import React, { useContext, useState, useEffect } from 'react'
import * as C from './Styles'
import { ShopContext } from '../../Context/ShopContext'
import { CartItem } from './CartItem'
import { useNavigate } from 'react-router-dom'
import { EmptyCart } from '../../Components/EmptyCart/EmptyCart'

export const Cart = () => {
    const {cartItems, products, getTotalAmount} = useContext(ShopContext)
    const totalAmount = getTotalAmount()

    const navigate = useNavigate()

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

        {totalAmount > 0 ? 
        <C.Checkout>
          <C.subtotal>
            <h3>Subtotal: R${totalAmount}</h3>
          </C.subtotal>

          <C.buttons>
            <button onClick={() => navigate('https://luvsscorpius.github.io/chic-closet/')}>Continue Shopping</button>
            <button>Checkout</button>
          </C.buttons>
        </C.Checkout>
        : <EmptyCart/> }
    </C.Cart>
  )
}
