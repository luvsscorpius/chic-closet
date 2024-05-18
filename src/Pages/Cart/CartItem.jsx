import React, { useContext } from 'react'
import * as C from './Styles'
import { ShopContext } from '../../Context/ShopContext'

export const CartItem = (props) => {
    const {id, title, price, image} = props.data
    const {cartItems, addToCart} = useContext(ShopContext)

  return (
    <div>CartItem</div>
  )
}
