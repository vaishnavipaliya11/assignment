import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  crousalImg:[]
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setCarousalImg:(state,action)=>{
        state.crousalImg= action.payload
    }
  },

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
export const {setCarousalImg}= dashboardSlice.actions
export default dashboardSlice.reducer;
