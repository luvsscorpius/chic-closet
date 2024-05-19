import React, { useContext } from 'react';
import * as C from './Styles';
import { ShopContext } from '../../Context/ShopContext';

export const CartItem = (props) => {
    const { id, title, price, image } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    return (
        <C.cartItem>
            <img src={image} alt={title} />

            <C.description>
                <p><b>{title}</b></p>
                <p>R${price}</p>

                <C.countHandler>
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} readOnly />
                    <button onClick={() => addToCart(id)}>+</button>
                </C.countHandler>
            </C.description>
        </C.cartItem>
    );
};
