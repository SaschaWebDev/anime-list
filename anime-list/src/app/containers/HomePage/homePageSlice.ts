import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    incrementCounter: (state, action) => {
      state.counter += 1; // state is not mutated here but a new copy reference is created
    },
  },
});

export const { incrementCounter } = HomePageSlice.actions;
export default HomePageSlice.reducer;
