"use client";

// import
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  loginLoading: boolean;
  loginErrors: string | null;
}

const initialState: LoginState = {
  loginLoading: false,
  loginErrors: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginLoading: (
      state: LoginState,
      { payload }: PayloadAction<boolean>
    ): void => {
      state.loginLoading = payload;
    },
    setLoginErrors: (
      state: LoginState,
      { payload }: PayloadAction<string | null>
    ): void => {
      state.loginErrors = payload;
    },
  },
});

const { reducer, actions } = loginSlice;
export default reducer;
export const { setLoginLoading, setLoginErrors } = actions;
