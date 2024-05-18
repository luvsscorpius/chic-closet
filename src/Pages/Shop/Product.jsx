import React from 'react'
import * as P from './Styles'

export const Product = (props) => {
    // Objeto com todos as informacoes dos produtos que pegamos em Shop.jsx
    const {id, title, price, image} = props.data

  return (
    <P.Product>
        <P.img src={image}/>

        <P.description>
            <p><b>{title}</b></p>
            <p>R$ {price}</p>
        </P.description>

        <P.button>
            Add To Cart
        </P.button>
    </P.Product>
  )
}
