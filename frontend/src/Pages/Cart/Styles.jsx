import styled, { keyframes } from "styled-components";

export const Cart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    h1 {
        margin-left: 30px;
        margin-top: 10px;
    }
`

export const CartItems = styled.div`    
    width: 100%;
`

// Animation 
export const containerAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const resume = styled.div`
    width: 100%;
    display: flex;
    // animation: nomeDaAnimação duração tipoDeEfeito
    animation: ${containerAnimation} 300ms ease-in;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`

export const Checkout = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    width: 31%;
    border-radius: 5px;
    margin: 20px;
    height: 430px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);    

    @media (max-width: 700px) {
        width: 90%;
    }
`

export const resumo = styled.div`
    font-size: 20px;
    text-transform: uppercase;
    margin-left: 25px;
    margin-top: 10px;
    font-weight: bold;
`

export const totalizers = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    hr {
        margin: 10px;
    }
`
export const Frete = styled.div`  
    height: 100%;
    margin: 10px;
    
    p {
        font-size: 18px;
        font-weight: bold;
        margin: 5px;
    }   

    input {
        margin-left: 10px;
        margin-top: 5px;
        border-radius: 0px;
        width: 90%;
        height: 35px;
        border: 1px solid #ccc;
        padding-left: 10px;

        &:focus {
            border: 1px solid #FF4F00;
            outline: none;
        }
    }

`

export const Desconto = styled.div` 
    margin: 10px;
    
    p {
        font-size: 18px;
        font-weight: bold;
        margin: 5px;
    }   

    input {
        margin-left: 10px;
        border-radius: 0px;
        margin-top: 5px;
        width: 90%;
        height: 35px;
        border: 1px solid #ccc;
        padding-left: 10px;
        

        &:focus {
            border: 1px solid #FF4F00;
            outline: none;
        }
    }
`

export const totais = styled.div`

`;

export const subtotal = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-between;

    p {
        margin: 10px;
    }
`

export const total = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-between;

    h3 {
        margin: 10px;
    }
`

export const buttonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 90%;
        text-transform: uppercase;
        height: 40px;
        background-color: #FF4F00;
        border: none;
        color: #fff;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
            transition: 0.9s ease-in-out;
        }
    }
`

export const buttons = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    text-decoration: none;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        width: 200px;
        gap: 10px;
        height: 56px;
        color: #000;
        cursor: pointer;

        &:hover {
            transition: 0.5s ease;
            color: #FF4F00;
        }
    }
    
`


export const substotal = styled.div`
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
    width: 98%;
    height: 200px;
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    margin: 20px;

    img {
        width: 80px;
        margin-left: 10px;
    }

    p {
        font-size: 20px;
    }

    @media (max-width: 700px) {
        width: 90vw;
        height: 200px;
        margin-top: 10px;

        img {
            width: 100px;
        }

        p {
            font-size: 18px;
        }
    }
`

export const description = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px;

    th, td {
        padding: 8px;
        text-align: left;
    }

    .produto {
        width: 60%;
    }

    th {
        background-color: #f2f2f2;
    }

    @media (max-width: 700px) {
        th, td {
            font-size: 14px;
            display: flex;
            justify-content: center;
            width: 100%;
            text-align: center;
            padding: 5px 0;
        }

        th {
            display: none;
        }

        .total {
            display: none;
        }
    }
`;


export const countHandler = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    button {
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-weight: 550;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        transition: 0.5s ease;
        color: #fff;
        background-color: #FF4F00;
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