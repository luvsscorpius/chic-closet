import React, { useContext } from 'react';
import * as C from './Styles';
import { ShopContext } from '../../Context/ShopContext';

export const CartItem = (props) => {
    const { id, title, price, image } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    
    return (
        <C.cartItem>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',  alignItems: 'center', marginTop: '10px', width: '200px'}}>
                <img src={image} alt={title} />
            </div>

            <C.description>
                <div>
                    <p>Produto</p>
                    <p><b>{title}</b></p>
                </div>
                <div style={{width: '170px'}}>
                    <p>Preço unid.</p>
                    <p>R${price}</p>
                </div>
                <div>
                    <p>Qtd.</p>
                    <C.countHandler>
                        <button onClick={() => removeFromCart(id)}>-</button>
                        <p>{cartItems[id]}</p>
                        <button onClick={() => addToCart(id)}>+</button>
                    </C.countHandler>
                </div>
                <div>
                    <p>Total</p>
                    <p><b>R${price * cartItems[id]}</b></p>
                </div>
            </C.description>

        </C.cartItem>
    );
};
