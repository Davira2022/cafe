import React from 'react';
import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const cartItems = dataDishes.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch();
    return(<div>
            <img className="small" src={`./${cartItems.img}.jpg`} alt="food"/>
            <p>{cartItems.name}</p>
            <p>quantity: {cartItem.quantity}</p>
            <p>${cartItems.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete"/> 
            </span>
        </div>)
}

export default CartItem;