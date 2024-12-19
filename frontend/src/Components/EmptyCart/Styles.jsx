import styled from "styled-components";

export const emptyCart = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    margin: 100px;

    img {
        width: 300px;
    }
`

export const description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    button {
        width: 130px;
        height: 30px;
        background-color: #800020;
        color: #fff;
        border: none; 
        border-radius: 8px;
        margin: 10px;
        cursor: pointer;
    }
`