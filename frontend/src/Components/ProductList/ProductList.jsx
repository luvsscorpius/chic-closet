import React from 'react'
import { List, Datagrid, TextField } from 'react-admin'

export const ProductList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='_id' label='ID'/>
        <TextField source='nome' label='Nome'/>
        <TextField source='preco' label='Preço'/>
      </Datagrid>
    </List>
  )
}
