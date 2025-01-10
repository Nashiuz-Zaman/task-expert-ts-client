"use client";

// import
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  password: string;
  image: string;
  role: string;
}

export interface AuthState {
  profileData: User | null;
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
      { payload }: PayloadAction<AuthState["profileData"]>
    ) => {
      state.profileData = payload;
    },
    setProfileLoading: (
      state: AuthState,
      { payload }: PayloadAction<AuthState["profileLoading"]>
    ) => {
      state.profileLoading = payload;
    },
  },
});

const { reducer, actions } = authSlice;
export default reducer;
export const { setProfileData, setProfileLoading } = actions;
