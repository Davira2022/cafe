import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItem: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime()
            state.cartItem.push({
                id: timeId,
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.dish.price,
                price: action.payload.dish.price
            })
        },
        updateQuantity: (state, action) => {
            const newCart = [];
            
            state.cartItem.forEach(item => {
                if (item.dishId === action.payload.dish.id) {
                    let newQuantity = item.quantity + action.payload.quantity;
                    let totalSum = item.price * newQuantity;
                    const changeCart = {...item, quantity: newQuantity, totalPrice: totalSum };
                    newCart.push(changeCart);
                } else {
                    newCart.push(item);
                }
            })
            state.cartItem = newCart;
        },
        removeItemFromCart: (state, action) => {
            state.cartItem = state.cartItem.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        },
        clearCart: state => {
            state.cartItem = []
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItem.reduce((total, cartItem) => {
        return cartItem.totalPrice + total;
    }, 0)
}

export const getTotalQuantity = state => {
    return state.cart.cartItem.reduce((total, cartItem) => {
        return cartItem.quantity + total;
    }, 0)
}

export const getCartItems = state => state.cart.cartItem;
export const { addItemToCart, removeItemFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
