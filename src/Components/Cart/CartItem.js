import React from 'react';
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import dataDishes from './../../data/dataDishes';

const CartItem = ({cartItem}) => {
    const CartItems = dataDishes.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch();
    return(<div>
            <img className="small" src={`./${CartItems.img}.jpg`} alt="food"/>
            <p>{CartItems.name}</p>
            <p>quantity: {cartItem.quantity}</p>
            <p>${CartItems.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete"/> 
            </span>
        </div>)
}

export default CartItem;