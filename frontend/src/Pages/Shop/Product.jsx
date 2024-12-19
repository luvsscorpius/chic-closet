import React, { useContext } from 'react'
import * as P from './Styles'
import { ShopContext } from '../../Context/ShopContext'
import { ShoppingBag } from 'phosphor-react'

export const Product = (props) => {
    // Objeto com todos as informacoes dos produtos que pegamos em Shop.jsx
    const {id, title, price, image} = props.data
    // Pegando as funcoes do context
    const {cartItems, addToCart} = useContext(ShopContext)

    // Mostrar a quantidade de itens no carrinho
    const cartItemAmount = cartItems[id]

  return (
    <P.Product>
      <P.ContentContainer>
        <P.img src={image}/>

        <P.description className='description'>
          <p className='title'><b>{title}</b></p>
          <p>R$ {price}</p>
        </P.description>

      </P.ContentContainer>

        <P.button onClick={() => addToCart(id)} className='button'>
          {/* Aqui usamos o cartItemAmount[id] para saber se era maior que 0, se sim mostrariamos a quantidade de items no carrinho ate o momento */}
          <ShoppingBag size={25}/>  Comprar Produto {cartItemAmount > 0 ? `(${cartItemAmount})` : ''}
        </P.button>
    </P.Product>
  )
}
