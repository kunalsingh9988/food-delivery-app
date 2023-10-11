import { createSlice } from "@reduxjs/toolkit";
import { FoodData } from "../FoodData";

const initialState = {
  singleCart: [],
  orderList: [],
  items: FoodData,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.singleCart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // Check if the quantity is less than 1 before increasing it
        if (existingItem.quantity !== undefined && existingItem.quantity < 1) {
          existingItem.quantity += 1;
          state.totalPrice += action.payload.price;
        }
      } else {
        state.singleCart.push({ ...action.payload, quantity: 1 });
        state.totalPrice += action.payload.price;
      }
    },
    addToOrder: (state, action) => {
      state.orderList.push(...action.payload);
    },
    removeToOrder : (state,action)=> {
      state.orderList = state.orderList.filter((item)=> item.id !== action.payload)
    },
    removeItem: (state, action) => {
      const itemToRemove = state.singleCart.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        state.singleCart = state.singleCart.filter(
          (item) => item.id !== action.payload
        );
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
      }
    },
    incrementItem: (state, action) => {
      const itemToIncrement = state.singleCart.find(
        (item) => item.id === action.payload
      );
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += itemToIncrement.price;
      }
    },
    decrementItem: (state, action) => {
      const itemToDecrement = state.singleCart.find(
        (item) => item.id === action.payload
      );
      if (itemToDecrement) {
        itemToDecrement.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= itemToDecrement.price;
        if (itemToDecrement.quantity === 0) {
          state.singleCart = state.singleCart.filter(
            (item) => item.id !== action.payload
          );
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

export const {
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
  totalItem,
  addToOrder,
  removeToOrder
} = cartSlice.actions;
export default cartSlice.reducer;
