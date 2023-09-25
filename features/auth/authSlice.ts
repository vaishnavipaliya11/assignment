import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export const initialState = {
  isLoggedIn: false,

  loggedUser: {
    name: "",
    email: "",
    image: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      (state.isLoggedIn = !state.isLoggedIn),
        (state.loggedUser = action.payload);
    },
    setLoggedOut: (state) => {
      (state.isLoggedIn = !state.isLoggedIn),
        (state.loggedUser = {
          name: "",
          email: "",
          image: "",
        });
    },
  },

  extraReducers: (builder) => {
    
    
  },
});
export const { setAuth ,setLoggedOut} = authSlice.actions;
export default authSlice.reducer;
