import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice'
import cartReducer from './features/cart/cartSlice'

//centralized place where we store application state that we want to share across components in the app

//redux store is a js object which holds the application's state. This is a read only obj, we can't modify it directly. Instead, we dispatch actions to request changes. Each slice is managed by reducers that define how each state(slice) updates.

//store is designed to store multiple slices (state). Each slice represents a feature in the app. That slice is managed by a slice reducer function which is defined with createSlice(). Then, after we define a reducer for a slice, we register it here in the store.



// creating redux store
export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
})