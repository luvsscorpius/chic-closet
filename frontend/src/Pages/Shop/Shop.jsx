import React, {useContext} from 'react'
import * as S from './Styles'
import { Product } from './Product'
import { ShopContext, ShopContextProvider } from '../../Context/ShopContext'

export const Shop = () => {
  const {products} = useContext(ShopContext)

  return (
    <ShopContextProvider products={products}>
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
    </ShopContextProvider>
  )
}
