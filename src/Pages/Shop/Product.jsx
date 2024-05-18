import React, { useContext } from 'react'
import * as P from './Styles'
import { ShopContext } from '../../Context/ShopContext'

export const Product = (props) => {
    // Objeto com todos as informacoes dos produtos que pegamos em Shop.jsx
    const {id, title, price, image} = props.data
    // Pegando as funcoes do context
    const {cartItems, addToCart} = useContext(ShopContext)

    // Mostrar a quantidade de itens no carrinho
    const cartItemAmount = cartItems

  return (
    <P.Product>
        <P.img src={image}/>

        <P.description>
            <p><b>{title}</b></p>
            <p>R$ {price}</p>
        </P.description>

        <P.button onClick={() => addToCart(id)}>
          {/* Aqui usamos o cartItemAmount[id] para saber se era maior que 0, se sim mostrariamos a quantidade de items no carrinho ate o momento */}
           Add To Cart {cartItemAmount[id] > 0 ? `(${cartItemAmount[id]})` : ''}
        </P.button>
    </P.Product>
  )
}
