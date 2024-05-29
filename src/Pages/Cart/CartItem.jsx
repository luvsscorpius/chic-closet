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
                <thead>
                    <tr>
                        <th className='produto'>Produto</th>
                        <th>Preço</th>
                        <th>Qtd.</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{title}</td>
                        <td>R$ {price}</td>
                        <td><C.countHandler>
                        <button onClick={() => removeFromCart(id)}>-</button>
                        <p>{cartItems[id]}</p>
                        <button onClick={() => addToCart(id)}>+</button>
                    </C.countHandler></td>
                    <td className='total'>R$ {cartItems[id] * price}</td>
                    </tr>
                </tbody>
            </C.description>

        </C.cartItem>
    );
};
