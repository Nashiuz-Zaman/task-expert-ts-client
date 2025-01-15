"use client";

// hooks

import useFormVisiblity from "./useFormVisiblity";

// redux
import { useDispatch } from "react-redux";

// utils
import { axiosCustom } from "@/utils/axios";
import {
  setSignupErrors,
  setSignupLoading,
} from "@/lib/redux/features/signup/signupSlice";
import { FormEvent } from "react";
import { validatePassword } from "@/utils/validatePassword";
import axios from "axios";
import { showNetworkErr } from "@/utils/showNetworkErr";
import { setOTPFormOpen } from "@/lib/redux/features/OTP/OTPSlice";

// custom hook body starts here
const useSignupMethods = () => {
  const dispatch = useDispatch();

  // function to run when the form is submitted
  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    // reset errors
    dispatch(setSignupErrors(null));

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const foundErrors = validatePassword(password);

    // if there are erros return from here
    if (foundErrors.length) {
      dispatch(setSignupErrors(foundErrors));
      return;
    }

    // if there are no basic errors code will reach this line
    try {
      dispatch(setSignupLoading(true));
      const res = await axiosCustom.post("/users", {
        name,
        email,
        password,
      });

      if (res?.data?.status === "success") {
        dispatch(setOTPFormOpen(true));
      }
    } catch (error) {
      if (error) {
        if (axios.isAxiosError(error))
          dispatch(setSignupErrors([error?.response?.data?.message]));
        return;
      }

      showNetworkErr();
    } finally {
      dispatch(setSignupLoading(false));
    }
  };

  return {
    handleSignup,
  };
};

export default useSignupMethods;
