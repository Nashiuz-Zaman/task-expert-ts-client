"use client";

// import
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPasswordResetSlice {
  passwordResetLoading: boolean;
  passwordResetFormOpen: boolean;
  passwordResetErrors: string[] | null;
}

const initialState: IPasswordResetSlice = {
  passwordResetLoading: false,
  passwordResetFormOpen: false,
  passwordResetErrors: null,
};

const passwordResetSlice = createSlice({
  name: "passwordReset",
  initialState,
  reducers: {
    setPasswordResetLoading: (
      state: IPasswordResetSlice,
      { payload }: PayloadAction<IPasswordResetSlice["passwordResetLoading"]>
    ): void => {
      state.passwordResetLoading = payload;
    },
    setPasswordResetFormOpen: (
      state: IPasswordResetSlice,
      { payload }: PayloadAction<IPasswordResetSlice["passwordResetFormOpen"]>
    ): void => {
      state.passwordResetFormOpen = payload;
    },
    setPasswordResetErrors: (
      state: IPasswordResetSlice,
      { payload }: PayloadAction<IPasswordResetSlice["passwordResetErrors"]>
    ): void => {
      state.passwordResetErrors = payload;
    },
  },
});

const { reducer, actions } = passwordResetSlice;
export default reducer;
export const {
  setPasswordResetLoading,
  setPasswordResetFormOpen,
  setPasswordResetErrors,
} = actions;
