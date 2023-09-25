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
    
  },
});
export const {setCarousalImg}= dashboardSlice.actions
export default dashboardSlice.reducer;
