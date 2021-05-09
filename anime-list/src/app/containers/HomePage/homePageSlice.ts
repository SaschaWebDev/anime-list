import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./types";

const initialState: IHomePageState = {
  animePage: null,
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {},
});

export const {} = HomePageSlice.actions;
export default HomePageSlice.reducer;
