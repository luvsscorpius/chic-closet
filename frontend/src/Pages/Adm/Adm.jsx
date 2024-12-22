import React, { useContext, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import * as A from './Styles'
import { Admin, AppBar, Layout, Resource } from 'react-admin'
import { ProductList } from '../../Components/ProductList/ProductList'
import { styled } from '@mui/material/styles';

export const Adm = () => {
  const { userInfo, SetUserInfo } = useContext(ShopContext)
  console.log(userInfo)

  // Estilizando o AppBar usando Material-UI
  const CustomAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#FFFFFF',
    boxShadow: 'none',
    padding: '0 20px',
    height: '50px',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  }));

  // Criando um layout customizado com o AppBar
  const CustomLayout = (props) => (
    <Layout {...props} appBar={CustomAppBar} />
  );

  return (
    <A.mainContainer>
      <Admin basename='/adm' layout={CustomLayout}>
        <Resource name='Produtos' list={ProductList} />
      </Admin>
    </A.mainContainer>
  )
}
