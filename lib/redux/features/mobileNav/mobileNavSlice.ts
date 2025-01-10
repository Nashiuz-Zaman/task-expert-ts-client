"use client";

// import
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MobileNavState {
  mobileNavOpen: boolean;
}

const initialState: MobileNavState = {
  mobileNavOpen: false,
};

const mobileNavSlice = createSlice({
  name: "mobileNav",
  initialState,
  reducers: {
    setMobileNavOpen: (
      state: MobileNavState,
      { payload }: PayloadAction<boolean>
    ) => {
      state.mobileNavOpen = payload;
    },
  },
});

const { reducer, actions } = mobileNavSlice;

export const { setMobileNavOpen } = actions;
export default reducer;
