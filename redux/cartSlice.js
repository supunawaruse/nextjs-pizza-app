import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action) =>{
            state.products.push(action.payload)
            state.quantity += 1
            state.total += action.payload.price * action.payload.quantity

        },
        removeFromCart:(state,action) =>{
            let valueToRemove = [state.products[action.payload.index]]
            state.products = state.products.filter(element => !valueToRemove.includes(element))
            state.quantity -= 1
            state.total -= action.payload.product.price * action.payload.product.quantity
        },
        reset:(state) => {
            state.products = [],
            state.quantity = 0,
            state.total = 0
        }
    }
})

export const {addProduct,reset,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;