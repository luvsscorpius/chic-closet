import React, { useContext } from 'react'
import * as C from './Styles'
import { ShopContext } from '../../Context/ShopContext'
import { CartItem } from './CartItem'
import { Link, useNavigate } from 'react-router-dom'
import { EmptyCart } from '../../Components/EmptyCart/EmptyCart'
import { ArrowLeft } from 'phosphor-react'

export const Cart = () => {
    const {products, getTotalAmount, cartItems} = useContext(ShopContext)
    const totalAmount = getTotalAmount()

    const navigate = useNavigate()

  return (
    <C.Cart>
        <C.buttons>
            <Link to='/' style={{textDecoration: 'none'}}>
              <span><ArrowLeft size={20} />Continue Shopping</span>
            </Link>
        </C.buttons>

        <div style={{display: 'flex', width: '100%'}}>
            <h1>Your Cart Items</h1>
        </div>

        <C.CartItems>
        {products.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem key={product.id} data={product} />;
          }
            return null; 
})}

        </C.CartItems>

        {totalAmount > 0 ? 
        <C.Checkout>
          <C.subtotal>
            <h3>Subtotal: R${totalAmount}</h3>
          </C.subtotal>
        </C.Checkout>
        : <EmptyCart/> }
    </C.Cart>
  )
}
