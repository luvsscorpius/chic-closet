import React, { useContext, useState } from 'react'
import * as C from './Styles'
import { ShopContext } from '../../Context/ShopContext'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'
import { EmptyCart } from '../../Components/EmptyCart/EmptyCart'
import { ArrowLeft } from 'phosphor-react'

export const Cart = () => {
    const {products, getTotalAmount, cartItems} = useContext(ShopContext)
    const totalAmount = getTotalAmount()
    const [code, SetCode] = useState('')

    const codes = [
      {code: 'AND', discount: 0.25},
      {code: '10OFF', discount: 0.10}
    ]

    const handleChange = (index) => {
      
      // Utilizando o find para encontrar um código de desconto especifico no array de codigos
      // Primeiro passamos o elemento codig que é o elemento atual que está sendo processado pelo método find ou seja sendo procurado, depois passamos a condição que se codig.code for igual ao que passamos no input ele armazenara isso em cod
      const cod = codes.find(codig => codig.code === index)
      // se caso encontrar 
      if (cod) {
        // Criara uma nova variável para calcular o desconto aplicado em cima do preço
        let newTotal = totalAmount - (cod.discount * totalAmount) 
        SetCode(newTotal.toFixed(2))
      }
    }

  return (
    <C.Cart>
        <C.buttons>
            <Link to='/' style={{textDecoration: 'none'}}>
              <span><ArrowLeft size={20} />Continue Shopping</span>
            </Link>
        </C.buttons>

        <div style={{display: 'flex', width: '100%'}}>
            <h1>Your Cart Items</h1>
        </div>

      {totalAmount > 0 ? 
      <C.resume>
        <C.CartItems>
        {products.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem key={product.id} data={product} />;
          }
            return null; 
        })}

        </C.CartItems>

        
        <C.Checkout>
          <C.resumo>Resumo do pedido</C.resumo>
          <C.totalizers>

            <C.Frete>
              <p>Calcular Frete</p>
              <input type="text" maxLength={8} />
            </C.Frete>

            <C.Desconto>
              <p>Desconto</p>
              <input type="text" placeholder='Código' onChange={(e) => handleChange(e.target.value)} />
            </C.Desconto>

            <hr />

            <C.totais>
              <C.subtotal>
                <p>Subtotal</p><p>R$ {totalAmount}</p>
              </C.subtotal>

              <C.total>
                <h3>Total</h3><h3>R$ {code === '' ? totalAmount : code}</h3>
              </C.total>

              <C.buttonContainer>
                <button>
                  Finalizar 
                </button>
              </C.buttonContainer>
            </C.totais>

          </C.totalizers>
        </C.Checkout>
        </C.resume>
        : <EmptyCart/> }
    </C.Cart>
  )
}
