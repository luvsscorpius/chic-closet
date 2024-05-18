import React from 'react'
import * as P from './Styles'

export const Product = (props) => {
    const {id, title, price, image} = props.data

  return (
    <P.Product>
        <P.img src={image}/>

        <P.description>
            <p><b>{title}</b></p>
            <p>{price}</p>
        </P.description>

        <P.button>
            Add To Cart
        </P.button>
    </P.Product>
  )
}
