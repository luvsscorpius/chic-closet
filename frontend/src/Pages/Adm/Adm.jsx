import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

export const Adm = () => {
    const {userInfo, SetUserInfo} = useContext(ShopContext)
    console.log(userInfo)

  return (
    <div>Olá {userInfo.user}</div>
  )
}
