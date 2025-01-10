"use client";

// import
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupSlice {
  signupLoading: boolean;
  signupErrors: string | null;
}

const initialState: SignupSlice = {
  signupLoading: false,
  signupErrors: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setSignupLoading: (
      state: SignupSlice,
      { payload }: PayloadAction<SignupSlice["signupLoading"]>
    ): void => {
      state.signupLoading = payload;
    },
    setSignupErrors: (
      state: SignupSlice,
      { payload }: PayloadAction<SignupSlice["signupErrors"]>
    ): void => {
      state.signupErrors = payload;
    },
  },
});

const { reducer, actions } = signupSlice;
export default reducer;
export const { setSignupLoading, setSignupErrors } = actions;
