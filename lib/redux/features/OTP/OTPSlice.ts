"use client";

// import
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OTP {
  OTPFormOpen: boolean;
  OTPLoading: boolean;
  OTPErrors: string[] | null;
}

const initialState: OTP = {
  OTPFormOpen: false,
  OTPLoading: false,
  OTPErrors: null,
};

const OTPSlice = createSlice({
  name: "OTP",
  initialState,
  reducers: {
    setOTPFormOpen: (
      state: OTP,
      { payload }: PayloadAction<OTP["OTPFormOpen"]>
    ) => {
      state.OTPFormOpen = payload;
    },
    setOTPLoading: (
      state: OTP,
      { payload }: PayloadAction<OTP["OTPLoading"]>
    ) => {
      state.OTPLoading = payload;
    },
    setOTPErrors: (
      state: OTP,
      { payload }: PayloadAction<OTP["OTPErrors"]>
    ) => {
      state.OTPErrors = payload;
    },
  },
});

const { reducer, actions } = OTPSlice;
export default reducer;
export const { setOTPFormOpen, setOTPLoading, setOTPErrors } = actions;
