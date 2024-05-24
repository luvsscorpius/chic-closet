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
            // Verificando se a contagem comeca com 0 para nao dar problema de comecar com null e NaN
                const currentCount = prev[itemId] || 0
                return { ...prev, [itemId]: currentCount + 1 };
        });
    };

    // Funçao para remover do carrinho
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            return {...prev, [itemId]: prev[itemId] - 1}
        })
    }

    // Funcao para conseguir o total do carrinho
    const getTotalAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item))
                // Colocando esse if ajuda a tirar o bug de nao achar o preco, por isso o if se realmente achar o itemInfo ele adicionara o preco
                 if (itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.price
                 }
            }
        }
        return totalAmount
    }

    const contextValue = { cartItems, addToCart, products, removeFromCart, getTotalAmount, setCartItems };
    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
