import React, { useContext } from 'react'
import * as L from './Styles'
import * as C from '../Cart/Styles'
import { ShopContext } from '../../Context/ShopContext'

export const Login = () => {
    const {userInfo, SetUserInfo, sendUserInfo} = useContext(ShopContext)

    console.log(userInfo)

    return (
        <L.mainContent>
            <L.formContainer>

                <div className="h1Container">
                    <h1>Login</h1>
                </div>

                <form method="post">

                    <div className="inputContainer">
                        <label htmlFor="user">Usuário</label>
                        <input type="text" name='user' value={userInfo.user} onChange={(e) => SetUserInfo({user: e.target.value})} />
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" value={userInfo.password} onChange={(e) => SetUserInfo((prevInfo) => ({...prevInfo, password: e.target.value}))} />

                        <a href="#">Esqueceu a senha?</a>
                    </div>

                    <C.buttonContainer>
                        <button onClick={sendUserInfo}>Entrar</button>
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
