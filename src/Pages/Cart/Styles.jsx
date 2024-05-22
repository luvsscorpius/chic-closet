import styled from "styled-components";

export const Cart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    border: 1px solid red;

    h1 {
        margin-top: 10px;
    }
`

export const CartItems = styled.div``

export const Checkout = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const buttons = styled.div`
    display: flex;
    justify-content: center;

    button {
        width: 150px;
        height: 56px;
        background-color: #800020;
        color: #fff;
        border: none; 
        border-radius: 8px;
        margin: 10px;
        cursor: pointer;
    }
`


export const subtotal = styled.div`
    width: 600px;
    height: 50px;
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 0px;

    h3 {
        margin: 20px;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`

// CartItem.jsx

export const cartItem = styled.div`
    width: 600px;
    height: 250px;
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    margin: 30px;
    justify-content: center;

    img {
        width: 150px;
    }

    p {
        font-size: 20px;
    }

    @media (max-width: 700px) {
        width: 90vw;
        height: 350px;
        margin-top: 10px;
    }
`

export const description = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    font-size: 30px;
    gap: 30px;
    margin: 20px;

    @media (max-width: 700px) {
        width: 50%;
    }

`

export const countHandler = styled.div`
button {
    background-color: #444;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 15px;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #555;
    }

    &:active {
        background-color: #333;
        transform: scale(0.95);
    }
    }

    input {
    width: 50px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 8px;
    margin: 0 5px;
    }

    @media (max-width: 700px) {
        input {
            width: 30px;
            margin: 0px;
        }
    }
`