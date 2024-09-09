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
  AppointmentDetails: {
    DonctorName: string;
    dep: string;
    id: string;
    date: string;
  };
  GlobalUserName: string;
  GlobalPassword: string;
  isLoggin: boolean;
  Isthisemailavailable: boolean;
  IsComeFromAppointment: boolean;
  UserMajor: string;
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
  AppointmentDetails: {
    dep: "Appointment Department",
    DonctorName: "Ali Maher",
    date: "Today At 12 : 00 pm",
    id: "0",
  },
  GlobalUserName: "abdallhsabry194@gmail.com",
  GlobalPassword: "12345678",
  isLoggin: false,
  Isthisemailavailable: true,
  IsComeFromAppointment: false,
  UserMajor: "1",
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
    SwitchLoginPass: (state) => {
      state.IsComeFromAppointment = !state.IsComeFromAppointment;
    },
    SetUserMajor: (state, action) => {
      state.UserMajor = action.payload;
    },
    AddAppointment: (state, action) => {
      state.AppointmentDetails = action.payload;
    },
    CancelAppointment: (state) => {
      state.AppointmentDetails.id = "0";
    },
  },
});

export const {
  SwithLoggin,
  AddNewUser,
  CheckEmailavailable,
  SwitchLoginPass,
  SetUserMajor,
  AddAppointment,
  CancelAppointment,
} = UserState.actions;
export default UserState.reducer;
