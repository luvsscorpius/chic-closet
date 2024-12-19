import React from 'react'
import * as E from './Styles'
import Image from '../../assets/img/emptyCart.png'
import { useNavigate } from 'react-router-dom'

export const EmptyCart = () => {
    const navigate = useNavigate()

  return (
    <E.emptyCart>
        <img src={Image} alt="emptyCart" />

        <E.description>
            <h1>Your cart is Empty</h1>
            <p>Add items to get started</p>
            <button onClick={() => navigate('/')}>Go shopping</button>
        </E.description>
    </E.emptyCart>
  )
}
