import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    bottom: 0; /* Fixa o rodapé no final da página */
`

export const Links = styled.div`
    margin-right: 50px;
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 1);
        margin-left: 20px;
        font-size: 20px;
    }
`