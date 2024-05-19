import React, { useContext } from 'react';
import * as C from './Styles';
import { ShopContext } from '../../Context/ShopContext';

export const CartItem = (props) => {
    const { id, title, price, image } = props.data;
    const { cartItems, addToCart } = useContext(ShopContext);

    return (
        <C.cartItem>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>Price: ${price}</p>
            </div>
        </C.cartItem>
    );
};
