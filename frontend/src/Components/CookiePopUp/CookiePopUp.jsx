import React, { useEffect, useState } from 'react'
import * as C from './Styles'

export const CookiePopUp = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const acceptedCookies = sessionStorage.getItem('acceptedCookies')
        if (!acceptedCookies) {
            setIsVisible(true)
        }
    }, [])

    const handleAccept = () => {
        sessionStorage.setItem('acceptedCookies', true)
        setIsVisible(false)
    }

    const handleDecline = () => {
        setIsVisible(false)
    }

    if (!isVisible) {
        return null
    }

  return (
    <C.PopUpContainer>
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
