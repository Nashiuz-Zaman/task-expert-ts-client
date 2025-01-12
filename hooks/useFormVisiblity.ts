"use client";

// react
import { useCallback } from "react";

// redux
import { useDispatch } from "react-redux";
import {
  setTaskCreateFormOpen,
  setTaskEditFormOpen,
} from "@/lib/redux/features/form/formSlice";

import { setLoginFormOpen } from "@/lib/redux/features/login/loginSlice";
import { setSignupFormOpen } from "@/lib/redux/features/signup/signupSlice";
import { setPasswordResetFormOpen } from "@/lib/redux/features/passwordReset/passwordResetSlice";
import { setBackdropOpen } from "@/lib/redux/features/backdrop/backdropSlice";
// import { setShowTaskDetailsPanel } from "@/lib/redux/features/task/taskSlice";

const useFormVisiblity = () => {
  const dispatch = useDispatch();

  const setLoginFormAndBackdropOpen = useCallback(
    (formOpen: boolean, backdropOpen: boolean | null = null) => {
      dispatch(setLoginFormOpen(formOpen));

      if (backdropOpen !== null) {
        dispatch(setBackdropOpen(backdropOpen));
      }
    },
    [dispatch]
  );

  const setSignupFormAndBackdropOpen = useCallback(
    (formOpen: boolean, backdropOpen: boolean | null = null) => {
      dispatch(setSignupFormOpen(formOpen));

      if (backdropOpen !== null) {
        dispatch(setBackdropOpen(backdropOpen));
      }
    },
    [dispatch]
  );

  const setTaskCreateFormOpenF = useCallback(
    (formOpen: boolean): void => {
      dispatch(setTaskCreateFormOpen(formOpen));
    },
    [dispatch]
  );

  const setTaskEditFormOpenF = useCallback(
    (formOpen: boolean): void => {
      dispatch(setTaskEditFormOpen(formOpen));
    },
    [dispatch]
  );

  const setPasswordResetFormAndBackdropOpen = useCallback(
    (formOpen: boolean, backdropOpen: boolean | null = null) => {
      dispatch(setPasswordResetFormOpen(formOpen));
      
      if (backdropOpen !== null) {
        dispatch(setBackdropOpen(backdropOpen));
      }
    },
    [dispatch]
  );

  //   const openTaskDetailsPanel = useCallback(
  //     (withBackdrop = true): void => {
  //       dispatch(setShowTaskDetailsPanel(true));

  //       if (withBackdrop) {
  //         dispatch(setBackdropOpen(true));
  //       }
  //     },
  //     [dispatch]
  //   );

  //   const closeTaskDetailsPanel = useCallback(
  //     (withBackdrop = true): void => {
  //       dispatch(setShowTaskDetailsPanel(false));

  //       if (withBackdrop) {
  //         dispatch(setBackdropOpen(false));
  //       }
  //     },
  //     [dispatch]
  //   );

  return {
    setLoginFormAndBackdropOpen,
    setSignupFormAndBackdropOpen,
    setPasswordResetFormAndBackdropOpen,
    setTaskCreateFormOpenF,
    setTaskEditFormOpenF,
  };
};

export default useFormVisiblity;
