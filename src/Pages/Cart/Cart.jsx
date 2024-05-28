import React, { useContext } from 'react'
import * as C from './Styles'
import { ShopContext } from '../../Context/ShopContext'
import { CartItem } from './CartItem'
import { Link } from 'react-router-dom'
import { EmptyCart } from '../../Components/EmptyCart/EmptyCart'
import { ArrowLeft } from 'phosphor-react'

export const Cart = () => {
    const {products, getTotalAmount, cartItems} = useContext(ShopContext)
    const totalAmount = getTotalAmount()

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
              <input type="text" placeholder='Código' />
            </C.Desconto>

            <hr />

            <C.totais>
              <C.subtotal>
                <p>Subtotal</p><p>R$ {totalAmount}</p>
              </C.subtotal>

              <C.total>
                <h3>Total</h3><h3>R$ {totalAmount}</h3>
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
