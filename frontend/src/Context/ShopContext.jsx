import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js'

// Isso irá rastrear todas as funções e states da nossa aplicação, por exemplo, um state que pode ser acessado de páginas como shop e cart
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    // State para guardar os produtos
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        // pegando o cartItems do localstorage
        const savedCartItems = localStorage.getItem('cartItems');
        // Retornando o carrinho
        return savedCartItems ? JSON.parse(savedCartItems) : {};
    });

    // Usando o useEffect para montar o carrinho com base no localStorage
    useEffect(() => {
        // Aqui adicionamos o carrinho ao localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

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
            return { ...prev, [itemId]: prev[itemId] - 1 }
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
        return totalAmount.toFixed(2)
    }

    // LoginPage
    const [userInfo, SetUserInfo] = useState({
        id: "", email: "", password: "", role: "", user: ""
    })

    // SecretKey 
    const secretKey = process.env.REACT_APP_SECRET_KEY;

    // Função para criptografar dados
    const encryptData = (data, secretKey) => {
        const stringData = JSON.stringify(data) // transforma o array em uma string
        return CryptoJS.AES.encrypt(stringData, secretKey).toString()
    }

    // Função para criar um cookie com dados criptografados
    const setEncryptedCookie = (name, data, secretKey, days) => {
        const encryptedData = encryptData(data, secretKey)
        const date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)) // Definir a data de expiração do cookie

        // Criando o cookie com a opção HttpOnly e Secure
        document.cookie = `${name}=${encryptedData}; expires=${date.toUTCString()}; path=/; secure; SameSite=Strict`
    }

    // Função para descriptografar e ler o cookie
    const decryptData = (encryptedData, secretKey) => {
        const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey)
        return bytes.toString(CryptoJS.enc.Utf8)
    }

    const getDecryptData = (name, secretKey) => {
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${name}=`)
        if (parts.length === 2) {
            const encryptedData = parts.pop().split(';').shift()
            return decryptData(encryptedData, secretKey)
        }
        return null
    }

    const navigate = useNavigate()

    const sendUserInfo = async (e) => {
        e.preventDefault()
        console.log(userInfo)

        try {
            const response = await axios.post('http://localhost:2000/login', userInfo, {
                headers: { 'Content-Type': 'application/json' }
            })

            if (response.status === 200) {
                console.log('Entrei')
                
                // Exemplo de uso cookie
                const token = response.data.token
                setEncryptedCookie('@authToken', token, secretKey, 1)

                // Criptografando as informações do usuário
                const userInfo = response.data.user
                setEncryptedCookie('@authUser', userInfo, secretKey, 1)

                navigate('adm')
                console.log(response)
            } 

        } catch (err) {
            console.error(err)
            if (err.response.status === 401) {
                alert('Crendenciais invalidas.')
            } else if (err.response.status === 404) {
                alert('Usuário não encontrado')
            } else if (err.response.status === 403) {
                alert('Senha incorreta')
            }
        }
    }

    // Função para setar as informações do usuário
    const setUserInfoFromCookies = () => {
        const decryptedUserInfo = getDecryptData('@authUser', secretKey)
        if (decryptedUserInfo) {
            SetUserInfo(JSON.parse(decryptedUserInfo))
        }
    }

    useEffect(() => {
        setUserInfoFromCookies()
    }, [])

    const contextValue = { cartItems, addToCart, products, removeFromCart, getTotalAmount, userInfo, SetUserInfo, sendUserInfo };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
