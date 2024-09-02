import { configureStore } from "@reduxjs/toolkit";
import GlobalState from "./features/GlobalState/GlobalSlice";
import UserSlice from "./features/User/UserSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      ASR: GlobalState,
      User: UserSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
