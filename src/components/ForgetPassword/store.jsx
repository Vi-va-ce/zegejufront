import { configureStore } from "@reduxjs/toolkit";
import otpSlice from "./otpSlice";

const store = configureStore({
  reducer: {
    otp: otpSlice,
  },
});

export default store;
