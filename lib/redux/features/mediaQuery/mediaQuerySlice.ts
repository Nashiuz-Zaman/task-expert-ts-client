"use client";

//redux
import { createSlice } from "@reduxjs/toolkit";

//media queries
const isClient = typeof window === "object";
const mobile = "(max-width: 480px)";
export const mobileQuery = isClient && window.matchMedia(mobile);

const smallTablet = "(min-width: 481px) and (max-width: 767px)";
export const smallTabletQuery = isClient && window.matchMedia(smallTablet);

const largeTablet = "(min-width: 768px) and (max-width: 1023px)";
export const largeTabletQuery = isClient && window.matchMedia(largeTablet);

const computer = "(min-width: 1024px)";
export const computerQuery = isClient && window.matchMedia(computer);

const initialState = {
  isMobile: mobileQuery && "matches" in mobileQuery && mobileQuery.matches,
  isSmallTablet:
    smallTabletQuery &&
    "matches" in smallTabletQuery &&
    smallTabletQuery.matches,
  isLargeTablet:
    largeTabletQuery &&
    "matches" in largeTabletQuery &&
    largeTabletQuery.matches,
  isComputer:
    computerQuery && "matches" in computerQuery && computerQuery.matches,
  isLargeScreen:
    (computerQuery && "matches" in computerQuery && computerQuery.matches) ||
    (largeTabletQuery &&
      "matches" in largeTabletQuery &&
      largeTabletQuery.matches),
  isSmallScreen:
    (mobileQuery && "matches" in mobileQuery && mobileQuery.matches) ||
    (smallTabletQuery &&
      "matches" in smallTabletQuery &&
      smallTabletQuery.matches),
};

const mediaQuerySlice = createSlice({
  name: "mediaQuery",
  initialState,
  reducers: {
    mobileMatched: (state) => {
      state.isMobile = true;
      state.isSmallTablet = false;
      state.isLargeTablet = false;
      state.isComputer = false;
      state.isLargeScreen = false;
      state.isSmallScreen = true;
    },
    smallTabletMatched: (state) => {
      state.isMobile = false;
      state.isSmallTablet = true;
      state.isLargeTablet = false;
      state.isComputer = false;
      state.isLargeScreen = false;
      state.isSmallScreen = true;
    },
    largeTabletMatched: (state) => {
      state.isMobile = false;
      state.isSmallTablet = false;
      state.isLargeTablet = true;
      state.isComputer = false;
      state.isLargeScreen = true;
      state.isSmallScreen = false;
    },
    computerMatched: (state) => {
      state.isMobile = false;
      state.isSmallTablet = false;
      state.isLargeTablet = false;
      state.isComputer = true;
      state.isLargeScreen = true;
      state.isSmallScreen = false;
    },
  },
});

const { reducer, actions } = mediaQuerySlice;

export default reducer;
export const {
  mobileMatched,
  smallTabletMatched,
  largeTabletMatched,
  computerMatched,
} = actions;
