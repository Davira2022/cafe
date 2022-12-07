import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice, getTotalQuantity } from '../../redux/cartSlice';
import CartItem from '../Cart/CartItem';


import './cart.css';
import shoppingBag from './shopping-bag.png';

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const quantity = useSelector(getTotalQuantity);
    const [isActive, setIsActive] = useState(true);

    const checkCartnotEmpty = () => {
        if (quantity === 0) {
            return (
                <div className={isActive ? 'cart-items' : 'cart-items hide'}>Cart is Empty</div> 
            ) 
        } else {
        return (
            <div className={isActive ? 'cart-items' : 'cart-items hide'}>
                {cartItems.map((cartItem, id) => <CartItem cartItem={cartItem} key={id}/>)}
            </div>
        )
    }
}

const onCartHide = () => {
        setIsActive(current => !current);
} 

return (
    <div className='cart-btn'>
        <p className='item-total'>TOTAL: ${totalPrice}</p>
        <p>TOTAL CATEGORIES: {quantity}</p>
        <div className="cart-container">
            <button onClick={onCartHide} className='cart-button'>
                <img src={shoppingBag} alt="shopping bag" className="cart-image" />
            </button>
            
        </div>
        {checkCartnotEmpty()}      
    </div>
    );
}

export default Cart;