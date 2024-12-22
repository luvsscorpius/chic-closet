import styled, { keyframes } from "styled-components";

// Animation 
export const containerAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const PopUpContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    z-index: 1000;
    animation: ${containerAnimation} 300ms ease-in;

    .buttonsDiv {
        padding-left: 10px;
        padding-bottom: 10px;

        button {
            margin: 0 5px 0 0;
            padding: 10px 15px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            cursor: pointer;

            &.accept {
                background-color: #4caf50;
                color: white;
            }

            &.decline {
                background-color: #f44336;
                color: white;
            }

            &:hover {
                opacity: 0.8;
                transition: 0.9s ease-in-out;
            }
        }
    }

    .h1Container {
        border-radius: 10px 10px 0 0;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;

        h3 {
            padding: 10px;
        }
    }
`

export const PopUpMessage = styled.div`
    font-size: 14px;
    color: #333;
    text-align: justify;
    padding: 10px;
`