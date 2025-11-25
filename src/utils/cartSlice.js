import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:'cart',
  initialState:{
    items:[]
  },
  reducers:{
    addItems:(state,action)=>{
      state.items.push(action.payload);
    },
    removeItems:(state,action)=>{
      state.items = state.items.filter((data)=>{
        console.log("::::::::::::::::::::::slice data ",data);
        return data.card.info.id != action.payload.card.info.id;
      });
    },
    clearItems:(state,action)=>{
      state.items.length= 0;
    }
  }
});

export const {addItems,removeItems,clearItems} = cartSlice.actions;
export default cartSlice.reducer;