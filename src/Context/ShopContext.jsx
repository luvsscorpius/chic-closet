import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';

// Isso irá rastrear todas as funções e states da nossa aplicação, por exemplo, um state que pode ser acessado de páginas como shop e cart
export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
    let cart = {};
    products.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
};

export const ShopContextProvider = (props) => {
    // State para guardar os produtos
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        // pegando o cartItems do localstorage
        const savedCartItems = localStorage.getItem('cartItems');
        // Retornando o carrinho
        return savedCartItems ? JSON.parse(savedCartItems) : {};
    });

    useEffect(() => {
        // Usamos o axios para buscar os dados na API
        axios.get("https://fakestoreapi.com/products/category/women's clothing")
            // Caso funcione ele retornará um "json"
            .then(res => {
                setProducts(res.data);
            })
            // Caso contrário, ele retornará o porquê deu errado
            .catch(error => console.error('Error fetching products', error));
    }, []);

    // Usando o useEffect para montar o carrinho com base no localStorage
    useEffect(() => {
        // Aqui adicionamos o carrinho ao localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Função para adicionar ao carrinho
    const addToCart = (itemId) => {
        setCartItems((prev) => {
                return { ...prev, [itemId]: prev[itemId] + 1 };
        });
    };

    const contextValue = { cartItems, addToCart, products };
    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
