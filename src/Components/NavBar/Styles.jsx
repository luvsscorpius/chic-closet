import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const NavBar = styled.div`
    width: 100%;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Links = styled.div`
    margin-right: 50px;
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 1);
        margin-left: 20px;
        font-size: 25px;
    }
`