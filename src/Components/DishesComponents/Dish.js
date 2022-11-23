import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, getCartItems, updateQuantity } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Dish = ({dish}) => {
    const { name, price, img } = dish;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const items = useSelector(getCartItems);

    const itemsInCart = items.some(item => item.itemId === dish.id);

    const addToCart = () => {
        if (!itemsInCart) {
            dispatch(addItemToCart({dish, quantity}));
            setQuantity(1)
        } else {
            dispatch(updateQuantity({dish, quantity}))
            setQuantity(1)
        }
    }

    return(<div className="dish">
        <img className="dishes" src={`./${img}.jpg`} alt="food"/>
        <h2>{name}</h2>
        <p>$ {price}</p>
        <ChangeQuantity quantity = {quantity} setQuantity={setQuantity}/>
        <button onClick={addToCart}>Add To Cart</button>
    </div>)
}

export default Dish;