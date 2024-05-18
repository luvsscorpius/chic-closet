import React, { createContext, useState } from 'react'

// Isso ira rastrear todas as funcoes e states da nossa aplicacao por exemplo um state que possa acessar das duas paginas shop e cart
export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {

    const getDefaultCart = () => {
        let cart = {}
        for (let i = 1; i <= props.products.length; i++) {
            cart[i] = 0;
        }

        return cart;
    }
    
    const [cartItems, setCartItems] = useState(getDefaultCart())

    // Funcao para adicionar ao carrinho
    const addToCart = (itemId) => {
        setCartItems((prev) => {
            // Aqui utilizamos uma logica para saber se o itemId antigo era diferente de undefined e se sim fariamos normalmente a adicao de produtos no carrinho
            if (prev[itemId] !== undefined) {
                return {...prev, [itemId]: prev[itemId] + 1}
            } else {
                // Se nao iriamos iniciar o itemId como 1
                return {...prev, [itemId]: 1}
            }
        })
    }

    const contextValue = {cartItems, addToCart}

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
