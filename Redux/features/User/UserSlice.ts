import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
  newuser: {
    NewFirstName: string;
    NewLastName: string;
    NewPhone: number;
    NewEmail: string;
    Address: string;
  }[];
  userNameFromStore: string;
  PassWordFromStore: string;
  isLoggin: boolean;
}
const initialState: IUserState = {
  newuser: [],
  userNameFromStore: "Abdallh",
  PassWordFromStore: "1234",
  isLoggin: false,
};

const UserState = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    ActiveLoggin: (state) => {
      state.isLoggin = true;
    },
  },
});

export const { ActiveLoggin } = UserState.actions;
export default UserState.reducer;
