import { createSlice } from "@reduxjs/toolkit";

//we're defining a slice(userSlice) that will manage the state of the user-related data.

//a reducer takes the current state and the defined actions, and updates the state based on what the action tells it to do. A reducer is basically like a state updater.

//createSlice() function takes in an object as an argument, and in that object we pass the initial state (object), name of the slice, a set of reducer function that will handle the action.

// createSlice() returns an object with properties like:
// - reducer: the main reducer function for this slice
// - actions: an object containing auto-generated action creators
// We export these for use in store setup and component dispatching.

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const getThemeFromLocalStorage = () => {
  //get the theme from the local storage or return 'caramellatte'
  return localStorage.getItem("theme") || "caramellatte";
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //case reducer functions - functions that update the state
    // action creators - functions that return the action object to trigger the case reducer
    // each of these case reducer functions receive state and action arguments.
    // state represents the current state of the slice.
    // action is an object that contains the name of the action dispatched and the payload (data that was passed in when dispatching an action)

    //we should only manage the state change in the case reducer functions, we should't perform any side effect such as localstorage or modifying the DOM
    loginUser: (state, action) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = null;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "caramellatte" ? "dim" : "caramellatte";
    },
  },
});

//we define the name of a case reducer function
//rtk then uses that name to generate an action creator function - a function that will create an action.
//we export that action creator function and we then dispatch it.
// when that action is dispatched, it will look for the case reducer function based on the name, and then change the state based on the logic within that case reducer function

//We export the auto-generated action creators (based on our case reducer function names), which we can use to dispatch actions.
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

// we export the reducer function that we can later register in the store.js file
export default userSlice.reducer;
