import React, { useContext } from 'react'
import * as C from './Styles'
import { ShopContext } from '../../Context/ShopContext'
import { CartItem } from './CartItem'

export const Cart = (props) => {

  return (
    <C.Cart>
        <div>
            <h1>Your Cart Items</h1>
        </div>

        <C.CartItems>
        </C.CartItems>

        <C.Checkout>
            <p>Subtotal: $</p>
            <button>Continue Shopping</button>
            <button>Checkout</button>
        </C.Checkout>
    </C.Cart>
  )
}
