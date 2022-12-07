import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, getCartItems, updateQuantity } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

function Dish({dish}) {
    // const { name, price, img } = dish;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    
    
    const cartItems = useSelector(getCartItems);

    const itemsInCart = cartItems.some(item => item.id === dish.id);

    const addToCart = () => {
        if (!itemsInCart) {
            dispatch(addItemToCart({dish, quantity}));
            setQuantity(1)
        } else {
            dispatch(updateQuantity({dish, quantity}))
            // setQuantity(1)
        }
    }

    return(<div className="dish">
        <img className="dishes" src={`${dish.img}.jpg`} alt="food"/>
        <h2>{dish.name}</h2>
        <p>$ {dish.price}</p>
        <ChangeQuantity quantity = {quantity} setQuantity={setQuantity}/>
        <button onClick={addToCart}>Add To Cart</button>
    </div>)
}

export default Dish;