import { createSlice } from "@reduxjs/toolkit";
import { FoodData } from "../FoodData";

const initialState = {
  singleCart: [],
  items: FoodData,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.singleCart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.singleCart.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {
      const itemToRemove = state.singleCart.find((item) => item.id === action.payload);
      if (itemToRemove) {
        state.singleCart = state.singleCart.filter((item) => item.id !== action.payload);
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
      }
    },
    incrementItem: (state, action) => {
      const itemToIncrement = state.singleCart.find((item) => item.id === action.payload);
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += itemToIncrement.price;
      }
    },
    decrementItem: (state, action) => {
      const itemToDecrement = state.singleCart.find((item) => item.id === action.payload);
      if (itemToDecrement) {
        itemToDecrement.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= itemToDecrement.price;
        if (itemToDecrement.quantity === 0) {
          state.singleCart = state.singleCart.filter((item) => item.id !== action.payload);
        }
      }
    },
    totalItem: (state) => {
      state.totalPrice = state.singleCart.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0);
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem,totalItem } = cartSlice.actions;
export default cartSlice.reducer;
