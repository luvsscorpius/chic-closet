import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
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