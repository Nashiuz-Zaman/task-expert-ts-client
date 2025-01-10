"use client";

// redux
import { useDispatch } from "react-redux";
import { setMobileNavOpen } from "@/lib/redux/features/mobileNav/mobileNavSlice";
import { setBackdropOpen } from "@/lib/redux/features/backdrop/backdropSlice";

const useMobileNavigation = () => {
  const dispatch = useDispatch();

  const setMobileNavBackdropOpen = (open: boolean): void => {
    dispatch(setMobileNavOpen(open));
    dispatch(setBackdropOpen(open));
  };

  return { setMobileNavBackdropOpen };
};

export default useMobileNavigation;
