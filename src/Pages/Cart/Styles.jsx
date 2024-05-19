import styled from "styled-components";

export const Cart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-top: 10px;
    }
`

export const CartItems = styled.div``

export const Checkout = styled.div`
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

`