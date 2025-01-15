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
import { setTaskDetailsPanelOpen } from "@/lib/redux/features/task/taskSlice";

const useFormVisiblity = () => {
  const dispatch = useDispatch();

  const setLoginFormAndBackdropOpen: FormAndBackdropOpenFunction = useCallback(
    (formOpen, backdropOpen = null) => {
      dispatch(setLoginFormOpen(formOpen));

      if (backdropOpen !== null) {
        dispatch(setBackdropOpen(backdropOpen));
      }
    },
    [dispatch]
  );

  const setSignupFormAndBackdropOpen: FormAndBackdropOpenFunction = useCallback(
    (formOpen, backdropOpen = null) => {
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

  const setPasswordResetFormAndBackdropOpen: FormAndBackdropOpenFunction =
    useCallback(
      (formOpen, backdropOpen = null) => {
        dispatch(setPasswordResetFormOpen(formOpen));

        if (backdropOpen !== null) {
          dispatch(setBackdropOpen(backdropOpen));
        }
      },
      [dispatch]
    );

  const setTaskDetailsPanelOpenF: FormAndBackdropOpenFunction = useCallback(
    (formOpen, backdropOpen = null) => {
      dispatch(setTaskDetailsPanelOpen(formOpen));

      if (backdropOpen !== null) {
        dispatch(setBackdropOpen(backdropOpen));
      }
    },
    [dispatch]
  );

  return {
    setLoginFormAndBackdropOpen,
    setSignupFormAndBackdropOpen,
    setPasswordResetFormAndBackdropOpen,
    setTaskCreateFormOpenF,
    setTaskEditFormOpenF,
    setTaskDetailsPanelOpenF,
  };
};

export default useFormVisiblity;
