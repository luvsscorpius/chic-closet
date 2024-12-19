import React from 'react'
import * as L from './Styles'
import * as C from '../Cart/Styles'

export const Login = () => {
    return (
        <L.mainContent>
            <L.formContainer>

                <div className="h1Container">
                    <h1>Login</h1>
                </div>

                <form method="post">

                    <div className="inputContainer">
                        <label htmlFor="user">Usuário</label>
                        <input type="text" name='user' />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" />

                        <a href="#">Esqueceu a senha?</a>
                    </div>

                    <C.buttonContainer>
                        <button>Entrar</button>
                    </C.buttonContainer>

                    <span><p>Ainda nao possui uma conta? <a href="#">Inscreva-se</a></p></span>

                    <div className="signInGoogle">
                        google
                    </div>
                </form>
            </L.formContainer>
        </L.mainContent>
    )
}
