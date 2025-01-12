"use client";

// react
import { useEffect, useCallback } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  mobileMatched,
  smallTabletMatched,
  largeTabletMatched,
  computerMatched,
  mobileQuery,
  smallTabletQuery,
  largeTabletQuery,
  computerQuery,
} from "@/lib/redux/features/mediaQuery/mediaQuerySlice";
import { RootState } from "@/lib/redux/store";

export default function useMediaQueryMatcher() {
  const dispatch = useDispatch();
  const {
    isMobile,
    isSmallTablet,
    isLargeTablet,
    isComputer,
    isLargeScreen,
    isSmallScreen,
  } = useSelector((state: RootState) => state.mediaQuery);

  const customSizeDetector = useCallback((size: string): boolean => {
    const matches = window.matchMedia(size).matches;
    return matches;
  }, []);

  const setMobileMatched = useCallback(
    (e: MediaQueryListEvent) => {
      if (e.matches) {
        dispatch(mobileMatched());
      }
    },
    [dispatch]
  );

  const setSmallTabletMatched = useCallback(
    (e: MediaQueryListEvent) => {
      if (e.matches) {
        dispatch(smallTabletMatched());
      }
    },
    [dispatch]
  );

  const setLargeTabletMatched = useCallback(
    (e: MediaQueryListEvent) => {
      if (e.matches) {
        dispatch(largeTabletMatched());
      }
    },
    [dispatch]
  );

  const setComputerMatched = useCallback(
    (e: MediaQueryListEvent) => {
      if (e.matches) {
        dispatch(computerMatched());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (mobileQuery && typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", setMobileMatched);
    }
    if (
      smallTabletQuery &&
      typeof smallTabletQuery.addEventListener === "function"
    ) {
      smallTabletQuery.addEventListener("change", setSmallTabletMatched);
    }
    if (
      largeTabletQuery &&
      typeof largeTabletQuery.addEventListener === "function"
    ) {
      largeTabletQuery.addEventListener("change", setLargeTabletMatched);
    }
    if (computerQuery && typeof computerQuery.addEventListener === "function") {
      computerQuery.addEventListener("change", setComputerMatched);
    }

    return () => {
      if (
        mobileQuery &&
        typeof mobileQuery.removeEventListener === "function"
      ) {
        mobileQuery.removeEventListener("change", setMobileMatched);
      }
      if (
        smallTabletQuery &&
        typeof smallTabletQuery.removeEventListener === "function"
      ) {
        smallTabletQuery.removeEventListener("change", setSmallTabletMatched);
      }
      if (
        largeTabletQuery &&
        typeof largeTabletQuery.removeEventListener === "function"
      ) {
        largeTabletQuery.removeEventListener("change", setLargeTabletMatched);
      }
      if (
        computerQuery &&
        typeof computerQuery.removeEventListener === "function"
      ) {
        computerQuery.removeEventListener("change", setComputerMatched);
      }
    };
  }, [
    setMobileMatched,
    setSmallTabletMatched,
    setLargeTabletMatched,
    setComputerMatched,
  ]);

  return {
    isMobile,
    isSmallTablet,
    isLargeTablet,
    isComputer,
    isLargeScreen,
    isSmallScreen,
    customSizeDetector,
  };
}
