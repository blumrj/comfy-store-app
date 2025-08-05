import { createSlice } from "@reduxjs/toolkit";

const getItemsFromLocalStorage = () => {
  return localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
};

const initialState = {
  cartItems: getItemsFromLocalStorage(),
  cartItemStatus: null, // added | duplicate | null | edited
  numItemsInCart: 0,
  subtotal: 0,
  shippingFee: 500,
  taxFee: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //destructure payload
      const { id, selectedColor } = action.payload;
      //check if the item is already in the cartItems array
      const ifExistsInArray = state.cartItems.find(
        (item) => item.id === id && item.selectedColor === selectedColor
      );

      //if it is, set the status
      if (ifExistsInArray) {
        state.cartItemStatus = "exists";
      }
      //if it isn't, add it to the items array
      else {
        state.cartItems.push(action.payload);
        state.cartItemStatus = "added";
      }
    },

    removeItemFromCart: (state, action) => {
      const { id, selectedColor } = action.payload;

      //keep every item except the one with both a matching id and selectedColor.
      state.cartItems = state.cartItems.filter(
        (item) => !(item.id == id && item.selectedColor == selectedColor)
      );
    },

    editItemColor: (state, action) => {
      const { id, selectedColor, newColor } = action.payload;

      state.cartItems = state.cartItems.map((item) => {
        if (item.id === id && item.selectedColor === selectedColor) {
          item.selectedColor = newColor;
        }

        return item;
      });
    },

    editItemAmount: () => {},
    checkout: () => {},
    clearItemStatus: (state) => {
      state.cartItemStatus = null;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  editItemColor,
  editItemAmount,
  checkout,
  clearItemStatus,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
