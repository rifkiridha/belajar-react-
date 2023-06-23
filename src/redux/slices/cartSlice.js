import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState :{ 
        data: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers:{
        addToCart:(state,action)=>{
            const itemToCart = state.data.find((item)=>item.id === action.payload.id);
            if(itemToCart){
                itemToCart.qty++;
            }else {
                state.data.push(action.payload);
            }
        },
        clearCart:(state)=>{
                state.data=[];
        },
    },
});

// export untuk akses ke fungsi addtocart sebagai actionnya
export const {addToCart} = cartSlice.actions;
export const {clearCart} = cartSlice.actions;
export default cartSlice.reducer;