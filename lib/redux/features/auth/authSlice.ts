"use client";

// import
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  email: string;
  password: string;
  image: string;
  _id?: string;
}

export interface IAuthState {
  profileData: IUser | null;
  profileLoading: boolean;
}

const initialState: IAuthState = {
  profileData: null,
  profileLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProfileData: (
      state: IAuthState,
      { payload }: PayloadAction<IAuthState["profileData"]>
    ) => {
      state.profileData = payload;
    },
    setProfileLoading: (
      state: IAuthState,
      { payload }: PayloadAction<IAuthState["profileLoading"]>
    ) => {
      state.profileLoading = payload;
    },
  },
});

const { reducer, actions } = authSlice;
export default reducer;
export const { setProfileData, setProfileLoading } = actions;
