import {createSlice} from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:({
        addItems:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state)=>{
            state.items.length=0
        },
        rmvCart:(state)=>{
            state.items.pop()
        }
    })
});

export const {addItems,clearCart,rmvCart}=cartSlice.actions; 
export default cartSlice.reducer;