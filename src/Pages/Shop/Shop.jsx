import React, {useEffect, useState} from 'react'
import * as S from './Styles'
import { Product } from './Product'
import axios from 'axios'

export const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/women's clothing")
          .then(res => {
            setProducts(res.data)
          })
          .catch(error => console.error('Error fetching products', error))

    }, [])

  return (
    <S.Shop>
        <S.ShopTitle>
            <S.H1>Shop</S.H1>
        </S.ShopTitle>

        <S.Products>
            {products.map((product) => (
                <Product data={product} key={product.id}/>
            ))}
        </S.Products>
    </S.Shop>
  )
}
