import React, { useContext, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import * as A from './Styles'
import { ProductList } from '../../Components/ProductList/ProductList'
import { styled } from '@mui/material/styles';
import { ProductCreate } from '../../Components/ProductCreate/ProductCreate'

export const Adm = () => {
  const { userInfo, SetUserInfo } = useContext(ShopContext)
  console.log(userInfo)

  return (
    <A.mainContainer>
      teste
    </A.mainContainer>
  )
}
