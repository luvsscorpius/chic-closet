import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import {Admin, Resource} from 'react-admin'
import { dataProvider } from './DataProvider'

export const Adm = () => {
    const {userInfo, SetUserInfo} = useContext(ShopContext)
    console.log(userInfo)

  return (
    <Admin>
      
    </Admin>
  )
}
