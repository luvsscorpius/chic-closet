import styled from "styled-components";

export const mainContent = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const formContainer = styled.div`
    width: 500px;
    height: 500px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .h1Container {
        width: 100%;
        border-radius: 25px 25px 0px 0px;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;

        .inputContainer {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
            
        button {
            width: 100%;
        }

        a {
            font-size: 15px;
        }

        a:hover {
            color: #FF4F00;
            transition: 0.9s ease-in-out;
        }

        input {
            border-radius: 0px;
            margin-top: 5px;
            width: 100%;
            height: 35px;
            border: 1px solid #ccc;
            padding-left: 10px;

            &:focus {
                border: 1px solid #FF4F00;
                outline: none;
            }
        }
    }

    @media (max-width: 768px) {
        width: 90%;

        form {
            .inputContainer {
                width: 90%;
            }   

            input {
                width: 100%;
            }

            button {
                width: 90%;
            }

            span {
                width: 90%;
                text-align: center;
            }
        }

    }
`