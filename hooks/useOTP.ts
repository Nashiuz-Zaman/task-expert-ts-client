"use client";

import {
  setOTPErrors,
  setOTPFormOpen,
  setOTPLoading,
} from "@/lib/redux/features/OTP/OTPSlice";

import { axiosCustom, formDataHeader } from "@/utils/axios";
import { showNetworkErr } from "@/utils/showNetworkErr";
import { showToast } from "@/utils/showToast";
import axios from "axios";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import useFormVisiblity from "./useFormVisiblity";
import { setProfileData } from "@/lib/redux/features/auth/authSlice";

const useOTP = () => {
  const dispatch = useDispatch();
  const { setSignupFormAndBackdropOpen } = useFormVisiblity();

  const handleOTPVerification = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      dispatch(setOTPLoading(true));
      dispatch(setOTPErrors(null));

      if (!(e.target instanceof HTMLFormElement)) {
        console.error("Event target is not a form element.");
        return;
      }
      const formdata = new FormData(e.target as HTMLFormElement);

      const { data } = await axiosCustom.post(
        "/verify-otp",
        formdata,
        formDataHeader
      );

      if (data?.status === "success") {
        console.log(data);
        dispatch(setProfileData(data?.user));
        showToast({ message: "Account verified successfully" });
        setSignupFormAndBackdropOpen(false, false);
        dispatch(setOTPFormOpen(false));
        return;
      }

      showNetworkErr();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const code = error?.response?.status;
        const message = error?.response?.data?.message;

        if (code === 401 || code === 403) {
          dispatch(setOTPErrors([message]));
        }
      } else {
        showNetworkErr();
      }
    } finally {
      dispatch(setOTPLoading(false));
    }
  };

  const handleResendOTP = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      dispatch(setOTPLoading(true));

      const { data } = await axiosCustom.post("/resend-otp");

      if (data.status === "success") {
        showToast({ message: "OTP resent" });
        return;
      }

      showNetworkErr();
    } catch {
      showNetworkErr();
    } finally {
      dispatch(setOTPLoading(false));
    }
  };

  return { handleOTPVerification, handleResendOTP };
};

export default useOTP;
