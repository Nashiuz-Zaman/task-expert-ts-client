"use client";

// import
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  loginLoading: boolean;
  loginErrors: string[] | null;
  loginFormOpen: boolean;
}

const initialState: LoginState = {
  loginLoading: false,
  loginErrors: null,
  loginFormOpen: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginLoading: (
      state: LoginState,
      { payload }: PayloadAction<LoginState["loginLoading"]>
    ): void => {
      state.loginLoading = payload;
    },
    setLoginErrors: (
      state: LoginState,
      { payload }: PayloadAction<LoginState["loginErrors"]>
    ): void => {
      state.loginErrors = payload;
    },
    setLoginFormOpen: (
      state: LoginState,
      { payload }: PayloadAction<LoginState["loginFormOpen"]>
    ): void => {
      state.loginFormOpen = payload;
    },
  },
});

const { reducer, actions } = loginSlice;
export default reducer;
export const { setLoginLoading, setLoginErrors, setLoginFormOpen } = actions;
