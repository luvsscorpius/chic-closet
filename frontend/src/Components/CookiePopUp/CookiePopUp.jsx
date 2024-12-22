import React, { useEffect, useState } from 'react'
import * as C from './Styles'

export const CookiePopUp = () => {
    const [isVisible, setIsVisible] = useState(false)
    // state para colocar uma classe no popupcontainer
    const [animation, setAnimation] = useState("")

    useEffect(() => {
        const acceptedCookies = sessionStorage.getItem('acceptedCookies')
        if (!acceptedCookies) {
            setIsVisible(true)
        }
    }, [])

    const handleAccept = () => {
        setAnimation("moveToRight")
        sessionStorage.setItem('acceptedCookies', true)
        setTimeout(() => setIsVisible(false), 2000) 
    }

    const handleDecline = () => {
        setAnimation("moveToRight")
        setTimeout(() => setIsVisible(false), 2000) 
    }

    if (!isVisible) {
        return null
    }

  return (
    <C.PopUpContainer className={animation}>
        <div className="h1Container">
            <h3>Cookies policies</h3>
        </div>

        <C.PopUpMessage>
            <p>Utilizamos cookies para melhorar sua experiência. Ao não aceitar, algumas funcionalidades podem não funcionar corretamente.</p>
        </C.PopUpMessage>

        <div className='buttonsDiv'>
            <button className='accept' onClick={handleAccept}>
                Aceitar
            </button>

            <button className='decline' onClick={handleDecline}>
                Recusar
            </button>
        </div>
    </C.PopUpContainer>
  )
}
