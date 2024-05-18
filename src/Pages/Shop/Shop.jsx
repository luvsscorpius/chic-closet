import React, {useEffect, useState} from 'react'
import * as S from './Styles'
import { Product } from './Product'
import axios from 'axios'

export const Shop = () => {
    // State para guardar os produtos
    const [products, setProducts] = useState([])

    // Usamos o useEffect aqui para buscar dados na API corretamente, sincronizando a busca de dados com o clico de vida do componente e evitando loops de renderizacao.
    useEffect(() => {
        // Usamos o axios para buscar os dados na API
        axios.get("https://fakestoreapi.com/products/category/women's clothing")
        // Caso funcione ele retornara um "json"
          .then(res => {
            setProducts(res.data)
          })
        // Caso contrario ele retornara o pq deu errado
          .catch(error => console.error('Error fetching products', error))

    }, [])

  return (
    <S.Shop>
        <S.ShopTitle>
            <S.H1>Shop</S.H1>
        </S.ShopTitle>

        <S.Products>
            {/* Usaremos o map como forma de looping aqui para separar cada elemento do json e depois passaremos cada um atraves de uma props para um novo componente que reenderizara cada produto. */}
            {products.map((product) => (
                <Product data={product} key={product.id}/>
            ))}
        </S.Products>
    </S.Shop>
  )
}
