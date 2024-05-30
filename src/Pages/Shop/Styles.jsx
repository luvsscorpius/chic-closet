import styled, {keyframes} from "styled-components";

export const Shop = styled.div``

export const ShopTitle = styled.div`
    margin-top: 50px;
    text-align: center;
    font-size: 25px;

    @media (max-width: 700px) {
        font-size: 20px;
        margin-top: 10px;
    }
`

export const H1 = styled.h1``

export const Products = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    min-height: 100vh;
    gap: 20px;

    @media (max-width: 700px) {
        width: 100vw;
        grid-template-columns: 1fr;
        margin-top: 10px;
    }

    @media (min-width: 800px) and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

`

// Product style

// Animações
const containerAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Product = styled.div`
    width: 300px;
    height: 350px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    gap: 10px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
    position: relative;
    animation: ${containerAnimation} 300ms ease-in;

    &:hover {
        border: 1px solid #000;

        .description {
            transform: translateY(20px);
            opacity: 0;
        }

        .button {
            transform: translateY(-20px);
            opacity: 1;
        }
    }


    @media (max-width: 700px){
        width: 90%;
        margin:0;
        height: 350px;
        gap: 10px;

        &:active {
            border: 1px solid #000;
    
            .description {
                transform: translateY(20px);
                opacity: 0;
            }
    
            .button {
                transform: translateY(-20px);
                opacity: 1;
            }
        }
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const img = styled.img`
    width: 100%;
    height: 245px;
    object-fit: contain;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 700px) {
        width: 150px;
    }
`

export const description = styled.div`
    font-size: 15px;
    margin: 10px;
    opacity: 1;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`

export const button = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    border: none;
    opacity: 0;
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    bottom: 0px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`