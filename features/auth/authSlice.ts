import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoggedIn: false,

  loggedUser: {
    name: "",
    password: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder;
    // .addCase(getAllPosts.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(getAllPosts.fulfilled, (state, { payload }) => {
    //   // state.allPosts = payload?.posts;
    //   state.loading = false;
    // })
    // .addCase(getAllPosts.rejected, (state) => {
    //   state.loading = false;
    // });
  },
});

export default authSlice.reducer;
