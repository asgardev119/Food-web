import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
    },

    // removeItem: (state) => {
    //   state.items.pop();
    // },

    clearCart: (state) => {
      state.items.length = 0;
    },

    deleteItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.card.info.id === action.payload.id
      );  
      if (item) {
        item.quantity = action.payload.quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const { addItem, clearCart, deleteItem, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
