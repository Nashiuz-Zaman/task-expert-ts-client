"use client";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
// react
import { useCallback } from "react";

// redux
import { useDispatch } from "react-redux";

const useResetForm = () => {
  const dispatch = useDispatch();

  const resetFormFieldsAndErrors = useCallback(
    <T>(
      formElRef: React.RefObject<HTMLFormElement>,
      setErrors: ActionCreatorWithPayload<T>
    ): void => {
      formElRef?.current?.reset();
      dispatch(setErrors(null as T));
    },
    [dispatch]
  );

  return { resetFormFieldsAndErrors };
};

export default useResetForm;
