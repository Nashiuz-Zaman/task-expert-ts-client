"use client";

// imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBackdropSlice {
  backdropOpen: boolean;
}

const initialState: IBackdropSlice = {
  backdropOpen: false,
};

const backdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    setBackdropOpen: (
      state: IBackdropSlice,
      { payload }: PayloadAction<IBackdropSlice["backdropOpen"]>
    ) => {
      state.backdropOpen = payload;
    },
  },
});

const { actions, reducer } = backdropSlice;

export default reducer;
export const { setBackdropOpen } = actions;
