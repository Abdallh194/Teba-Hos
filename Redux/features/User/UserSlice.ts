import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
  newuser: {
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    Password: string;
    Address: string;
    NiD: string;
    Gender: string;
    confirmPassword: string;
  };
  GlobalUserName: string;
  GlobalPassword: string;
  isLoggin: boolean;
  Isthisemailavailable: boolean;
}
const initialState: IUserState = {
  newuser: {
    FirstName: "Abdallh",
    LastName: "Rakha",
    Phone: "01091415560",
    Email: "abdallhsabry194@gmail.com",
    Address: "Tanta",
    Password: "12345678@",
    NiD: "12345678",
    Gender: "Male",
    confirmPassword: "s121",
  },
  GlobalUserName: "abdallhsabry194@gmail.com",
  GlobalPassword: "12345678",
  isLoggin: false,
  Isthisemailavailable: true,
};

const UserState = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    SwithLoggin: (state) => {
      state.isLoggin = !state.isLoggin;
    },
    AddNewUser: (state, action) => {
      state.newuser = action.payload;
    },
    CheckEmailavailable: (state, action) => {
      if (state.newuser.Email === action.payload) {
        state.Isthisemailavailable = false;
      } else {
        state.Isthisemailavailable = true;
      }
    },
  },
});

export const { SwithLoggin, AddNewUser, CheckEmailavailable } =
  UserState.actions;
export default UserState.reducer;
