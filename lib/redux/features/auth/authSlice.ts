"use client";

// import
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  profileData: object | null;
  profileLoading: boolean;
}

const initialState: AuthState = {
  profileData: null,
  profileLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProfileData: (
      state: AuthState,
      { payload }: PayloadAction<object | null>
    ) => {
      state.profileData = payload;
    },
    setProfileLoading: (
      state: AuthState,
      { payload }: PayloadAction<boolean>
    ) => {
      state.profileLoading = payload;
    },
  },
});

const { reducer, actions } = authSlice;
export default reducer;
export const { setProfileData, setProfileLoading } = actions;
