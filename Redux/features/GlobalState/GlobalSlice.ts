import { createSlice } from "@reduxjs/toolkit";

export interface IGlobalState {
  expNum: number;
  StaffNum: number;
  TPationNum: string;
}
const initialState: IGlobalState = {
  expNum: 852,
  StaffNum: 725,
  TPationNum: "650,000",
};

const GlobalState = createSlice({
  name: "GlobalState",
  initialState,
  reducers: {
    ActiveLoggin: (state) => {},
  },
});

export const { ActiveLoggin } = GlobalState.actions;
export default GlobalState.reducer;
